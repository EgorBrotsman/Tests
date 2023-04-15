/*getStringCount
Реализуйте(с использованием рекурсии) функцию getStringCount,
которая должна принимать массив или объект и считать количество строк 
в массиве / значениях объекта с учетом вложенности.*/

function getStringCount(object) {
	let sum = 0;

	for (const key in object) {
		if (typeof object[key] === "string") {
			sum += 1;
		} else if (typeof object[key] === "object") {
			sum += getStringCount(object[key]);
		}
	}
	return sum;
};

console.log(getStringCount({
  first: '1',
  second: '2',
  third: false,
  fourth: ['anytime', 2, 3, 4 ],
  fifth:  null,
})); // 3