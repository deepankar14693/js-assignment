function validate() {
    if (document.registration.firstname.value == "") {
        document.getElementById("fname").innerHTML = "Please provide your First Name!";
        document.getElementById("fname").style.color = "red";
        document.registration.firstname.focus();
        return false;
    }
    else {
        document.getElementById("fname").innerHTML = "";
    }

    var email = document.registration.email.value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (email == "" || atpos < 1 || (dotpos - atpos < 2)) {
        document.getElementById("email1").innerHTML = "Please enter valid email ID";
        document.getElementById("email1").style.color = "red";
        document.registration.email.focus();
        return false;
    }
    else {
        document.getElementById("email1").innerHTML = "";
    }

    if (document.registration.confirmemail.value != document.registration.email.value) {
        document.getElementById("email2").innerHTML = "email id should be same ";
        document.getElementById("email2").style.color = "red";
        document.registration.confirmemail.focus();
        return false;
    }
    else {
        document.getElementById("email2").innerHTML = "";
    }

    if ((registration.gender[0].checked == false) && (registration.gender[1].checked == false)) {

        document.getElementById("gen").innerHTML = "please select gender ";
        document.getElementById("gen").style.color = "red";
        return false;
    }
    else {
        document.getElementById("gen").innerHTML = "";
    }

    if (isNaN(document.registration.phone.value) || document.registration.phone.value.length != 10) {
        document.getElementById("num").innerHTML = "enter 10 digit mobile number ";
        document.getElementById("num").style.color = "red";
        document.registration.phone.focus();
        return false;
    }
    else {
        document.getElementById("num").innerHTML = "";
    }

    return (true);
}


function getInfo() {
    $.ajax({
        url: 'https://reqres.in/api/users/10',
        dataType: 'json',
        async: false,
        success: function (data) {
            var row = $('<tr><td>' + data.data.id + '</td><td>' + data.data.first_name + '</td><td>' + data.data.last_name + '</td><td>' + data.data.avatar + '</td></tr>');
            $('#myTable').append(row);
        },
        error: function (data) {
            console.log(data);
        }
    });
}

getInfo();