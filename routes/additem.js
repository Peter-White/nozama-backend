var passport = require('passport');
var express = require('express');
var router = express.Router();
var Item = require('../lib/items');

router.route('/')
  .get(function(req, res, next) {
    res.render('additem', {});
  })
  .post(function(req, res, next) {
    console.log(req.body);
    Item.create({
        itemName: req.body.itemName,
        description: req.body.description,
        price: req.body.price,
        photoURL: req.body.photoURL,
        tags: req.body.tags
      },

      function(err, item) {
        if (err) {
          return res.render('additem', {
            item: item
          });
        }
        req.login(item, function(err) {
          res.redirect('/items');
        });
      })
  })

module.exports = router;
