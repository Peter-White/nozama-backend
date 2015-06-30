var mongoose = require('mongoose');



var enumeratedTags = ['plants', 'health', 'foods', 'beauty', 'organic', 'oils', 'cactus',
    'flowering', 'face', 'body'
  ]
  //Catalog schema


//Catalog schema
var itemSchema = new mongoose.Schema({

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

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
