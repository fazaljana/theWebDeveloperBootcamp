// DOM Events THIS keyword
// The keyword THIS, when the function is called when you click on something or the function is called when you drag something. THIS keyword will refer to that something that was acted upon or whatever the event that was triggered on.
const wrapperButtons = document.querySelectorAll(".wrapper button");
const wrapperHeader = document.querySelectorAll(".wrapper h1");
console.log(wrapperButtons);

const makeRandomColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	return `rgb(${r},${g},${b})`;
};

console.log(makeRandomColor());

for (let button of wrapperButtons) {
	button.addEventListener("click", colorize);
}
for (let heading of wrapperHeader) {
	heading.addEventListener("click", colorize);
}

function colorize() {
	this.style.backgroundColor = makeRandomColor();
	this.style.color = makeRandomColor();
}
