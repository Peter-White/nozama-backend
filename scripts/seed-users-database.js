var util = require('util');
var async = require('async');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nozama');

var User = require('../lib/users.js');

var removeUsers = function(done) {
  User.remove({}, done);
};

var createUserOne = function(done) {
  User.create({
    firstName: 'John',
    lastName: 'Doe',
    username: 'hey',
    phoneNumber: '617-123-1234',
    address: {
      street: '100 Somerville Ave',
      city: 'Somerville',
      state: 'MA',
      zipCode: '01200',
      country: 'United States of America'
    },
    emailAddress: 'john@example.com'
  }, done);
};

var createUserTwo = function(done) {
  User.create({
    firstName: 'Jeanne',
    lastName: 'Dean',
    username: 'dean',
    phoneNumber: '617-001-1234',
    address: {
      street: '100 Central street',
      city: 'Boston',
      state: 'MA',
      zipCode: '01201',
      country: 'United States of America'
    },
    emailAddress: 'jeanne@example.com'
  }, done);
};

var createUserThree = function(done) {
  User.create({
    firstName: 'Kylie',
    lastName: 'Quackenbush',
    username: 'quack',
    phoneNumber: '845-555-6186',
    address: {
      street: '13 Rocklyn Drive',
      city: 'Suffern',
      state: 'NY',
      zipCode: '10901',
      country: 'USA'
    },
    emailAddress: 'kyliequackenbush@gmail.com',
  }, done);
};

async.series([
    removeUsers,
    createUserOne,
    createUserTwo,
    createUserThree,
  ],
  function(error) {
    if (error) {
      console.error(error);
    }
    mongoose.disconnect();
  }
);
