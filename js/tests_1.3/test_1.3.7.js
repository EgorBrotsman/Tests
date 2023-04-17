

function partition(array, callback) {
	const newArr = [[], []];
	for (let i = 0; i < array.length; i++){
		if (!callback) {
			array[i] ? newArr[0].push(array[i]) : newArr[1].push(array[i]);
		}else if (callback(array[i])) {
			newArr[0].push(array[i]);
		} else {
			newArr[1].push(array[i]);
		}
	}

	return newArr
}

const numbers = [1, 2, 3, 4, 5, 6];
const numbers2 = [0, 1, 2, {}, false, "", "0"];
const users = [
	{ user: "barney", age: 36, active: false },
	{ user: "fred", age: 40, active: true },
	{ user: "pebbles", age: 1, active: false },
];


console.log(partition(numbers, (element) => element >3));
console.log(partition(numbers2));
console.log(partition(users, (element) => element.active));
