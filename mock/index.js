const cart = require('./cart');
const cartMock = require('./cartMock');
function Mock (app) {
  cart(app);
  cartMock(app);
}

module.exports = Mock;
