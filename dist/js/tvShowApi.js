const form = document.querySelector("#tvMazeApi");

const imageContainer = document.querySelector("#queryResults");

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const userSearchKeyword = form.elements.tvShowSearch.value;
	//Axios allows us to use params so we don't have to add the query at the end of the search result.
	const config = { params: { q: userSearchKeyword } };
	const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
	makeImage(res.data);
	form.elements.tvShowSearch.value = "";
});

const makeImage = (shows) => {
	for (let result of shows) {
		if (result.show.image) {
			const img = document.createElement("IMG");
			const resultImage = result.show.image.medium;

			img.src = resultImage;
			imageContainer.appendChild(img);
		}
	}
};
