sap.ui.jsview("materdetail.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf materdetail.main
	*/ 
	getControllerName : function() {
		return "materdetail.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf materdetail.main
	*/ 
	createContent : function(oController) {

		var oTable = new sap.ui.table.Table({
			width : "100%",			
			title : "Clients",
			visibleRowCount : 5,
			selectionMode : sap.ui.table.SelectionMode.Single,
			editable : false
		});
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "{i18n>ClientId}"}),
			template: new sap.ui.commons.TextField({value:"{id}"})
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "{i18n>FirstName}"}),
			template: new sap.ui.commons.TextField({value:"{firstName}"})
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "{i18n>LastName}"}),
			template: new sap.ui.commons.TextField({value:"{lastName}"})
		}));
 
		
		oTable.bindRows("/clients");
		
		// address details
		var oAddressDetails = new sap.ui.commons.layout.MatrixLayout("addressesid");
		oAddressDetails.setLayoutFixed(false);
		
		oAddressDetails.createRow(
				new sap.ui.commons.Label({text:"Client ID", width:"80px"}),
				new sap.ui.commons.TextField({editable:false, width:"150px", value : "{clientId}"})
			);
		
		oAddressDetails.createRow(
				new sap.ui.commons.Label({text:"Street", width:"80px"}),
				new sap.ui.commons.TextField({editable:false, width:"150px", value : "{street}"})
			);
		
		oAddressDetails.createRow(
				new sap.ui.commons.Label({text:"Postal code", width:"80px"}),
				new sap.ui.commons.TextField({editable:false, width:"50px", value : "{postalcode}"})
			);
		
		oAddressDetails.createRow(
				new sap.ui.commons.Label({text:"City", width:"80px"}),
				new sap.ui.commons.TextField({editable:false, width:"150px", value : "{city}"})
			);
		
		var oCheck = new sap.ui.commons.CheckBox("Checkbox1", {editable:false});
		oCheck.bindChecked("fraud");
		oAddressDetails.createRow(
				new sap.ui.commons.Label({text:"Fraud:", width:"80px"}),
				oCheck
			);
		
	
		// orders table
		var oTable2 = new sap.ui.table.Table("table2",{
			title : "Orders",
			width : "100%",

			selectionMode : sap.ui.table.SelectionMode.Single,
			editable : false
		});
		
		oTable2.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Client ID"}),
			template: new sap.ui.commons.TextField({value:"{clientId}"})
		}));
		
		oTable2.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Order Number"}),
			template: new sap.ui.commons.TextField({value:"{orderNo}"})
		}));
		
		oTable2.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Items"}),
			template: new sap.ui.commons.TextField({value:"{items}"})
		}));
		
		oTable2.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Price"}),
			template: new sap.ui.commons.TextField({value:"{price}"})
		}));
		oTable2.bindRows("/orders");
		
		var oLayout = new sap.ui.layout.VerticalLayout("Layout1", {
			content: [oTable, oAddressDetails, oTable2]
		});
		
		//set the model to the table
		oTable.attachRowSelectionChange(function(oEvent){
			oController.rowSelectionChanged(oEvent);
		});
		
		return oLayout;
		
	}

});
