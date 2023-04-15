/*OptionalChaining
Напишите функцию, которая принимает первым параметром объект,
	вторым - массив из цепочки свойств, по которому нужно пройти, чтобы получить значение.

Если какое-то из свойств не найдено - функция возвращает undefined.*/


function optionalChaining(obj, chain) {
	let element = obj[chain[0]];
	if (!element) {
		return element
	}else if (chain.length - 1 > 0) {
		chain.shift()
		element = optionalChaining(element, chain);
	}
	return element
}

const obj = {
	a: {
		b: {
			c: {
				d: "Привет!",
			},
		},
	},
};

console.log(optionalChaining(obj, ["a", "c", "d"])); // undefined