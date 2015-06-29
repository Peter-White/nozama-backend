//requires
var express = require('express');
var bodyParser = require('body-parser'); //parser for json
var Cart = require('./../lib/cart.js'); //Model
var Item = require('./../lib/items.js');
var User = require('./../lib/users.js');
var jsonParser = bodyParser.json();
var router = express.Router();
var util = require('util');

//API (data) Routes for Users
router.get('/contents', function(req, res) {
  Cart.find({}, function(error, cartList) {
    console.log(cartList);
    res.json(cartList);
  });
});



var ensureCartInSession = function(req, res, next) {
    if (req.session.cart) {
        console.log("ensureCartInSession: found cart:" + util.inspect(req.session.cart));

        return next();
    } else {
        Cart.findOne({
            user: req.user._id
        }, function(err, cart) {
            console.log("ensureCartInSession: cart callback: cart found is " + util.inspect(cart));

            if (err) {
                console.log("ensureCartInSession: error finding the cart, probably doesn't exist at this point");
            } else {
                if (cart) {
                    req.session.cart = cart; // stick around for the session
                    return next();
                } else {
                    console.log('ensureCartInSession: Create me a cart for user with id = ' + req.user._id);
                    Cart.create({
                      user: req.user._id
                    }, function(err, cart) {
                      req.session.cart = cart;
                      return next();
                    }); // end of Cart.create
                } // end of else
            }; // end of findOne callback function
        });
    }
};


router.post('/contents', jsonParser);
router.post('/contents', ensureCartInSession);
router.post('/contents', function(req, res) {
  console.log(req.session.cart);
  req.session.cart.products.push(req.body.product);
  req.session.cart.save(function(err, cart) {
    if(err) {
      return res.sendStatus(400);
    } else {
      res.send(cart);
      res.status(200);
    };
  });
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
