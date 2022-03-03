const wrapper = document.querySelector(".wrapper");
const headingTitle = document.querySelector(".wrapper h1");
const colorButton = document.querySelector(".wrapper button");

// This function will generate a random integer from 0-255.
function getRandomInt() {
	return Math.floor(Math.random() * (255 - 0 + 1) + 0); //The maximum is exclusive and the minimum is inclusive
}

colorButton.addEventListener("click", () => {
	const red = getRandomInt();
	const green = getRandomInt();
	const blue = getRandomInt();
	wrapper.style.cssText += `background-color:rgb(${red},${green},${blue})`;
	headingTitle.textContent = `Color: rgb(${red},${green},${blue})`;
});
