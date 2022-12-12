const input = document.querySelector(".password");
const eyeS = document.querySelector(".s-eye");
const eyeH = document.querySelector(".h-eye");
eyeS.addEventListener("click", function(){
	eyeS.classList.remove("shows");
	eyeH.classList.add("shows");
	input.setAttribute("type", "text");
});

eyeH.addEventListener("click", function(){
	eyeS.classList.add("shows");
	eyeH.classList.remove("shows");
	input.setAttribute("type", "password");
});

const inputs = document.getElementById("password");
const eyeSs = document.getElementById("s-eye");
const eyeHs = document.getElementById("h-eye");
eyeSs.addEventListener("click", function(){
	eyeSs.classList.remove("shows");
	eyeHs.classList.add("shows");
	inputs.setAttribute("type", "text");
});

eyeHs.addEventListener("click", function(){
	eyeSs.classList.add("shows");
	eyeHs.classList.remove("shows");
	inputs.setAttribute("type", "password");
});