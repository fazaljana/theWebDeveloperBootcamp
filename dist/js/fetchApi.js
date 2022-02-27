// fetch api

// fetch("https://jsonplaceholder.typicode.com/comments/")
// 	.then((response) => {
// 		console.log(`Resolved: ${response}`);
// 		return response.json(); //returns a promise
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log(`Rejected: ${err}`);
// 	}); // this will return a promise.

//Async & Await
//Any function with async() returns a promise
const getTodos = async () => {
	const response = await fetch(
		"https://jsonplaceholder.typicode.com/comments/"
	); // once this is done we use the response.json() to return the data

	if (response.status !== 200) {
		throw new Error(`Cannot fetch the data.`);
	}
	const data = await response.json(); //this returns a wait and await comment waits till the promise is resolved
	return data;
};

getTodos()
	.then((data) => {
		console.log(`Resolved: ${data}`);
	})
	.catch((err) => {
		console.log(`Rejected: ${err.message}`);
	});
