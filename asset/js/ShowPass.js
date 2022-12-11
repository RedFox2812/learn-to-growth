const input = document.querySelector(".password");
const eyeShow = document.querySelector(".show-eye");
const eyeHidden = document.querySelector(".hidden-eye");
eyeShow.addEventListener("click", function(){
	eyeShow.classList.remove("shows");
	eyeHidden.classList.add("shows");
	input.setAttribute("type", "text");
});

eyeHidden.addEventListener("click", function(){
	eyeShow.classList.add("shows");
	eyeHidden.classList.remove("shows");
	input.setAttribute("type", "password");
});

const inputs = document.querySelector("#password");
const eyeS = document.querySelector(".s-eye");
const eyeH = document.querySelector(".h-eye");
eyeS.addEventListener("click", function(){
	eyeS.classList.remove("shows");
	eyeH.classList.add("shows");
	inputs.setAttribute("type", "text");
});

eyeH.addEventListener("click", function(){
	eyeS.classList.add("shows");
	eyeH.classList.remove("shows");
	inputs.setAttribute("type", "password");
});