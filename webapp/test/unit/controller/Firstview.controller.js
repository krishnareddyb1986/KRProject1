/*global QUnit*/

sap.ui.define([
	"comhitachi/project1/controller/Firstview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Firstview Controller");

	QUnit.test("I should test the Firstview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
