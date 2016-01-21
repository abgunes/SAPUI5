sap.ui.jsview("myui5app2.firstView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myui5app2.firstView
	*/ 
	getControllerName : function() {
		return "myui5app2.firstView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myui5app2.firstView
	*/ 
	createContent : function(oController) {
		var oTable = new sap.ui.table.Table("tableId", {
			visibleRowCount : 5,
			editable : false,
			title : "Employee",
			navigationMode : sap.ui.table.NavigationMode.Paginator,
			cellClick : function(oEvent){
				oController.cellSelected(oEvent);
			}
		});
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({text : "First Name"}),
			visible : true,
			template : new sap.ui.commons.TextView({text : "{FirstName}"})
			/*template : new sap.ui.commons.TextView({text : {
				path : 'NAME',
				formatter : function(value){
					if (value){
						console.log(value);
						var myvalue = oController.formattertoUpperCase(value);
						return myvalue;
					}
				}}})*/
			}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({text : "Last Age"}),
			visible : true,
			template : new sap.ui.commons.TextView({text: "{LastName}"})
		}));
		return oTable;
	}
	

});


