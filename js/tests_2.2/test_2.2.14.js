/*getDaysBetweenDates
Реализуйте функцию getDaysBetweenDates которая принимает на вход две даты и возвращает количество полных дней между ними.

getDaysBetweenDates('1-1-2020', '1-2-2020'); // -> 1

Функция должна корректно работать с объектом Date
getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)); // -> 366

Функция должна корректно рабоать со значениями в миллисекундах
getDaysBetweenDates(1409796000000, 1409925600000); // -> 1

Если входные параметры - невалидные даты, то функция вовращает NaN:
getDaysBetweenDates('1-1-2020', 'дата'); // -> NaN

Если аргументов меньше 2-х, то функция должна пробросить исключение TypeError
getDaysBetweenDates(null); // -> TypeError

new Date(null) - валидная запись, которая вернёт количество миллисекунд, прошедшее с 01.01.1970 https://en.wikipedia.org/wiki/Unix_time */

const getDaysBetweenDates = (...dates) => {
	//code here
	const date1 = dates[0]
	const date2 = dates[1]
	
    if (dates.length < 2) {
        throw new TypeError()
		} else if (
			(typeof date1 === 'number' && typeof date2 === 'number') ||
			(date1 === null || date2 === null)
		) {
        return (Math.trunc((new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24)) + 0)
    } else {
        return (Math.trunc((Date.parse(date2) - Date.parse(date1)) / (1000 * 60 * 60 * 24)) + 0)
    }
}

console.log(getDaysBetweenDates("1-1-2020", "1-2-2020"));
console.log(
	getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0))
);
