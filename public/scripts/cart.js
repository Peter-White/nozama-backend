$(document).ready(function() {
  $('.add-to-cart').on('click', function() {
    var user = $('li#current-user').data('user-id');
    var product = $('button.add-to-cart').data('product-id');
    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/carts/contents',
        data: JSON.stringify({
          products: product,
          user: user
        }),
        contentType: "application/json; charset=utf-8"
      }).done(function(response) {
        location.reload();
      })
    });
});
