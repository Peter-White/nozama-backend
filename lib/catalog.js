var mongoose = require('mongoose');


var enumeratedTags = ['plants', 'health', 'foods', 'beauty', 'organic', 'oils', 'cactus',
    'flowering', 'face', 'body'
  ]
  //Catalog schema
var catalogSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  photoURL: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true,
    enum: {
      values: enumeratedTags
    }
  }
});








var Catalog = mongoose.model('Catalog', catalogSchema);

module.exports = Catalog;
