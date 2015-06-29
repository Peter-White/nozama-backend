<<<<<<< HEAD
  $(document).ready(function() {
    $('#tabs-1').show();
    $('#tabs-2').hide();
    $('#tabs-3').hide();
    $(document).on('click', '#acc-details', function() {
      $('.maincontent').html();
      $('#acc-details').addClass('active');
      $('#my-cart').removeClass('active');
      $('#tabs-2').show();
      $('#tabs-1').hide();
    });
  });
=======
$(document).ready(function() {
  // $(document).on('click', '#tabsy a', function(e) {
  // e.preventDefault();
  // $(this).tab('show');
  // });
});
>>>>>>> f28c50575f75b477d80ec0016e0b2019c6b5ee62
