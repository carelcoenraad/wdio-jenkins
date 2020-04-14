const assert = require('assert');
const webdriverIOPage = require('../pages/webdriver-io.page');

describe('webdriver.io page', () => {
  it('should have the right title', () => {
    webdriverIOPage.open();
    const title = browser.getTitle();
    assert.strictEqual(
      title,
      'WebdriverIO · Next-gen browser automation test framework for Node.js'
    );
  });
});
