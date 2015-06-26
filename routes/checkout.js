//requires
var passport = require('passport');
var express = require('express');
var router = express.Router();


router.route('/')
  .get(function(req, res, next) {
    res.render('checkout', {});
  })
  .post(function(req, res, next) {
    Account.register(new Account({username: req.body.username}), req.body.password, function(err, account) {
      if(err) {
        return res.render('checkout', {account: account});
      }

      req.login(account, function(err) {
        res.redirect('/items');
      });
    })
  })

router.get('/', function(req, res, next) {
  res.render('checkout', {});
});

module.exports = router;
