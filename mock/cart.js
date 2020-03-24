const swipeData = require("./swipe.json");

function cart(app) {
  app.get("/api/index", (req, res) => {
    res.json(swipeData);
  });
}

module.exports = cart;
