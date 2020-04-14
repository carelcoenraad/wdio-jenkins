const Page = require('./page');

class WebdriverIOPage extends Page {
  open() {
    super.open('https://webdriver.io');
  }
}

module.exports = new WebdriverIOPage();
