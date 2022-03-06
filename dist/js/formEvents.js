//event object prevent default is mostly used on form submission or forms.

const emailForm = document.querySelector("form");
const submitForm = document.querySelector("#submit");
console.log(submitForm);

emailForm.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("Submitted");
});
