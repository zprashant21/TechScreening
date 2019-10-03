sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/ui/model/Filter"
], function (Controller, Fragment, Filter) {
	"use strict";

	return Controller.extend("com.gyansys.Screening_technical.controller.Header", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.gyansys.Screening_technical.view.Header
		 */
		onInit: function () {

		},
		onDomainSelection: function (oEvent) {
			var sel = oEvent.getParameter('selectedItem');
			var path = sel.getBindingContext('domains').getPath();
			var index = path.split("/").slice(-1).pop();

			var dataModel = this.getOwnerComponent().getModel("domains");
			var oModel2 = new sap.ui.model.json.JSONModel();
			oModel2.setData(dataModel.getData().domain[index]);
			//using named data model binding for second dropdown box
			this.getView().byId("subDomainCombo").setModel(oModel2, "subDomains");
		},
		onRequestGo: function (oEvent) {
			//alert("Go Button Clicked");

			//var domain= this.getView().byId()
			//sub Domain a
			//retrieve job code also
			var jobCode = this.getView().byId("jcode").getValue();
			if (jobCode == "") {
				alert("Plese choose correct Job Code before proceeding.")
				this.getView().byId("jcode").setValueState("Error");

			}
			//if(all are not null)
			//add the particular item to the table below
		},

		handleValueHelp: function (oEvent) {
			var sInputValue = oEvent.getSource().getValue();

			this.inputId = oEvent.getSource().getId();
			// create value help dialog
			if (!this._valueHelpDialog) {
				this._valueHelpDialog = sap.ui.xmlfragment(
					"com.gyansys.Screening_technical.fragments.Dialog",
					this
				);
				debugger;
				this.getView().addDependent(this._valueHelpDialog);
			}

			// create a filter for the binding
			this._valueHelpDialog.getBinding("items").filter([new Filter(
				"Job Code",
				sap.ui.model.FilterOperator.Contains, sInputValue
			)]);

			// open value help dialog filtered by the input value
			this._valueHelpDialog.open(sInputValue);
		},

		_handleValueHelpSearch: function (evt) {
			var sValue = evt.getParameter("value");
			var oFilter = new Filter(
				"Job Code",
				sap.ui.model.FilterOperator.Contains, sValue
			);
			evt.getSource().getBinding("items").filter([oFilter]);
		},

		_handleValueHelpClose: function (evt) {
			var oSelectedItem = evt.getParameter("selectedItem");
			if (oSelectedItem) {
				var productInput = this.byId(this.inputId);
				productInput.setValue(oSelectedItem.getTitle());
			}
			evt.getSource().getBinding("items").filter([]);
		}

		/* onDomainSelection: function(oEvent){
       
		 	debugger;
		 	var oSelectedItem = oEvent.getParameter("selectedItem").getText();
		 	if(oSelectedItem === 'Strategic'){
		 	   //this.getView().byId("subDomainCombo").setSelecteItem("Results>/Strategics")
		 	   this.getView().byId("subDomainCombo").setAssociation("Results>/Strategics");
		 	}
		 	
		 }*/
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.gyansys.Screening_technical.view.Header
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.gyansys.Screening_technical.view.Header
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.gyansys.Screening_technical.view.Header
		 */
		//	onExit: function() {
		//
		//	}

	});

});