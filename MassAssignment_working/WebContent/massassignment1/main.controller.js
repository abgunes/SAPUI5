sap.ui.controller("massassignment1.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf massassignment1.main
*/
	onInit: function(evt) {

		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("massassignment1/model/kpi.json");
		this.getView().setModel(oModel);
		
	},
	
	handleSelectChange: function (oEvent) {
		var mode = oEvent.getParameter("selectedItem").getKey();
		this.getView().byId("KpiList").setMode(mode);
	},


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf massassignment1.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf massassignment1.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf massassignment1.main
*/
	onExit: function() {

		this._oMockServer.stop();
	}

});