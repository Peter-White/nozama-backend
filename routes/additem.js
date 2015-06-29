var passport = require('passport');
var express = require('express');
var router = express.Router();
var util = require('util');
var Item = require('../lib/items');

router.route('/')
  .get(function(req, res, next) {
    res.render('additem', {});
  })
  .post(function(req, res, next) {
    console.log(util.inspect(req.body));
    Item.create({
        itemName: req.body.itemName,
        description: req.body.description,
        price: req.body.price,
        photoURL: req.body.photoURL,
        tags: req.body.tags
      },

      function(err, item) {

        if (err) {
          res.redirect('/additem/itemerror');
          console.log("Error adding item");
          return res.render('additem', {
            item: item
          });
        } else {
          console.log("Adding item: " + util.inspect(item));
          req.login(item, function(err) {
            res.redirect('/itemsuccess');
          });
        }
      })
  })

router.get('/itemerror', function(req, res) {
  res.render('itemerror', {});
});
router.get('/itemsuccess', function(req, res) {
  res.render('itemsuccess', {});
});

module.exports = router;
