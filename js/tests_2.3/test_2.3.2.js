/*IsEmpty
Напишите функцию isEmpty, которая возвращает true, если у объекта нет свойств(у самого объекта, не у прототипов), иначе возвращает false.

const obj = Object.create(null);
isEmpty(obj); // -> true
isEmpty({ prop: 'value' }); // -> false
Напишите функцию isEmptyWithProtos, которая возвращает true, если у объекта и его прототипов(не включая Object.prototype) нет свойств, иначе возвращает false.

const protoObj = Object.create(null);
const obj = Object.create(protoObj);
isEmptyWithProtos(obj); // -> true
isEmptyWithProtos({}); // -> false
Обрати внимание на то, что функция isEmptyWithProtos проверяет наличие свойств не только у самого объекта, но и у его прототипов. Если создать пустой объект литерально (просто через фигурные скобки как в примере {}) то у такого объекта автоматически будет прототип Object. Поэтому isEmptyWithProtos возвращает false для таких объектов.*/

function isEmpty(obj) {
	for (const key in obj) {
		if (key) {
			return false
		}
	}

	return true
}

function isEmptyWithProtos(obj) {
	for (const key in obj) {
		if (key) {
			return false;
		}
	}

	return true;
}

const obj = Object.create(null);

console.log(isEmpty(obj)); // -> true
console.log(isEmpty({ prop: 'value' })); // -> false