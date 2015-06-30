var async = require('async');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nozama');

var Item = require('../lib/items.js');


var removeItems = function(done) {
  Item.remove({}, done);
};

var createItemOne = function(done) {
  Item.create({
    itemName: 'Nutiva Chia Seeds',
    description: 'Nutiva Chia seeds are sourced from organic farms and are some of the freshest chia seeds available on the market.',
    price: 1199,
    photoURL: 'http://www.swansonvitamins.com/en_US/images/ItemImages_SW/images_Xl/NTV031_Xl.jpg',
    tags: ['food', 'health', 'organic']
  }, done);
};

var createItemTwo = function(done) {
  Item.create({
    itemName: 'Peace Lily',
    description: 'The famous Japanese Peace Lily has the unique power to create a serene and organic atmosphere in any home. Our peace lilies are grown outside and never treated with pesticides.',
    price: 2199,
    photoURL: 'http://www.phoenixflowershops.com/images/item/zoom_smspath12032742155.jpg',
    tags: ['plants', 'flowering']
  }, done);
};

var createItemThree = function(done) {
  Item.create({
    itemName: 'Agarwood Essential Oil',
    description: 'Agarwood, also known as "oud" or "ouhd", is known for its distinctive oaky, rich, dark aroma.  ',
    price: 2999,
    photoURL: 'http://www.raisethevibration.org/uploads/2/4/2/9/24293158/2793008.jpg',
    tags: ['plants', 'flowering']
  }, done);
};

var createItemFour = function(done) {
  Item.create({
    itemName: 'Bamboo Face Mask',
    description: 'Bamboo face mask will help you rejuvinate your body and soul, with its cleansing, moisturizing power',
    price: 999,
    photoURL: 'http://tshop.r10s.com/1340ab30-c117-11e2-91e6-005056bd2fd8/20130819/264bf0c5-5648-4667-8736-f63b0d2fed41.jpg',
    tags: ['face', 'beauty']
  }, done);
};

var createItemFive = function(done) {
  Item.create({
    itemName: 'Aloe face mask by Cala',
    description: 'The aloe plant is used as a moisturizing component in many skin products. For the maximum moisture in the shortest time, go with this face mask above all others',
    price: 999,
    photoURL: 'http://ecx.images-amazon.com/images/I/51mbpwEv-7L.jpg',
    tags: ['face', 'beauty']
  }, done);
};
var createItemSix = function(done) {
  Item.create({
    itemName: 'CloudBerries, 1/2 quart',
    description: 'Couldberries have become known for their incredible antioxidant powers. These sweet organic treats are the caviar of the berry department.',
    price: 2999,
    photoURL: 'http://4.bp.blogspot.com/_m9kdpOnnN8U/THa4QuY5AfI/AAAAAAAAA4I/J1a5gCw3coM/s1600/T%C3%A4nndalen_025.JPG',
    tags: ['food', 'organic']
  }, done);
};
var createItemSeven = function(done) {
  Item.create({
    itemName: 'Succulents from NaturalImpact',
    description: 'Succulent plants have become a mainstay for the modern homeownre. Improve your rooms aesthetic with little effort with a colorful succulent from NaturalImpact',
    price: 999,
    photoURL: 'https://img1.etsystatic.com/000/0/6392296/il_fullxfull.326694537.jpg',
    tags: ['plants', 'cactus']
  }, done);
};
var createItemEight = function(done) {
  Item.create({
    itemName: 'Epic Bison Bacon Cranberry bar',
    description: 'The Bison Bacon bar delivers a substantial serving of our two most favorite meats; 100% grass fed and organic buffalo brilliantly combined with humanely certified uncured bacon.',
    price: 1999,
    photoURL: 'https://epicbar.com/images/rotation/BisonBar.png',
    tags: ['plants', 'flowering']
  }, done);
};

async.series([
    removeItems,
    createItemOne,
    createItemTwo,
    createItemThree,
    createItemFour,
    createItemFive,
    createItemSix,
    createItemSeven,
    createItemEight
  ],
  function(error) {
    if (error) {
      console.error(error);
    }
    mongoose.disconnect();
  }
);
