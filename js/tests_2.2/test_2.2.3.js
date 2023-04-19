/*DeepEqual
Напишите функцию, которая проверяет на равенство два объекта, учитывая их вложенность.

Два объекта считаются равными, если у них все свойства одинаковы. В случае, если одно из свойств - само объект, мы сравниваем на равенство эти объекты по тому же алгоритму. Пример:*/

function deepEqual(obj1, obj2) {
if (obj1 === null && obj2 === null) {
	return true;
}
if ((obj1 === null && obj2 !== null) || (obj1 !== null && obj2 === null)) {
	return false;
}
if (typeof obj1 !== "object" && typeof obj2 !== "object") {
	return obj1 === obj2;
}


	if (
		obj1 !== null &&
		obj2 !== null &&
		typeof obj1 === "object" &&
		typeof obj2 === "object" &&
		obj1 !== obj2
	) {
		const newObj = Object.assign(
			{},
			JSON.parse(JSON.stringify(obj2)),
			JSON.parse(JSON.stringify(obj1))
		);
		return JSON.stringify(obj1).length !== JSON.stringify(obj2).length
			? false
			: JSON.stringify(newObj) === JSON.stringify(obj2) ||
			JSON.stringify(newObj) === JSON.stringify(obj1);
	} else { 
		return deepEqual(obj1, obj2);
	}
}

const firstObject = {
	a: {
		b: {
			c: 1,
			d: "string",
			e: {
				num: 1,
			},
		},
	},
};

const secondObject = {
	a: {
		b: {
			c: 1,
			d: "string",
			e: {
				num: 1,
			},
		},
	},
};

console.log(
	deepEqual(
		{ name: "Misha", order: { price: 20 } },
		{ order: { price: 20 }, name: "Misha" }
	)
); //true

console.log(
	deepEqual(
		{ test: { name: "Misha", order: { price: 20 } } },
		{ test: { order: { price: 20 }, name: "Misha" } }
	)
); //true
console.log(
	deepEqual(
		{ name: "Misha", order: { price: 20 } },
		{ name: "Misha", order: { price: 20 }, extraField: null }
	)
); // false
console.log(deepEqual(1, 2)); // false
console.log(deepEqual(true, false)); // false
console.log(deepEqual(firstObject, secondObject)); // true
