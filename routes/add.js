var passport = require('passport');
var express = require('express');
var router = express.Router();
var Item = require('./../lib/items.js');

router.route('/')
  .post(function(req, res, next) {
    console.log(req.body);
    Item.register({
        itemName: req.body.username,
        description: req.body.firstName,
        price: req.body.lastName,
        photoURL: req.body.phoneNumber,
        tags: req.body.emailAddress
      },
      function(err, item) {
        if (err) {
          return res.render('add', {
            item: item
          });
        }

        req.login(user, function(err) {
          res.redirect('/');
        });
      })
  })

module.exports = router;
