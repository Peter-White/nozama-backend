//requires
var express = require('express');
var bodyParser = require('body-parser'); //parser for json
var Cart = require('./../lib/cart.js'); //Model
var Item = require('./../lib/items.js');
var User = require('./../lib/users.js');
var jsonParser = bodyParser.json();
var router = express.Router();

//API (data) Routes for Users
router.get('/contents', function(req, res) {
  Cart.find({}, function(error, cartList) {
    console.log(cartList);
    res.json(cartList);
  });
});



var ensureCartInSession = function(req, res, next) {
  if (req.session.cart) {
    return next();
  } else {
    Cart.find({
      user: req.user._id
    }, function(err, cart) {
      if (cart) {
        req.session.cart = cart; // stick around for the session
        return next();
      } else {
        Cart.create({
          user: req.user._id
        }, function(err, cart) {
          req.session.cart = cart;
          return next();
        });
      }
    });
  }
};

router.post('/contents', jsonParser);
router.post('/contents', ensureCartInSession);
router.post('/contents', function(req, res) {
  console.log(req.session.cart);
  req.session.cart.products.push(req.body.product);
  res.sendStatus(200);
});



router.post('/api', jsonParser);
router.post('/api', function(req, res) {
  User.create(req.body, function(error, user) {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  });
});

module.exports = router;
