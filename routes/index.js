var express = require('express');
var router = express.Router();
var Shipping = require('../controllers/shipping.controller');
var shipping = new Shipping;

/* Router to index view. */
router.get('/', function(req, res, next) {
  shipping.renderIndexView(res);
});

module.exports = router;
