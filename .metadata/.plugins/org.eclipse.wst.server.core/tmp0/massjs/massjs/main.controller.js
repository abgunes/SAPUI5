sap.ui.controller("massjs.main", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf massjs.main
	 */
	onInit : function() {

		var sUrl = "http://services.odata.org/V2/Northwind/NorthWind.svc/";
		var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);

		oModel.read("/Employees", null, null, true, fSuccess, fError);
		function fSuccess(oEvent) {
			console.log("Employees read successfully!")
			var oEmployees = new sap.ui.model.json.JSONModel(oEvent.results);
			console.log(oEmployees.getProperty("/1/FirstName"));
		}
		;
		function fError(oEvent) {
			console.log("An error occured while reading Employees!")
		}
		;

		sap.ui.getCore().setModel(oModel);

		var scroll = new sap.m.ScrollContainer({
			width : "100%",
			height : '100%',
			vertical : true
		});

		for (i = 1; i <= 2; i++) {

			var Panel1 = new sap.m.Panel("id" + i, {
				expandable : true,
				expanded : false,
				headerText : "Org - " + i,
				Width : "auto",
				class : "sapUiResponsiveMargin",
				ScrollToLoad : true
			});

			scroll.addContent(Panel1);
			sap.ui.getCore().byId("tab1").addContent(scroll);

		}

		var List1 = new sap.m.List("ListId1", {
			mode : "MultiSelect",
			includeItemInSelection : true,

		});

		var List2 = new sap.m.List("ListId2", {
			mode : "MultiSelect",
			includeItemInSelection : true,

		});

		//		

		List1.bindItems({
			path : "/Employees",
			//		    sorter : new sap.ui.model.Sorter("prodName"),
			template : new sap.m.StandardListItem({
				title : "{LastName}",
				description : "{Title}"
			/* bind items to factory-function */

			})
		});

		List2.bindItems({
			path : "/Territories",
			//		    sorter : new sap.ui.model.Sorter("prodName"),
			template : new sap.m.StandardListItem({
				title : "{TerritoryID}",
				description : "{TerritoryDescription}"
			/* bind items to factory-function */

			})
		});

		sap.ui.getCore().byId("id1").addContent(List1);
		sap.ui.getCore().byId("id2").addContent(List2);

	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
 * (NOT before the first rendering! onInit() is used for that one!).
 * @memberOf massjs.main
 */
//	onBeforeRendering: function() {
//
//	},
/**
 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
 * This hook is the same one that SAPUI5 controls get after being rendered.
 * @memberOf massjs.main
 */
//	onAfterRendering: function() {
//
//	},
/**
 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
 * @memberOf massjs.main
 */
//	onExit: function() {
//
//	}
});