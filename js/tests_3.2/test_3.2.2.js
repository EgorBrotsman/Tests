/*csvGenerator
Нужно написать функцию, которая переводит двумерный массив (массив массивов) в CSV формат и возвращать строку О формате: https://ru.wikipedia.org/wiki/CSV (детали в разделе "Спецификация")

Допустимые значения в качестве элементов массива - числа и строки Если встречается функция - выбрасывать ошибку с текстом "Unexpected value"

Функция принимает: data - массив массивов, содержашие числа или строки

Функция возвращает: Строку в формате CSV*/

function arraysToCsv(data) {
	return data
		.map((element) => {
			return element.map((el) => {
				if (typeof el !== "number" && typeof el !== "string") {
					throw new Error("Unexpected value");
				}
				if (el.length > 1) {
					return `"${el
						.split(" ")
						.map((el) => {
							if (el[0] == '"' && el[el.length - 1] == '"') {
								return `"${el}"`;
							} else {
								return `${el}`;
							}
						})
						.join(" ")}"`;
				} else {
					return el;
				}
			});
		})
		.join("\n");
}

console.log(
	arraysToCsv([
		[1, 2],
		["a", "b"],
	])
); // '1,2 a,b'
console.log(arraysToCsv([['"text"', 'other "long" text']]));
console.log(
	arraysToCsv([
		[1, 2],
		["a,b", "c,d"],
	])
); // '1,2 "a,b", "c,d"'
