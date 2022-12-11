function signup(e){
	event.preventDefault();
	const username = document.getElementById("username").value;
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	
	if(username == "" 
	   && email == "" 
	   && password ==""){
		document.querySelector(".footer-username-register").classList.add("err");
		document.querySelector(".error-name-register").innerText = "Username is required";
		document.querySelector(".footer-email-register").classList.add("err");
		document.querySelector(".error-email-register").innerText = "Email is required";
		document.querySelector(".footer-password-register").classList.add("err");
		document.querySelector(".error-pass-register").innerText = "Password is required";
	}
	
	else{
		const user = {
			username: username,
			email: email,
			password: password,
		}
		const json = JSON.stringify(user);
		localStorage.setItem(username, json);
		window.location.reload(true);
	}
	
}
