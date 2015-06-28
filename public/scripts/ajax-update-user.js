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
        username: $('input[name="userame"]').val(),
        phoneNumber: $('input[name="phoneNumber"]').val(),
        emailAddress: $('input[name="emailAddress"]').val(),
        password: $('input[name="password"]').val(),
        address: [{
          street: $('input[name="street"]').val(),
          secondStreet: $('input[name="secondStreet"]').val(),
          city: $('input[name="city"]').val(),
          state: $('input[name="state"]').val(),
          zipCode: $('input[name="zipCode"]').val()
        }]
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
