'use strict';

var appView = require('../../pageObjects/checkWriterPage.js');

var chai = require('chai');
var chaiPromised = require('chai-as-promised');

chai.use(chaiPromised);
var expect = chai.expect;

var {defineSupportCode} = require('cucumber');

/*
-- https://cucumber.io/docs/reference

In Gherkin, each line that isn't blank has to start with a Gherkin keyword, followed by any text you like. The main keywords are:

  Feature
  Scenario
  Given, When, Then, And, But (Steps)
  Background    :  (beforeEach)
  Scenario Outline
  Examples
  """ (doc Strings)
  """ (Doc Strings)
  | (Data Tables)
  @ (Tags)
  # (Comments)

// All test steps are defined using one of the following aliases (for This.Step)
Given:  describes context
When: describes actions
Then: describes expectations
And: extends previous verb (Given|When|Then)
But: extends previous verb (Given|When|Then)

 */


// module.exports = function () {
defineSupportCode(function ({Given, When, Then}) {

  Given(/^I navigate to the app page$/, function (callback) {
    appView.load('/app');
    callback();
  });

  Then(/^The page title should change to "([^"]+)"$/, function () {

  });

});
