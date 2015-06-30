//requires
var express = require('express');
var bodyParser = require('body-parser'); //parser for json
var Item = require('../lib/items.js'); //Model
var accounting = require('accounting');

var jsonParser = bodyParser.json();

var router = express.Router();

//Routes for Items
router.get('/api', function(req, res) {
  Item.find({}, function(error, itemList) {
    res.json(itemList);
  });
});

router.get('/api/:id', function(req, res) {
  Item.find({
    _id: req.params.id
  }, function(error, item) {
    res.json(item);
  });
});

router.post('/api', jsonParser);
router.post('/api', function(req, res) {
  Item.create(req.body, function(error, item) {
    console.log(req.body);
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  });
});

router.patch('/api/:id', jsonParser);
router.patch('/api/:id', function(req, res) {
  Item.findByIdAndUpdate(req.params.id, req.body, {
    overwrite: false
  }, function(error, item) {
    if (error) {
      console.error(error);
      res.sendStatus(400);
    }
    console.log('Changed')
    res.sendStatus(200);
  });
});

router.delete('/api/:id', function(req, res) {
  Item.remove({
    _id: req.params.id
  }, function(error) {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      res.sendStatus(204);
    }
  });
});

//jade rendered routes
router.get('/', function(req, res) {
    Item.find({}, function(error, itemList) {
      if (error) {
        console.log('Error getting items');
      } else { << << << < HEAD
        if (req.session.cart) {
          res.render('items', {
            items: itemList,
            user: req.user,
            cartCount: req.session.cart.products.length
          });
        } else {
          res.render('items', { === === =
                console.log("/items user is " + req.user);
              console.log("/items are " + itemList);
              res.render('items', { >>> >>> > adding accounting.js format money
                for prices
                items: itemList,
                user: req.user
              });
            }
          }
        });
    });

    router.get('/:id', function(req, res) {
        var price = accounting.formatMoney((item[0].price), [thousand = ","], [decimal = "."], [format = "%s%v"]);
        Item.find({
          _id: req.params.id
        }, function(error, item) {
          if (error) {
            console.log('Error getting one item');
          } else {
            if (req.session.cart) {
              res.render('item', {
                items: item,
                user: req.user,
                cartCount: req.session.cart.products.length
              });
            } else {
              res.render('item', {
                items: item,
                user: req.user,
                price: price
              });
            }
          }
        });

        router.delete('/:id', function(req, res) {
          Item.remove({
            _id: req.params.id
          }, function(error) {
            if (error) {
              console.log(error);
              res.sendStatus(400);
            } else {
              res.sendStatus(204);
            }
          });
        });

        module.exports = router;
