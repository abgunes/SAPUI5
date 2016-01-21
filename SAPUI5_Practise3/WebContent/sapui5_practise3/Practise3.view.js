sap.ui.jsview("sapui5_practise3.Practise3", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5_practise3.Practise3
	*/ 
	getControllerName : function() {
		return "sapui5_practise3.Practise3";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5_practise3.Practise3
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Welcome",
			content: [
			new sap.ui.commons.TextView("textviewID", {
				text: "welcome to master and details app",
				design : sap.ui.commons.TextViewDesign.H5
			})
			]
		});
	}

});