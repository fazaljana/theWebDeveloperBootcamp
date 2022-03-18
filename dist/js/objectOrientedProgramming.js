/* 
//CODE START
// this function converts rbg() colors to hexadecimal color pattern
const hexaDecimalColors = (r, g, b) => {
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

//This functions makes and returns an object everytime it is called
// The resulting objects all follow the same recipe
const makeColor = (r, g, b) => {
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function () {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	};
	color.hex = function () {
		//THIS keyword is used to destrucutre the rgb colors. THIS refers to that 'const color = {};' color object.
		const { r, g, b } = this;
		return (
			"#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	};
	return color;
};

const firstColor = makeColor(35, 255, 150);
firstColor.hex();
firstColor.rgb();
//CODE END
*/

/*
// NEW OPERATOR START
//new operator
//The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
function Person(name, age, ethnicity, gender) {
	this.name = name;
	this.age = age;
	this.ethnicity = ethnicity;
	this.gender = gender;
}

function Car(make, model, color, price, owner) {
	this.make = make;
	this.model = model;
	this.color = color;
	this.price = price;
	this.owner = owner;
}

const user1 = new Person("Fazal Jana", 32, "Asian", "M");
const user2 = new Person("Nazeefah Jhetam", 30, "Asian", "F");

const car1 = new Car("Eagle", "Talon", "White", 2000, user1);
const car2 = new Car("BMW", "X3", "White", 2000, user2);
console.log(
	`${car1.owner.name} own a ${car1.color} ${car1.make} ${car1.model}`
);

// NEW OPERATOR END
*/

function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}

Color.prototype.rgb = function () {
	const { r, g, b } = this;
	return `rgb(${r},${g},${b})`;
};

Color.prototype.hex = function () {
	const { r, g, b } = this;
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r},${g},${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
const color2 = new Color(150, 255, 60);

console.log(color1.rgb());
