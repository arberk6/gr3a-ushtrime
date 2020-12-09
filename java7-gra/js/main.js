document.getElementById('submit').addEventListener("click", function (event) {
    event.preventDefault();
    myFunction();
})

function myFunction() {
    //
}

var obj = {

}

var btnList = document.getElementsByClassName('input');

for (var i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', function (event) {
        event.preventDefault();
        if (btnList[i].value == 'register')
            validate(1);
        else
            validate(0);
    })
}



function validate() {
    console.log('it is working')
}

// validate = () => {

// }

//detyra 4
var elementList = document.getElementsByClassName('input-field');

for (var i = 0; i < elementList.length; i++) {
    elementList[i].addEventListener('keyup', function (event) {
        loginObject = {
            ...loginObject,
            [event.target.name]: event.target.value
        }
        console.log(loginObject);

        // if (event.target.name == 'username')
        //     usernameValue = event.target.value;
        // else if (event.target.name == 'password')
        //     passwordValue = event.target.value;

        // console.log(event.target.name + " is " + usernameValue);
    })
}

var usernameValue = "";
var passwordValue = "";

var loginObject = {
    username: "",
    password: ""
}