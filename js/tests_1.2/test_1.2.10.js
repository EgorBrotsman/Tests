/*findAllIdx
Напишите функцию findAllIdx(arr, value),
которая возвращает массив индексов элементов, у которые значение равно value.

findAllIdx([1,0,1,0,0,1], 0) // [1,3,4]
findAllIdx([1,1], 0) // [] */

function findAllIdx(arr, value) {
	let arrIndex = []
	for (let i = 0; i < arr.length; i++){
		if (arr[i] === value) {
			arrIndex.push(i)
		}
	}

	return arrIndex
}



console.log(findAllIdx([1,0,1,0,0,1], 0))