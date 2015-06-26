//requires
var express = require('express');
var bodyParser = require('body-parser'); //parser for json
var User = require('./../lib/users.js'); //Model

var jsonParser = bodyParser.json();

var router = express.Router();

//API (data) Routes for Users
router.get('/api', function(req, res) {
  User.find({}, function(error, userList) {
    res.json(userList);
  });
});

router.get('/api/:id', function(req, res) {
  User.find({
    _id: req.params.id
  }, function(error, user) {
    res.json(user);
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

// Jade (rendered) routes for users
router.get('/', function(req, res) {
  User.find({}, function(error, userList) {
    res.render('users', {
      users: userList
    });
  });
});

router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(error, user) {
    res.render('user', {
      user: user
    });
  });
});

router.post('/', jsonParser);
router.post('/', function(req, res) {
  User.create(req.body, function(error, user) {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      fs.readFile('./templates/users.jade', 'utf8', function(err, data) {
        if (err) {
          res.sendStatus(400);
        };
        var userCompiler = jade.compile(data);
        var html = userCompiler(user);
        res.send(html);
        res.status(201);
      });
    };
  });
});

module.exports = router;
