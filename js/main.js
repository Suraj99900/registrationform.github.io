
function clearErrors() {

    errors = document.getElementsByClassName('error_box');
    for (let item of errors) {
        item.innerHTML = "";
    }


}
function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('error_box')[0].innerHTML = error;

}

function validateForm() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var d_text = /\D/g;
    var d_text_only = /\d{10}/g;

    var fname = document.forms['reg_form']["fname"].value;
    var lname = document.forms['reg_form']["lname"].value;
    if (fname.length < 3) {

        seterror("fname", "*Length of name is too short");
        returnval = false;
    }
    if (!d_text.test(fname)) {
        seterror("fname", "*Enter only charecter");
        returnval = false;
    }

    if (fname == "" || fname == null) {
        seterror("fname", "*Please enter your Fname");
        returnval = false;
    }
    if (lname.length < 3) {
        seterror("lname", "*Length of name is too short");
        returnval = false;
    }
    if (!d_text.test(lname)) {
        seterror("lname", "*Enter only charecter");
        returnval = false;
    }
    if (lname == "" || lname == null) {
        seterror("lname", "*Please enter your Lname");
        returnval = false;
    }
    // email
    let email = document.forms['reg_form']['email'].value;
    if (email.length < 13 || email.length > 30) {

        seterror("email", "*your email length is not propar");
        returnval = false;
    }
    if (email == "" || email == null) {

        seterror("email", "*Enter your email");
        returnval = false;
    }

    // password

    let password = document.forms['reg_form']['password'].value;
    let c_password = document.forms['reg_form']['c_password'].value;
    if (password.length <= 6) {
        seterror("password", "*Your password lenght should grater than 6");
        returnval = false;
    }
    if (password == null || password == "") {
        seterror("password", "*Enter your password");
        returnval = false;
    }
    if (c_password != password) {
        seterror("c_password", "*password not match");
        returnval = false;
    }
    if (c_password == null || c_password == "") {
        seterror("c_password", "*Confirm your password");
        returnval = false;
    }

    // phone number

    let phone = document.forms['reg_form']['phone'].value;

    if (!d_text_only.test(phone)) {
        seterror("phone", "*Enter only number");
        returnval = false;
    }

    if (phone.length < 10) {

        seterror("phone", "*Phone number length is not propar");
        returnval = false;
    }
    if (phone.length > 10) {

        seterror("phone", "*Phone number length is not propar");
        returnval = false;
    }
    if (phone == "" || phone == null) {

        seterror("phone", "*Enter your phone number ");
        returnval = false;
    }




    return returnval;
}

