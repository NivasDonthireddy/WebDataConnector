// Import dependencies
const express = require("express");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const msal = require('@azure/msal-node');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

var createError = require('http-errors');
var logger = require('morgan');

const config = require('./config/customConfig.json');
const msalCachePlugin = require('./msalCachePlugin');
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const msalConfig = {
    auth: {
        clientId: config.clientId,
        authority: `${config.authority}/${config.tenantInfo}`,
        clientSecret: config.clientSecret,
    },
    cache: {
        cachePlugin: msalCachePlugin(config.msalCacheLocation)
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Verbose,
        }
    }
}

// Initialize MSAL Node application object using authentication parameters
const cca = new msal.ConfidentialClientApplication(msalConfig);

const cryptoProvider = new msal.CryptoProvider();

// Initialize express
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/**
 * Using express-session middleware for persistent user session. Be sure to
 * familiarize yourself with available options. Visit: https://www.npmjs.com/package/express-session
 */
app.use(session({
    secret: config.clientSecret, // or any other random string of characters
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // set this to true on production
    }
}));

const auth = async (req, res, next) => {
    try {
        // retrieve account
        const account = await (await cca.getTokenCache()).getAccountByHomeId(req.session.account?.homeAccountId);

        if (!account) {
            console.log('Account not found!');
            throw new msal.InteractionRequiredAuthError();
        }

        const tokenResponse = await cca.acquireTokenSilent({
            account: account,
            scopes: [config.scopes],
        });
        next();
    } catch (error) {
        if (error instanceof msal.InteractionRequiredAuthError) {
                // create a random string of characters against csrf
                req.session.state = cryptoProvider.createNewGuid();

                // Construct a request object for auth code url
                const authCodeUrlParameters = {
                    scopes: [config.scope],
                    responseMode: 'form_post',
                    redirectUri: config.redirectUri,
                    state: req.session.state,
                };

                try {
                    // Request auth code url, then redirect
                    const authCodeUrl = await cca.getAuthCodeUrl(authCodeUrlParameters);
                    res.redirect(authCodeUrl);
                } catch (error) {
                    next(error);
                }
        } else {
            next(error);
        }
    }
};

app.get('',auth,(req,res)=>{
    res.redirect('success');
});

app.get('/success',(req,res)=>{
    res.cookie('home_account',req.session.account?.homeAccountId).sendFile(path.join(__dirname,'public/','main.html'));
});

app.get('/userstories',async (req,res)=>{
    try {
        // retrieve account
        const home_account = req.query.account;
        const engagementId = req.query.engagementId;
        const account = await (await cca.getTokenCache()).getAccountByHomeId(home_account);

        if (!account) {
            console.log('Account not found!');
            throw new msal.InteractionRequiredAuthError(null,'AuthError');
        }

        const tokenResponse = await cca.acquireTokenSilent({
            account: account,
            scopes: [config.scope],
        });

        const response = await axios.get(`${config.host}/${engagementId}/userstories`,{
            headers: {
                'Authorization': `Bearer ${tokenResponse.accessToken}`,
                "Content-Type": "application/json",
            }
          });
        res.send(response.data);
    } catch (error) {
        res.send({
            error: 'AuthError'
        });
    }
});

app.get('/kdd',async (req,res)=>{
    try {
        // retrieve account
        const home_account = req.query.account;
        const engagementId = req.query.engagementId;
        const account = await (await cca.getTokenCache()).getAccountByHomeId(home_account);

        if (!account) {
            console.log('Account not found!');
            throw new msal.InteractionRequiredAuthError(null,'AuthError');
        }

        const tokenResponse = await cca.acquireTokenSilent({
            account: account,
            scopes: [config.scope],
        });

        const response = await axios.get(`${config.host}/${engagementId}/kdd`,{
            headers: {
                'Authorization': `Bearer ${tokenResponse.accessToken}`,
                "Content-Type": "application/json",
            }
          });
        res.send(response.data);
    } catch (error) {
        res.send({
            error: 'AuthError'
        });
    }
});

app.get('/process',async (req,res)=>{
    try {
        // retrieve account
        const home_account = req.query.account;
        const engagementId = req.query.engagementId;
        const account = await (await cca.getTokenCache()).getAccountByHomeId(home_account);

        if (!account) {
            console.log('Account not found!');
            throw new msal.InteractionRequiredAuthError(null,'AuthError');
        }

        const tokenResponse = await cca.acquireTokenSilent({
            account: account,
            scopes: [config.scope],
        });

        const response = await axios.get(`${config.host}/${engagementId}/process`,{
            headers: {
                'Authorization': `Bearer ${tokenResponse.accessToken}`,
                "Content-Type": "application/json",
            }
          });
        res.send(response.data);
    } catch (error) {
        res.send({
            error: 'AuthError'
        });
    }
});

app.post('/signin-oidc', async (req, res, next) => {
    if(req.body.state) {
        if (req.session.state === req.body.state) {
            try {
                // Exchange the auth code for tokens
                const tokenResponse = await cca.acquireTokenByCode({
                    code: req.body.code,
                    scopes: ["user.read"],
                    redirectUri: config.redirectUri,
                })

                req.session.account = tokenResponse.account;
                req.session.token = tokenResponse.accessToken;
                res.redirect('success');
            } catch (error) {
                next(error);
            }
        } else {
            next(new Error('state does not match'));
        }
    } else {
        next(new Error('state not found'));
    }
});

module.exports = app;
