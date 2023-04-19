/*Invert
Напишите функцию, которая создает объект, состоящий из инвертированных ключей и значений объекта.

Если объект содержит повторяющиеся значения, последующие значения перезаписывают присвоения свойств предыдущих значений.*/


function invert(obj) {
	let arr = Object.entries(obj).map(el => el.reverse())

	return Object.fromEntries(arr)
}

console.log(invert({ a: 1, b: 2, c: 3 })) // { 1: a, 2: b, 3: c }