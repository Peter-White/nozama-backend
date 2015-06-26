  $(document).ready(function() {
    $('form[name="update-user"]').hide();
    $('#edit-user-details').on('click', function(event) {
      $('form[name="update-user"]').toggle();
      $('.user').toggle();
    });

    $('form[name="update-user"]').on('submit', function(event) {
      event.preventDefault();
      var id = $('.user').data('user');
      var user = {
        firstName: $('input[name="firstName"]').val(),
        lastName: $('input[name="lastName"]').val(),
        userName: $('input[name="userame"]').val(),
        phoneNumber: $('input[name="phoneNumber"]').val(),
        emailAddress: $('input[name="emailAddress"]').val(),
        address: $('input[name="address"]').val(),
        password: $('input[name="password"]').val()
      };
      $.ajax({
        method: 'PATCH',
        url: 'http://localhost:3000/users/api/' + id,
        data: JSON.stringify(user),
        contentType: "application/json; charset=utf-8"
      }).done(function(response) {
        location.reload();
      })
    });
  });
