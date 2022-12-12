/* Login */
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector(".form");
username.addEventListener("click", function(){
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

/* Register */
const usernamed = document.getElementById("username");
const emaild = document.getElementById("email");
const passwordd = document.getElementById("password");
const formd = document.getElementById("form");
usernamed.addEventListener("click", function(){
	document.querySelector(".footer-username-register").classList.remove("err");
	document.querySelector(".error-name-register").innerText = "";
});
emaild.addEventListener("click", function(){
	document.querySelector(".footer-email-register").classList.remove("err");
	document.querySelector(".error-email-register").innerText = "";
})
passwordd.addEventListener("click", function(){
	document.querySelector(".footer-password-register").classList.remove("err");
	document.querySelector(".error-pass-register").innerText = "";
})