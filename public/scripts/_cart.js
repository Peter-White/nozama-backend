var cart = (function (module) {

var buildOrderItem = function(item){
  var orderItem = {};
  var itemId = item.attr('id');
  var count = JSON.parse(localStorage['count']);
  count +=1;
  orderItem['item_id'] = itemId;
  orderItem['quantity'] = parseInt($('#' + itemId + 'quantity').val());
  orderItem['name'] = $('#' + itemId + 'name').text();
  orderItem['price'] = $('#' + itemId + 'price').text();
  orderItem['id'] = count;
  orderItem['description'] = $('#' + itemId + 'description').text();
  localStorage['count'] = JSON.stringify(count);
  return orderItem;
};

renderNavCart = function() {
  var data = JSON.parse(localStorage['cart']);
  data = calcCart(data);
  // using accounting.js
  data.total = accounting.formatMoney(data.total);
  $('.cart-status').append(data);
};

module.renderDetailedCart = function(){
      var data = JSON.parse(localStorage['cart']);

      if (data.length < 1){
        $('.render-cart').html("<h3>Your cart is empty</h3>");
      } else {
        $('.render-cart').append(orderItem);
        console.log(orderItem);
      };
  };

var calcCart = function(data){
    var total = 0;
    var cart = { total: 0, quantity: 0};
    data.forEach(function(item){
      cart['total'] = cart['total'] + calcItemTotal(item);
      cart['quantity'] = cart['quantity'] + item.quantity;
    });

    return cart;
  };


 var addItem = function(item){
    var orderItem = buildOrderItem(item);
    var items = JSON.parse(localStorage["cart"]);
    items.push(orderItem);
    localStorage.setItem('cart', JSON.stringify(items));
    renderNavCart();
    };

var removeItem = function(item){
    var items = JSON.parse(localStorage["cart"]);
    // jquery .grep: Finds the elements of an array which satisfy a filter function. The original array is not affected.
    items = $.grep(items, function(n){
     return n.id != item.val();
    });
    localStorage.setItem('cart', JSON.stringify(items));
    renderNavCart();
    cart.renderDetailedCart();
  };


module.init = function(){

    $('.add-to-cart').on('submit', function(event){
      event.preventDefault();
      addItem($(this));
    });

    renderNavCart();
  };


return module;
})(cart || {});
