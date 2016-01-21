sap.ui.define([
"sap/ui/core/UIComponent",
"sap/ui/model/json/JSONModel",
"sap/ui/model/resource/ResourceModel"
],function(UIComponent , JSONModel, ResourceModel){
	"use strict";
	return UIComponent.extend("DualAxis.test.Component",{
		metadata: {
			rootview : {
				viewName: "DualAxis.test.dualaxis.line",
				type : "JS",
				id : "Root"
			}
		},
		init : function(){
			UIComponent.prototype.init.apply(this,arguments);
			var sUrl= "http://services.odata.org/V2/Northwind/Northwind.svc/";
			var oModel = new sap.ui.model.odata.ODataModel(sUrl);
			this.setModel(oModel);
			
			
		}
	});
})
