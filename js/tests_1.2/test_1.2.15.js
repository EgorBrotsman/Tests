/*moveToStart
Реализуйте функцию moveToStart, которая принимает массив и число n. 
Функция должна переставить n элементов массива из конца в начало.

Если второй аргумент больше или равен длине массива, 
то должен быть возвращен новый массив, порядок элементов которого совпадает с изначальным.

Функция должна возвращать новый массив, а не мутировать старый.*/

const moveToStart = (arr, n) => {

	let copyArr = Array.from(arr)
	let newArr = [];

	if (n >= arr.length) {
		return copyArr;
	}

	for (let i = 0; i < n; i++){
		newArr.unshift(copyArr.pop());
	}
	
	return newArr.concat(copyArr);
	
};


console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
console.log(moveToStart([1, 2, 3, 4, 5], 10)); // [1, 2, 3, 4, 5]