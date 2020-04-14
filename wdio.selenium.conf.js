const { config } = require('./wdio.conf');

const hostname = process.env.SELENIUM_HOSTNAME || config.hostname;

module.exports.config = {
  ...config,
  hostname,
  path: '/wd/hub',
  port: 4444,
  services: []
};
