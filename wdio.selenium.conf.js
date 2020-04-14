const { config } = require('./wdio.conf');

module.exports.config = {
  ...config,
  services: ['selenium-standalone']
};
