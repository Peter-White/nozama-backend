$(document).ready(function() {
  $('#tab-1').show();
  $('#tab-2').hide();
  $('#tab-3').hide();
  $(document).on('click', '#tab-2', function() {
    $('.maincontent').html();
    $('#tab-2').addClass('active');
    $('#tab-1').removeClass('active');
    $('#tab-2').show();
    $('#tab-1').hide();
  });
});
