sap.ui.jsview("myui5app.firstView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myui5app.firstView
	*/ 
	getControllerName : function() {
		return "myui5app.firstView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myui5app.firstView
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [
			
			          new sap.m.Button({
			        	  id : "newButton",
			        	  text : "Press Me",
			        	  press : [oController.pressMe,oController]
			        	})
			          new sap.m.Label({
			        	  id : "myId",
			        	  text : "hello aish"
			          })
			]
		});
	}

});