const name = document.querySelector(".user");
const username = document.querySelector(".username").value;
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector(".form");
const user = localStorage.getItem(username);	
const data = JSON.parse(user);
name.addEventListener("click", function(){
	document.querySelector(".footer-user").classList.remove("err")
	document.querySelector(".error-name").innerText = ""
});
email.addEventListener("click", function(){
	document.querySelector(".footer-email").classList.remove("err")
	document.querySelector(".error-email").innerText = ""
})
password.addEventListener("click", function(){
	document.querySelector(".footer-password").classList.remove("err")
	document.querySelector(".error-pass").innerText = ""
})