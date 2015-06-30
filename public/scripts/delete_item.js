 $(document).ready(function() {
  $('.delete-button').on('click', function() {
    var product = $(this).data('product');
    $.ajax({
        method: 'PATCH',
        url: 'http://localhost:3000/carts/contents',
        data: JSON.stringify({
          product: product
        }),
        contentType: "application/json; charset=utf-8"
      }).done(function(response) {
        location.reload();
      })
    });
});
