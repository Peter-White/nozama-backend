var passport = require('passport');
var express = require('express');
var router = express.Router();

var Item = require('../lib/items.js');

router.route('/')
  .get(function(req, res, next) {
    res.render('add', {});
  })
  .post(function(req, res, next) {
    console.log(req.body);
    Item.add({
        itemName: req.body.itemName,
        description: req.body.description,
        price: req.body.price,
        photoURL: req.body.photoURL,
        tags: req.body.tags
      },

      function(err, item) {
        if (err) {
          return res.render('add', {
            item: item
          });
        }
        req.login(item, function(err) {
          res.redirect('/');
        });
      })
  })

module.exports = router;
