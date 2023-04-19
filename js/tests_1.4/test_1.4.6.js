/*Дан список информации о людях.

Необходимо вернуть массив, содержащий самого старшего человека в списке. 
Если несколько людей имеют одинаковый наибольший возраст, то нужно вернуть массив, содержащий их всех.

Возраст хранится в поле age.*/


const getMostSenior = (humans) => {
	//code here
	let maxAge = humans.reduce((acc, human) => human.age >= acc ? acc = human.age : acc, humans[0].age);
	return humans.filter(user => user.age >= maxAge)
};


const data = [
	{
		firstName: "Gabriel",
		lastName: "X.",
		country: "Monaco",
		continent: "Europe",
		age: 49,
		language: "PHP",
	},
	{
		firstName: "Odval",
		lastName: "F.",
		country: "Mongolia",
		continent: "Asia",
		age: 38,
		language: "Python",
	},
	{
		firstName: "Emilija",
		lastName: "S.",
		country: "Lithuania",
		continent: "Europe",
		age: 19,
		language: "Python",
	},
	{
		firstName: "Sou",
		lastName: "B.",
		country: "Japan",
		continent: "Asia",
		age: 49,
		language: "PHP",
	},
];
const result = getMostSenior(data);

console.log(result);
// [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]