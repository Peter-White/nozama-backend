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
