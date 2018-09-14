var express = require('express');
var router = express.Router();
var Shipping = require('../controllers/shipping.controller');
var shipping = new Shipping;

/* GET total shipping price. */
router.get('/calculate-shipping/:weight/:provider', function(req, res, next) {
  shipping.calculateTotalPrice(req,res);
});

module.exports = router;
