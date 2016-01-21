sap.ui.controller("materdetail.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf materdetail.main
*/
	onInit: function() {
		
		var mdData = {
	    		clients:[
		    		        {firstName:"Donald", lastName:"Duck", id: "1", fraud : true},
		    		        {firstName:"Lucky", lastName:"Luke", id: "2", fraud : false},
		    		        {firstName:"Micky", lastName:"Mouse", id: "3", fraud : true},
		    		        {firstName:"Black", lastName:"Spider", id: "4", fraud : true},
		    		        {firstName:"Judge", lastName:"Dredd", id: "5", fraud : false}
		    		     ],
		    	orders:[
		    	        	{orderNo: "1", clientId: "1", items: "PC,Netbook", price: "1000$"},
		    	        	{orderNo: "2", clientId: "2", items: "Javascript book", price: "30$"},
		    	        	{orderNo: "3", clientId: "3", items: "Mouse", price: "10$"},
		    	        	{orderNo: "4", clientId: "4", items: "Soundcard", price: "80$"},
		    	        	{orderNo: "5", clientId: "5", items: "Notebook", price: "800$"},
		    	        	{orderNo: "6", clientId: "3", items: "TFT 24", price: "300$"},
		    	        	{orderNo: "7", clientId: "1", items: "Headset", price: "30$"},
		    	        	{orderNo: "8", clientId: "2", items: "Keyboard, Mouse", price: "40$"},
		    	        	{orderNo: "9", clientId: "1", items: "CD Device", price: "50$"},
		    	        	{orderNo: "10", clientId: "2", items: "USB Stick 8GB", price: "20$"},
		    	        	{orderNo: "11", clientId: "3", items: "Server PC", price: "2000$"},
		    	        	{orderNo: "12", clientId: "4", items: "CPU Quad Core", price: "400$"},
		    	        	{orderNo: "13", clientId: "1", items: "USB Stick 8GB", price: "20$"},
		    	        	{orderNo: "14", clientId: "4", items: "Server PC", price: "2000$"},
		    	        	{orderNo: "15", clientId: "2", items: "CPU Quad Core", price: "400$"},
		    	        	{orderNo: "16", clientId: "3", items: "USB Stick 8GB", price: "20$"},
		    	        	{orderNo: "17", clientId: "3", items: "Server PC", price: "2000$"},
		    	        	{orderNo: "18", clientId: "3", items: "CPU Quad Core", price: "400$"}		    	        	
		    	],
		    	addresses:[
    	        	{clientId: "1", street: "Blvd", postalcode: 226, city:"Munich"},
    	        	{clientId: "2",street: "Main street 666", postalcode: 83346, city:"Berlin"},
    	        	{clientId: "4",street: "Highway 3", postalcode: 2464, city:"Hamburg"},
    	        	{clientId: "3",street: "Road 7", postalcode: 22326, city:"Karlsruhe"},
    	        	{clientId: "5",street: "Street xy", postalcode: 22228, city:"Heilbronn"}
    			]
		};
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(mdData);
		sap.ui.getCore().setModel(oModel);
		
		var i18nModel=new sap.ui.model.resource.ResourceModel({
			bundleName:"i18n.i18n"
		});
		sap.ui.getCore().setModel(i18nModel,"i18n");
		
		
	},
	
	rowSelectionChanged: function(oEvent){
		var oModel = this.getView().getModel();
		var oAddressDetails = sap.ui.getCore().byId('addressesid');
		var oTable2 = sap.ui.getCore().byId('table2');
		var oCheck = sap.ui.getCore().byId('Checkbox1');
		var selectedRowContext= oEvent.getParameter("rowContext");
		var selectedClientId = oModel.getProperty("id",selectedRowContext);
		
		var aAddresses = oModel.getProperty("/addresses");
		jQuery.each(aAddresses,function(index,oAddress){
			if(oAddress.clientId == selectedClientId){
				oAddressDetails.bindContext("/addresses/"+index);
				return false;
			}
		});

		var listBinding = oTable2.getBinding();
		var oFilter= new sap.ui.model.Filter("clientId",sap.ui.model.FilterOperator.EQ,selectedClientId);
		listBinding.filter(oFilter);
		
		oCheck.setBindingContext(selectedRowContext);
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf materdetail.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf materdetail.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf materdetail.main
*/
//	onExit: function() {
//
//	}

});