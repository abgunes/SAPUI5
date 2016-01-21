sap.ui.controller("myui5app2.firstView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf myui5app2.firstView
*/
	onInit: function() {
	
	//	var jsonModel= new sap.ui.model.json.JSONModel("mvcexample/model/employees.json");
	//	sap.ui.getCore().setModel(jsonModel);
	var sUrl="http://services.odata.org/V2/Northwind/Northwind.svc/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl);
	var oCore = sap.ui.getCore();
	oCore.setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf myui5app2.firstView
*/
	onBeforeRendering: function() {
		
		sap.ui.getCore().byId("tableId").bindRows("/Employees");

	},
	
	cellSelected : function(oEvent){
		
		alert("Hello Aishwary!!!");
	},
	formattertoUpperCase : function(value){
		var new_value=value.toUpperCase();
		return new_value;
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf myui5app2.firstView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf myui5app2.firstView
*/
//	onExit: function() {
//
//	}

});