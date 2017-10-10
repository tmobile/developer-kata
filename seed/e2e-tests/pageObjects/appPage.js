'use strict';

module.exports = {

  load: function (path) {
    browser.get(path);
    //wait for page to load
    browser.waitForAngular();
    browser.driver.sleep(1000);
  },

  getElementById: function (id) {
    return element(by.id(id));
  },

  isDisabled: function (element) {
    return element.getAttribute('disabled');
  }
};
