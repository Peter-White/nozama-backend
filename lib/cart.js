var mongoose = require('mongoose');
var autopopulate = require('mongoose-autopopulate');

var currentCartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', autopopulate: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'items', autopopulate: true }]
});

module.exports = mongoose.model('Cart', currentCartSchema);
