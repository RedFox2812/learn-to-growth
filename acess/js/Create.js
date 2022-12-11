function signup(e){
	event.preventDefault();
	const username = document.getElementById("username").value;
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	if(username == "" || email == "" || password ==""){
		alert("Please enter enough information")
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
