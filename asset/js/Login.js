function signin(e){
	event.preventDefault();
	var username = document.querySelector(".username").value;
	var email = document.querySelector(".email").value;
	var password = document.querySelector(".password").value;
	var user = localStorage.getItem(username);	
	var data = JSON.parse(user);

	
	if(username == "" 
			&& email == ""
		   	&& password == "") {
		document.querySelector(".footer-user").classList.add("err");
		document.querySelector(".error-name").innerText = "Username is required";
		document.querySelector(".footer-email").classList.add("err");
		document.querySelector(".error-email").innerText = "Email is required";
		document.querySelector(".footer-password").classList.add("err");
		document.querySelector(".error-pass").innerText = "Password is required";
	}
	else if(username == data.username 
			&& email == ""
		   	&& password == ""){
		document.querySelector(".footer-email").classList.add("err");
		document.querySelector(".error-email").innerText = "Email is required";
		document.querySelector(".footer-password").classList.add("err");
		document.getElementById("er-pass").innerText = "Password is required";
	}
	else if(username == data.username 
			&& email == data.email
		   	&& password == ""){
		document.querySelector(".footer-password").classList.add("err");
		document.getElementById("er-pass").innerText = "Password is required";
	}
	else if(username != data.username
			&& email == data.email
		   	&& password == data.password){
		document.querySelector(".footer-user").classList.add("err");
		document.querySelector(".error-name").innerText = "Wrong username";
	}
	else if(email != data.email){
		document.querySelector(".footer-email").classList.add("err");
		document.querySelector(".error-email").innerText = "Wrong email";
	}
	else if(password != data.password){
		document.querySelector(".footer-password").classList.add("err");
		document.querySelector(".error-pass").innerText = "Wrong password";
	}
	else if( username == data.username
			 && email == data.email 
			 && password == data.password) {
		alert("Login successful")
		window.location.back();
	}
};