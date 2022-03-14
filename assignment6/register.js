window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}
function validateForm() {
    var firstname = document.forms["myForm"]["firstname"];
    var lastname = document.forms["myForm"]["lastname"];
    var gander = document.forms["myForm"]["gender"];
    var bday = document.forms["myForm"]["bday"];
    var email = document.forms["myForm"]["email"];
    var username = document.forms["myForm"]["username"];
    var password = document.forms["myForm"]["password"];
    var errormsg = document.getElementById("errormsg");

    var passable = true;
    
    if(firstname.value == "")
    {
        passable = false;
        errormsg.innerText = "firstname required";
    }
    if(lastname.value == "")
    {
        passable = false;
        errormsg.innerText = "lastname required";
    }
    if(gander.value == "")
    {
        passable = false;
        errormsg.innerText = "gander required";
    }
    if(bday.value == "")
    {
        passable = false;
        errormsg.innerText = "bday required";
    }
    if(email.value == "")
    {
        passable = false;
        errormsg.innerText = "email required";
    }
    if(username.value == "")
    {
        passable = false;
        errormsg.innerText = "username required";
    }
    if(password[0].value == "")
    {
        passable = false;
        errormsg.innerText = "password required";
    }
    if(password[1].value == "")
    {
        passable = false;
        errormsg.innerText = "Retype password required";
    }
    if(password[0].value != password[1].value)
    {
        passable = false;
        errormsg.innerText = "password not match Retype password";
    }
    return passable;
}