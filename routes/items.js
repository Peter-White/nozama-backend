//requires
var express = require('express');
var bodyParser = require('body-parser'); //parser for json
var Item = require('./../lib/items.js'); //Model

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
    console.log(req.user);
    res.render('items', {
      items: itemList,
      user: req.user
    });
  });
});

router.get('/:id', function(req, res) {
  Item.find({
    _id: req.params.id
  }, function(error, item) {
    res.render('item', {
      items: item
    });
  });
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
