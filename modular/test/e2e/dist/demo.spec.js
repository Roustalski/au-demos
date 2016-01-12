'use strict';

var _welcomePoJs = require('./welcome.po.js');

var _skeletonPoJs = require('./skeleton.po.js');

describe('aurelia skeleton app', function () {
  var poWelcome = undefined;
  var poSkeleton = undefined;

  beforeEach(function () {
    poSkeleton = new _skeletonPoJs.PageObjectSkeleton();
    poWelcome = new _welcomePoJs.PageObjectWelcome();

    browser.loadAndWaitForAureliaPage('http://localhost:9000');
  });

  it('should load the page and display the initial page title', function () {
    expect(poSkeleton.getCurrentPageTitle()).toBe('Welcome | Aurelia');
  });

  it('should display greeting', function () {
    expect(poWelcome.getGreeting()).toBe('Welcome to the Aurelia Navigation App!');
  });

  it('should automatically write down the fullname', function () {
    poWelcome.setFirstname('Rob');
    poWelcome.setLastname('Eisenberg');

    // For now there is a timing issue with the binding.
    // Until resolved we will use a short sleep to overcome the issue.
    browser.sleep(200);
    expect(poWelcome.getFullname()).toBe('ROB EISENBERG');
  });

  it('should show alert message when clicking submit button', function () {
    expect(poWelcome.openAlertDialog()).toBe(true);
  });

  it('should navigate to users page', function () {
    poSkeleton.navigateTo('#/users');
    expect(poSkeleton.getCurrentPageTitle()).toBe('Github Users | Aurelia');
  });
});