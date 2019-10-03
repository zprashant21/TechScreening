sap.ui.define([
			"sap/ui/model/json/JSONModel",
			"sap/ui/Device"
		], function (JSONModel, Device) {
			"use strict";

			return {

				createDeviceModel: function () {
					var oModel = new JSONModel(Device);
					oModel.setDefaultBindingMode("OneWay");
					return oModel;
				},
				createStaticModel: function () {
					var data = {
						"valrecords": [{
							"Domain": "Project",
							"Sub Domain": "HUL",
							"Job Code": "G2091",
							"Job Description": "ABAP DEVELOPER",
							"Job Position": "ABAP DEVELOPER",
							"Raised By": "Deepak",
							"Raised On": "10 july",

						}, {
							"Domain": "Project",
							"Sub Domain": "Amat",
							"Job Code": "G2092",
							"Job Description": "ABAP DEVELOPER",
							"Job Position": "ABAP DEVELOPER",
							"Raised By": "Deepak",
							"Raised On": "10 july",

						}, {
							"Domain": "Project",
							"Sub Domain": "HUL",
							"Job Code": "G2093",
							"Job Description": "ABAP DEVELOPER",
							"Job Position": "ABAP DEVELOPER",
							"Raised By": "Deepak",
							"Raised On": "10 july",

						}, {
							"Domain": "Strategic",
							"Sub Domain": "SAP Technical",
							"Job Code": "G2094",
							"Job Description": "ABAP DEVELOPER",
							"Job Position": "ABAP DEVELOPER",
							"Raised By": "Deepak",
							"Raised On": "10 july",

						}, {
							"Domain": "Strategic",
							"Sub Domain": "SAP Analytical",
							"Job Code": "G2095",
							"Job Description": "ABAP DEVELOPER",
							"Job Position": "ABAP DEVELOPER",
							"Raised By": "Deepak",
							"Raised On": "10 july",

						}, {
							"Domain": "Strategic",
							"Sub Domain": "Salesforce",
							"Job Code": "G2096",
							"Job Description": "ABAP DEVELOPER",
							"Job Position": "ABAP DEVELOPER",
							"Raised By": "Deepak",
							"Raised On": "10 july",

						}, {
							"Domain": "Strategic",
							"Sub Domain": "Salesforce",
							"Job Code": "G2097",
							"Job Description": "ABAP DEVELOPER",
							"Job Position": "ABAP DEVELOPER",
							"Raised By": "Deepak",
							"Raised On": "10 july",

						}]
					};
					var oModel = new JSONModel(data);
					oModel.setDefaultBindingMode("OneWay");
					return oModel;

				}};
			
			});