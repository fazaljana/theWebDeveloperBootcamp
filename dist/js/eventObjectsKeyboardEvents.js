const wrapperButton = document.querySelector(".wrapper button");
const wrapperInput = document.querySelector(".wrapper #name");

wrapperInput.addEventListener("keydown", (e) => {
	console.log(e.code);
	console.log(e.key);
	console.log(e.target);
});
