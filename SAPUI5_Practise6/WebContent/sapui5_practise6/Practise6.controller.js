sap.ui.controller("sapui5_practise6.Practise6", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapui5_practise6.Practise6
*/
	onInit: function() {
		var oModel=new sap.ui.model.odata.ODataModel("http://services.odata.org/V3/(S(k42qhed3hw4zgixnhivnmes))/OData/OData.svc/");
		oModel.oHeaders={
				"DataServiceVersion": "3.0",
				"MaxDataServiceVersion": "3.0"
		};
		console.log(oModel);
		sap.ui.getCore().setModel(oModel,"products");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapui5_practise6.Practise6
*/
	onBeforeRendering: function() {
		
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapui5_practise6.Practise6
*/
	onAfterRendering: function() {
		$("#formId").hide();
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapui5_practise6.Practise6
*/
//	onExit: function() {
//
//	},
	mode:0,
	resetForm:function(){
		$("#name").val('');
		$("#description").val('');
		$("#rating").val('');
		$("#price").val('');
		$("#id").val('');
	},
    create:function(){
    	this.mode="create";
    	this.resetForm();
    	$("#formId").slideDown(300,function(){
    		var newId=sap.ui.getCore().byId("tableId")._getRowCount();
    		$("#id").val(newId);
    	});
    },
    edit:function(){
    	
    },
    remove:function(){
    	
    },
    save:function(){
    	var requestObj={
				requestUri:'',
				method:'',
				headers:{
					"X-Requested-With":"XMLHttpRequest",
					"Content-Type":"application/json;odata=minimalmetadata",
					"DataServiceVersion":"3.0",
					"MaxDataServiceVersion":"3.0",
					"Accept":"application/json;odata=minimalmetadata"
				}
		}
    	var newdata={
    			"odata.type":"ODataDemo.Product",
    			"ID": $("#id").val(),
    		     "Name": $("#name").val(),
    		     "Description": $("#description").val(),
    		     "DiscontinuedDate":$("#date").val(),
    		     "Rating": $("#rating").val(),
    		     "Price": $("#price").val()
    		     
    	}
    	if(this.mode=='create'){
    		
    		var url="http://services.odata.org/V3/(S(k42qhed3hw4zgixnhivnmes))/OData/OData.svc/Products";
    		var method = "POST";
    		requestObj.requestUri=url;
    		requestObj.method=method;
    		requestObj.data=newdata;
    	}
    	OData.request(requestObj,function(){
    		sap.ui.getCore().getModel("products").refresh();
    		$("#formId").slideUp();
    	})
    }
});