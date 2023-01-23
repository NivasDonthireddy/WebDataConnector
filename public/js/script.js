let myConnector = tableau.makeConnector();
myConnector.getSchema = (schemaCallback) => {
  var requirementTraceabilityCols = [
    {
      id: "BusinessFunctionId",
      alias: "BusinessFunctionId",
      description: "BusinessFunctionId",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "BusinessFunctionName",
      alias: "BusinessFunctionName",
      description: "BusinessFunctionName",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "ProcessGroupId",
      alias: "ProcessGroupId",
      description: "ProcessGroupId",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "ProcessGroupName",
      alias: "ProcessGroupName",
      description: "ProcessGroupName",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "ProcessId",
      alias: "ProcessId",
      description: "ProcessId",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "ProcessName",
      alias: "ProcessName",
      description: "ProcessName",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "SubProcessId",
      alias: "SubProcessId",
      description: "SubProcessId",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "SubProcessName",
      alias: "SubProcessName",
      description: "SubProcessName",
      dataType: tableau.dataTypeEnum.string,
    },
  ];

  var requirementTraceabilityTableSchema = {
    id: "requirementTraceability",
    alias: "Requirement Traceability Data",
    columns: requirementTraceabilityCols,
  };

  var fitGapCols = [
    {
      id: "L1Code",
      alias: "L1Code",
      description: "L1Code",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "L1Name",
      alias: "L1Name",
      description: "L1Name",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "L2Code",
      alias: "L2Code",
      description: "L2Code",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "L2Name",
      alias: "L2Name",
      description: "L2Name",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "L3Code",
      alias: "L3Code",
      description: "L3Code",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "L3Name",
      alias: "L3Name",
      description: "L3Name",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "L4Code",
      alias: "L4Code",
      description: "L4Code",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "L4Name",
      alias: "L4Name",
      description: "L4Name",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "UserStoryID",
      alias: "UserStoryID",
      description: "UserStoryID",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "UserStoryTitle",
      alias: "UserStoryTitle",
      description: "UserStoryTitle",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "UserStoryDescription",
      alias: "UserStoryDescription",
      description: "UserStoryDescription",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "UserStoryAcceptanceCriteria",
      alias: "UserStoryAcceptanceCriteria",
      description: "UserStoryAcceptanceCriteria",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "Type",
      alias: "Type",
      description: "Type",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "Priority",
      alias: "Priority",
      description: "Priority",
      dataType: tableau.dataTypeEnum.float,
    },
    {
      id: "FitGapAssessment",
      alias: "FitGapAssessment",
      description: "FitGapAssessment",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "CountrySpecificity",
      alias: "CountrySpecificity",
      description: "CountrySpecificity",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "SolutionDisposition",
      alias: "SolutionDisposition",
      description: "SolutionDisposition",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "UserStorySize",
      alias: "UserStorySize",
      description: "UserStorySize",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "JobProfile",
      alias: "JobProfile",
      description: "JobProfile",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "Comments",
      alias: "Comments",
      description: "Comments",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "LinkedObjects",
      alias: "LinkedObjects",
      description: "LinkedObjects",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "SystemAdminLock",
      alias: "SystemAdminLock",
      description: "SystemAdminLock",
      dataType: tableau.dataTypeEnum.bool,
    },
    {
      id: "Status",
      alias: "Status",
      description: "Status",
      dataType: tableau.dataTypeEnum.string,
    },
  ];

  var fitGapTableSchema = {
    id: "fitGap",
    alias: "Fit Gap Data",
    columns: fitGapCols,
  };

  var kddCols = [
    {
      id: "L1Code",
      alias: "L1Code",
      description: "L1Code",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "L1Name",
      alias: "L1Name",
      description: "L1Name",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "L2Code",
      alias: "L2Code",
      description: "L2Code",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "L2Name",
      alias: "L2Name",
      description: "L2Name",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "KDDID",
      alias: "KDDID",
      description: "KDDID",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "KDDTitle",
      alias: "KDDTitle",
      description: "KDDTitle",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "ProblemStatement",
      alias: "ProblemStatement",
      description: "ProblemStatement",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "Recommendation",
      alias: "Recommendation",
      description: "Recommendation",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "Impact",
      alias: "Impact",
      description: "Impact",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "ImpactedProcesses",
      alias: "ImpactedProcesses",
      description: "ImpactedProcesses",
      dataType: tableau.dataTypeEnum.float,
    },
    {
      id: "DecisionType",
      alias: "DecisionType",
      description: "DecisionType",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "SolutionDetails",
      alias: "SolutionDetails",
      description: "SolutionDetails",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "OtherConsiderations",
      alias: "OtherConsiderations",
      description: "OtherConsiderations",
      dataType: tableau.dataTypeEnum.string,
    },
    {
      id: "SystemAdminLock",
      alias: "SystemAdminLock",
      description: "SystemAdminLock",
      dataType: tableau.dataTypeEnum.bool,
    },
    {
      id: "Status",
      alias: "Status",
      description: "Status",
      dataType: tableau.dataTypeEnum.string,
    },
  ];

  var kddTableSchema = {
    id: "kdd",
    alias: "KDD Data",
    columns: kddCols,
  };

  var usersCols = [
    {
      id: "displayName",
      alias: "Display Name",
      description: "displayName",
      dataType: tableau.dataTypeEnum.string,
    },
  ];

  var usersSchema = {
    id: "users",
    alias: "Users",
    columns: usersCols,
  };

  schemaCallback([
    requirementTraceabilityTableSchema,
    fitGapTableSchema,
    kddTableSchema,
    usersSchema
  ]);
};
myConnector.getData = (table, doneCallback) => {
  let engagementId = JSON.parse(tableau.connectionData).engagementId;
  let tableData = [];

  if (table.tableInfo.id === "requirementTraceability") {
    let url = `https://dpmo.deloitte.com/process?account=${tableau.password}&engagementId=${engagementId}`;
    fetch(url)
      .then((resp)=>resp.json())
      .then(data=>{
        if(data.error && data.error==='AuthError'){
            throw "AuthError"
        }
        if (data) {
          for (var i = 0, len = data.length; i < len; i++) {
            tableData.push({
              BusinessFunctionId: data[i].BusinessFunctionId,
              BusinessFunctionName: data[i].BusinessFunctionName,
              ProcessGroupId: data[i].ProcessGroupId,
              ProcessGroupName: data[i].ProcessGroupName,
              ProcessId: data[i].ProcessId,
              ProcessName: data[i].ProcessName,
              SubProcessId: data[i].SubProcessId,
              SubProcessName: data[i].SubProcessName,
            });
          }
          table.appendRows(tableData);
          doneCallback();
        } else {
          tableau.abortWithError("Error: Data doesn't Exist!!!");
        }
      })
      .catch((err)=>{
        tableau.abortWithError(err);
    });
  }

  if (table.tableInfo.id === "fitGap") {
    let url = `https://dpmo.deloitte.com/userstories?account=${tableau.password}&engagementId=${engagementId}`;
    fetch(url)
      .then((resp)=>resp.json())
      .then(data=>{
        if(data.error && data.error==='AuthError'){
            throw "AuthError"
        }
        if (data) {
          for (var i = 0, len = data.length; i < len; i++) {
            tableData.push({
              L1Code: data[i].L1Code,
              L1Name: data[i].L1Name,
              L2Code: data[i].L2Code,
              L2Name: data[i].L2Name,
              L3Code: data[i].L3Code,
              L3Name: data[i].L3Name,
              L4Name: data[i].L4Name,
              L4Code: data[i].L4Code,
              L4Name: data[i].L4Name,
              UserStoryID: data[i].UserStoryID,
              UserStoryTitle: data[i].UserStoryTitle,
              UserStoryDescription: data[i].UserStoryDescription,
              UserStoryAcceptanceCriteria:
                data[i].UserStoryAcceptanceCriteria,
              Type: data[i].Type,
              Priority: data[i].Priority,
              // FitGapAssessment: data[i].Fit-GapAssessment,
              CountrySpecificity: data[i].CountrySpecificity,
              SolutionDisposition: data[i].SolutionDisposition,
              UserStorySize: data[i].UserStorySize,
              JobProfile: data[i].JobProfile,
              Comments: data[i].Comments,
              LinkedObjects: data[i].LinkedObjects,
              SystemAdminLock: data[i].SystemAdminLock,
              Status: data[i].Status,
            });
          }
          table.appendRows(tableData);
          doneCallback();
        } else {
          tableau.abortWithError("Error: Data doesn't Exist!!!");
        }
      })
      .catch((err)=>{
        tableau.abortWithError(err);
    });
  }

  if (table.tableInfo.id === "kdd") {
    let url = `https://dpmo.deloitte.com/kdd?account=${tableau.password}&engagementId=${engagementId}`;
    fetch(url)
      .then((resp)=>resp.json())
      .then(data=>{
        if(data.error && data.error==='AuthError'){
            throw "AuthError"
        }
        if (data) {
          for (var i = 0, len = data.length; i < len; i++) {
            tableData.push({
              L1Code: data[i].L1Code,
              L1Name: data[i].L1Name,
              L2Code: data[i].L2Code,
              L2Name: data[i].L2Name,
              KDDID: data[i].KDDID,
              KDDTitle: data[i].KDDTitle,
              ProblemStatement: data[i].ProblemStatement,
              Recommendation: data[i].Recommendation,
              Impact: data[i].Impact,
              ImpactedProcesses: data[i].ImpactedProcesses,
              DecisionType: data[i].DecisionType,
              SolutionDetails: data[i].SolutionDetails,
              OtherConsiderations: data[i].OtherConsiderations,
              SystemAdminLock: data[i].SystemAdminLock,
              Status: data[i].Status,
            });
          }
          table.appendRows(tableData);
          doneCallback();
        } else {
          tableau.abortWithError("Error: Data doesn't Exist!!!");
        }
      })
      .catch((err)=>{
        tableau.abortWithError(err);
    });
  }
};

function submit() {
  tableau.password = Cookies.get("home_account");
  var engagementId = $("#query").val();
  tableau.connectionData = JSON.stringify({ engagementId });
  tableau.connectionName = "ECON_API";
  tableau.submit();
}

function authRedirect(){
  window.location.href = "https://dpmo.deloitte.com"
}

tableau.registerConnector(myConnector);