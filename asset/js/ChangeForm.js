const login = document.querySelector(".login");
const register = document.querySelector(".register");
const changeRegister = document.querySelector(".form-create");
const changeLogin = document.querySelector(".form-login");

changeRegister.addEventListener("click", function(){
	login.classList.remove("active");
	register.classList.add("active");
});
changeLogin.addEventListener("click", function(){
	login.classList.add("active");
	register.classList.remove("active");
});