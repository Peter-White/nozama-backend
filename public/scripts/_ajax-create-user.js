  $(document).ready(function() {
    $('form[name="new-user"]').on('submit', function(event) {
      event.preventDefault();
      var user = {
        firstName: $('input[name="firstName"]').val(),
        lastName: $('input[name="lastName"]').val(),
        phoneNumber: $('input[name="phoneNumber"]').val,
        emailAddress: $('input[name="emailAddress"]').val(),
        address: $('input[name="address"]').val(),
        password: $('input[name="password').val()
      };
      $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/api/v1/users',
        data: JSON.stringify(user),
        contentType: "application/json; charset=utf-8"
      }).done(function(response) {
        $('.users').append(response);
      })
    });
  });
