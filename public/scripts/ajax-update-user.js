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
        street: $('input[name="addressStreet"]').val(),
        secondStreet: $('input[name="addressSecondStreet"]').val(),
        city: $('input[name="addressCity"]').val(),
        state: $('input[name="addressState"]').val(),
        zipCode: $('input[name="addressZipCode"]').val(),
        password: $('input[name="password"]').val()
      };
      $.ajax({
        method: 'PATCH',
        url: 'http://localhost:3000/users/api/' + id,
        data: JSON.stringify(user),
        contentType: "application/json; charset=utf-8"
      }).done(function(response) {
        console.log(response);
        // location.reload();
      })
    });
  });
