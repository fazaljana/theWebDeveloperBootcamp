const mainContainer = document.querySelector('.wrapper');
const apiSrc =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/';

for (let i = 1; i <= 151; i++) {
	const newDiv = document.createElement('div');
	const pokemonCounter = document.createElement('p');
	pokemonCounter.innerText = i;
	pokemonCounter.classList.add('text-center', 'font-bold', 'text-2xl');
	const imgContainer = document.createElement('img');
	imgContainer.setAttribute('src', `${apiSrc}${i}.png`);
	mainContainer.appendChild(newDiv);
	newDiv.appendChild(imgContainer);
	newDiv.appendChild(pokemonCounter);
}
