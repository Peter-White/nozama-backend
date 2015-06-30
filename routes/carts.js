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
  Cart.findOne({
    user: req.user._id
  })
    .populate('products')
    .exec(function(error, cart) {
      console.log(cart);
      res.json(cart);
    });
});

router.get('/contents', function(req, res) {
  Cart.find({}, function(err, items) {
    res.json(items);
  })
});

var ensureCartInSession = function(req, res, next) {
  if (req.session.cart) {
    next();
    console.log('hit');
  } else {
    Cart.findOne({
      user: req.user._id
    }, function(err, cart) {
      if (cart.length > 0) {
        req.session.cart = cart; // stick around for the session
        next();
      } else {
        console.log('gimme cart');

        Cart.create({
          user: req.user._id
        }, function(err, cart) {
          req.session.cart = cart;
          next();
        });
      }
    });
  }
};

router.post('/contents', ensureCartInSession);
router.post('/contents', function(req, res) {

  req.session.cart.push(req.body.product);
  // Session.update(req.session, { $set : { cart: req.session.cart} }, function(err, cart) {
  //   if(err) {
  //     return res.sendStatus(400);
  //   } else {
  //     console.log(cart);
  //     res.send(cart);
  //     // res.status(200);
  //   };
  // });
  res.send(200);

  console.log(req.session.cart);
  req.session.cart.products.push(req.body.product);
  req.session.cart.save(function(err, cart) {
    if (err) {
      return res.sendStatus(400);
    } else {
      res.send(cart);
      res.status(200);
    };
  });

});




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
