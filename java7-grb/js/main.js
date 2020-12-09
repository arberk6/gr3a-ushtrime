function myfunction() {

}

document.getElementById('submit').addEventListener("click", function (event) {
    event.preventDefault();
    myfunction();
})

function validate(param) {

}

var elementList = document.getElementsByClassName('submit');

for (var i = 0; i < elementList.length; i++) {
    elementList[i].addEventListener('click', function (event) {
        if (event.target.value == 'login') {
            validate(0);
        }
        else
            validate(1);
    })
}

var inputList = document.getElementsByClassName('input-field');
for (var i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener('keyup', function (event) {
        loginData = {
            ...loginData,
            [event.target.name]: event.target.value
        }
        // if (event.target.name == "username")
        //     usernameValue = event.target.value
        // else if (event.target.name == "password")
        //     passwordValue = event.target.value;

        // console.log("username is " + usernameValue + " and pass is " + passwordValue)
    })
}

var usernameValue = "";
var passwordValue = "";

var loginData = {
    username: "",
    password: ""
}


