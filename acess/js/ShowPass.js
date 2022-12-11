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