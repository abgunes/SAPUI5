sap.ui.controller("DualAxis.test.dualaxis.line", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf dualaxis.line
*/
	onInit: function() {
		var oVizFrame = this.byId("dualline");

		
		var oModel = {
			data : [
				{Company :"SAP",temprature:410.87,power:141.25, hour:1},
				{Company :"SAP",temprature:338.29,power:133.82, hour:2},
				{Company :"SAP",temprature:487.66,power:348.76, hour:3},
				{Company :"SAP",temprature:470.23,power:217.29, hour:4},
				{Company :"SAP",temprature:170.93,power:117.00, hour:5},
				{Company :"SAP",temprature:905.08,power:609.16, hour:6}
			]
		};		
		
		var oData = {
			dimensions: [{
				axis :1,
				name: 'Hour',
				value: "{hour}"	
			}],
			measures: [{
				group :1,
				name: 'Temprature',
				value: '{temprature}'
			},
			{
				group : 2,
				name: 'Power',
				value: '{power}'
			}
			],
			
			data :{
				path : "/data"
			}
			
		};
		
		var oDataset = new sap.viz.core.FlattenedDataset(oData);
		var oJsonModel = new sap.ui.model.json.JSONModel(oModel);
		oDataset.setModel(oJsonModel);
		oVizFrame.setDataset(oDataset);
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf dualaxis.line
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf dualaxis.line
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf dualaxis.line
*/
//	onExit: function() {
//
//	}

});