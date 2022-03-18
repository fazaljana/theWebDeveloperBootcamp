// axios.<method> will now provide autocomplete and parameter typings
// Make a request for a user with a given ID
//axios
//	.get("https://swapi.dev/api/people/1")
//	.then((response) => {
//		console.log(`Response: ${response}`);
//	})
//	.catch((err) => {
//		console.log(`Error: ${err}`);
//	});

const wrapper = document.querySelector(".wrapper");
const button = document.querySelector(".wrapper button");
const paragraph = document.createElement("p");
const paragraphClasslist = [
	"text-4xl",
	"font-bold",
	"text-center",
	"text-blue-800",
];
paragraph.classList.add(...paragraphClasslist);

const getStarWarsPerson = async () => {
	try {
		const res = await axios.get("https://swapi.dev/api/people/");
		console.log(res.data);
	} catch (e) {
		console.log(`Error: ${e}`);
	}
};

console.log(paragraph);
const getDadJoke = async () => {
	try {
		const config = { headers: { Accept: "application/json" } };
		const result = await axios.get("https://icanhazdadjoke.com/", config);
		paragraph.textContent = result.data.joke;
		wrapper.insertBefore(paragraph, button);
		console.log(result.data.joke);
	} catch (e) {
		console.log(`Error: ${e}`);
	}
};
getDadJoke();

button.addEventListener("click", getDadJoke);
