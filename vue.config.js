const Mock = require('./mock');

module.exports = {
  devServer: {
    port: 8080,
    before(app) {
      Mock(app)
    }
  }
};
