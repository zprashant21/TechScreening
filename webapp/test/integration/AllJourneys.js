/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/gyansys/Screening_technical/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/gyansys/Screening_technical/test/integration/pages/App",
	"com/gyansys/Screening_technical/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.gyansys.Screening_technical.view.",
		autoWait: true
	});
});