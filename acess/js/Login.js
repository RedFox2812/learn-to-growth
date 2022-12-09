function signin(e){
	event.preventDefault();
	const username = document.querySelector(".username").value;
	const email = document.querySelector(".email").value;
	const password = document.querySelector(".password").value;
	const user = localStorage.getItem(username);	
	const data = JSON.parse(user);
	
	if(user == null) {
		alert("Please enter enough information");
	}
	else if( username == data.username
			 && email == data.email 
			 && password == data.password) {
		alert("Login successful")
		window.location.back();
	}
	else{
		alert("Login failed")
	}
};