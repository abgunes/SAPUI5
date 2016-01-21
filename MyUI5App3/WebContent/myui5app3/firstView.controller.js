sap.ui.controller("myui5app3.firstView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf myui5app3.firstView
*/
	onInit: function() {
		var oVizFrame = this.getView().byId("idVizFrameLine");
		var oPopOver = this.getView().byId("idPopOver");
		
		var oModel = new sap.ui.model.json.JSONModel({
			businessData : [
				{Company :"SAP",temprature:410.87,power:141.25, hour:1},
				{Company :"SAP",temprature:338.29,power:133.82, hour:2},
				{Company :"SAP",temprature:487.66,power:348.76, hour:3},
				{Company :"SAP",temprature:470.23,power:217.29, hour:4},
				{Company :"SAP",temprature:170.93,power:117.00, hour:5},
				{Company :"SAP",temprature:905.08,power:609.16, hour:6}
			]
		});		
		
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions: [{
				name: 'Hour',
				value: "{hour}"	
			}],
			measures: [{
				name: 'Temprature',
				value: '{temprature}'
			},
			{
				name: 'Power',
				value: '{power}'
			}
			],
			
			data :{
				path : "/businessData"
			}
			
		});
		
		oVizFrame.setVizProperties({
			valueAxis: {
				label: {
					formatString: 'u'
				}
			},
			orientation : 'vertical',
			plotArea: {
				dataLabel: {
					visible: true
				}
			},
			legend: {
				title: {
					visible: true
				}
			},

			title: {
				visible: true,
				text: 'Temprature and Power'
			}
		});
		oVizFrame.setDataset(oDataset);
		oVizFrame.setModel(oModel);
		oVizFrame.zoom({direction: "out"});

		
		var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid': "valueAxis",
				'type': "Measure",
				'values': ["Temprature","Power"]
			}),
			feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid': "categoryAxis",
				'type': "Dimension",
				'values': ["Hour"]
			}),
			feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid': "color",
				'type': "Dimension",
				'values': ["Company"]
			});

		oVizFrame.addFeed(feedValueAxis);
		oVizFrame.addFeed(feedCategoryAxis);
		//oVizFrame.addFeed(feedColor);
		oPopOver.connect(oVizFrame.getVizUid());

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf myui5app3.firstView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf myui5app3.firstView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf myui5app3.firstView
*/
//	onExit: function() {
//
//	}

});