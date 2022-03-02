// Hundred Buttons usin for loop
const buttonContainer = document.querySelector('#container');

for (let i = 0; i <= 101; i++) {
	const createButton = document.createElement('button');
	createButton.innerText = 'Submit';
	const buttonStyleArray = ['px-5', 'py-3', 'bg-sky-500', 'text-sky-50'];
	createButton.classList.add(...buttonStyleArray);
	buttonContainer.appendChild(createButton);
}
