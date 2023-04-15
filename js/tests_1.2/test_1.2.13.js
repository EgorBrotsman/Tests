/* replaceItems
Напишите две функции replaceItemsClear(arr, item, replaceItem) и replaceItemsMutate(arr, item, replaceItem).

Функция replaceItemsClear находит все элементы массива arr, 
равные item, и возвращает новый массив, в котором на месте найденных значений стоит replaceItem.

Функция replaceItemsMutate реализует тот же функционал, только мутирует входящий массив и возвращает его же.

replaceItemsClear([1,2,3,4,2], 2, 'a');  [1,'a',3,4,'a']
const arr = [1,2,3,4,2];
replaceItemsMutate(arr, 2, 'a');
console.log(arr);  [1,'a',3,4,'a'] */

function replaceItemsClear(arr, item, replaceItem) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++){
		if (arr[i] === item) {
			newArr.push(replaceItem)
		} else {
			newArr.push(arr[i])
		}
	}
	return newArr;
};

const arr = [1, 2, 3, 4, 2];

function replaceItemsMutate(arr, item, replaceItem) {
	
	for (let i = 0; i < arr.length; i++){
		if (arr[i] === item) {
			arr[i] = replaceItem;
		}
	}
	return arr
};


console.log(replaceItemsClear([1, 2, 3, 4, 2], 2, "a")) //[1,'a',3,4,'a'];
replaceItemsMutate(arr, 2, "a")
console.log(arr); //[1,'a',3,4,'a'];