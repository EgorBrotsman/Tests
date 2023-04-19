/*getArraysCounts
Реализуйте функцию getArraysCounts, которая принимает массив в качестве аргумента. Функция должна вернуть Map, в котором ключи - все уникальные элементы в массиве, а значения - количество этих элементов в массиве.*/


const getArraysCounts = (arr) => {
	//code here
	const newObj = new Map();

	arr.forEach((el) =>
		!newObj.has(el) ? newObj.set(el, 1) : newObj.set(el, newObj.get(el) + 1)
	);

	return newObj
};

const obj = { name: 123 };
const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
const counts = getArraysCounts(data); // экземпляр Map
console.log(counts.get(1)); // 3
console.log(counts.get(2)); // 4
console.log(counts.get(true)); // 2
console.log(counts.get(obj)); // 2