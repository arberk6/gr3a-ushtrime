const user = "arberk6";
    const pass = "****";

    function validate(number) {
      var inputElements = document.getElementsByClassName('input');
      if (number == 0) {
        //qasju elementeve te para
        var usernameValue = inputElements[0].value;
        var passwordValue = inputElements[1].value;

        if (usernameValue == user || passwordValue == pass) {
          alert("Nuk jane te dhenat e mbushura");
        } else {
          alert("Login success")
        }

      } else if (number == 1) {
        //qasju elementeve te dyta
        var usernameValue = inputElements[3].value;
        var passwordValue = inputElements[4].value;
        var confPass = inputElements[5].value;
      }
    }

    function changeForm(number) {
      var format = document.getElementsByClassName('forms');
      if (number == 0) {
        format[0].classList.remove("hidden");
        format[0].classList.add("form-style");
        format[1].classList.add("hidden");
        format[1].classList.remove("form-style");
      } else {
        format[1].classList.remove("hidden");
        format[1].classList.add("form-style");
        format[0].classList.add("hidden");
        format[0].classList.remove("form-style");
      }
    }