sap.ui.jsview("massjs.main", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf massjs.main
	 */
	getControllerName : function() {
		return "massjs.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf massjs.main
	 */
	createContent : function(oController) {
		var Page1 = new sap.m.Page("PageId1", {
			title : "Mass Assignment",

		});
		// 		
		// 		var oTable = new sap.ui.table.Table("tableId",{
		//			visibleRowCount : 5,
		//		    editable : false,
		//		    title : "Employees",
		//		    //navigationMode : sap.ui.table.NavigationMode.Paginator,
		//		    cellClick : function(oEvent){
		//		    	 oController.cellSelected(oEvent);
		//		    }
		//		});
		// 		

		// 		Page1.addContent(oTable);

		var VLayout = new sap.ui.layout.VerticalLayout({width:"100%"});
		
		
		var FilterBarItem1 = new sap.ui.comp.filterbar.FilterItem("fi1", {name:"A", label:"KPI"});
		var FilterBarItem2 = new sap.ui.comp.filterbar.FilterItem("fi2", {name:"B", label:"Org"});
		
		var FilterBar = new sap.ui.comp.filterbar.FilterBar(
				            { 
			                
		                     filteritems : [
		                                    FilterBarItem1,
		                                    FilterBarItem2
		                                    
		                                    ]
				            
				            });
		
		
		
		var IconTab1 = new sap.m.IconTabBar("IdIconTab1", {
			expanded : "{device>/isNoPhone}",
			class : "sapUiResponsiveContentPadding",
			items : [ new sap.m.IconTabFilter("tab1", {
				icon : "sap-icon://addresses",
				text : "ASSIGNED"

			}), new sap.m.IconTabFilter("tab2", {
				icon : "sap-icon://org-chart",
				text : "UNASSIGNED"

			}) ]

		});

		
		
		VLayout.insertContent(FilterBar,1);
		VLayout.insertContent(IconTab1,2);
		
		
		Page1.addContent(VLayout);

		return Page1;
	}

});