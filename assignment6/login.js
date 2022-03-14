window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	var username = document.forms["myLogin"]["username"];
	var password = document.forms["myLogin"]["password"];

	const urlParams = new URLSearchParams(queryString);
	const usernameURL = urlParams.get('username')
	
	const passwordURL = urlParams.get('password')

	var passable = true;

	if(username.value != usernameURL)
	{
		passable = false;
		alert("Invalid username");
	}
	if(password.value != passwordURL)
	{
		passable = false;
		alert("Invalid password");
	}
	return passable;
}

			