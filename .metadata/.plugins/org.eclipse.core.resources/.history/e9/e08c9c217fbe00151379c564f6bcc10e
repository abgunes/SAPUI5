sap.ui.jsview("sapui5_practise3.Master", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5_practise3.Master
	*/ 
	getControllerName : function() {
		return "sapui5_practise3.Master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5_practise3.Master
	*/ 
	createContent : function(oController) {
		var oList=new sap.m.List("listId",{
			mode:sap.m.ListMode.SingleSelect,
			select:function(){
				oController.itemSelected();
			}
		});
		
		var oItemTemplate=new sap.m.StandardListItem("sList", {
			title:"{data>name}",
			description : "{data>roll}"
		});
		oList.bindAggregation("items","data>/",oItemTemplate);
 		return new sap.m.Page({
			title: "Students",
			content: [oList]
		});
	}

});