/*Once
Реализуйте функцию once, которая принимает функцию в качестве аргумента и возвращает новую функцию,
которая вызывает функцию - аргумент,
но только единожды.Повторный вызов функции - результата once не должен давать никакого эффекта.*/

const f = () => console.log("hi!");
const once = fn => {
	let count = true;
	return function () {
		if (count) {
			count = false
			return fn();	
		}
	}
};

const onceF = once(f)

onceF();