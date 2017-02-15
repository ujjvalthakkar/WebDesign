  $(function() {
    alert("Entered");
    $("#formRegistration").validate({
      rules: {
      name: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      phone: "required",
      username: "required",
      password: {
        required: true,
        minlength: 5
      },
      address:"required",
      gender:"required"
    },
    messages: {
      name: "Please enter your firstname",
      email: "Please enter a valid email address",
      phone: "Please enter a valid phone number",
      username: "Please enter your username",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      address: "Please enter your Address",
      gender: "Please enter your Gender"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
  });