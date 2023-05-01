/*Apply Functions
Написать функцию applyFn, которая принимает на вход 2 параметра:

Массив с входными данными
Функцию, которую нужно применить к каждому элементу массива входных данных applyFn(dataArr, callback);
Функция должна возвращать объект в котором 2 массива массив результатов succeeded и массив ошибок errors с правильными call stacks

{
  succeeded: [...], // Массив данных после функции обработчика, как при вызове .map
  errors: [...],    // Массив инстансов ExecutionError
}
Создать класс ошибки ExecutionError с методом .getArgData(), по которому можно получить входные данные, на которых упала функция-коллбэк, то есть возвращать element входного массива dataArr, если вызов callback(element) сгенерирует ошибку

Стек трейс должен указывать на корректную позицию в функции-коллбэке Примечание: класс ExecutionError нужно сделать наследником другого класса*/


class ExecutionError {
	constructor(element, stack) {
		this.element = element;
		this.stack = stack;
	}

	getArgData() {
		return this.element;
	}
}

function applyFn(dataArr, callback) {
	const obj = {
		succeeded: [],
		errors: [],
	}

	dataArr.forEach(el => {
		try {
			obj.succeeded.push(callback(el))
		} catch (error) {
			obj.errors.push(new ExecutionError(el, error.stack));
		}
	})

	return obj
}


// const { succeeded, errors } = applyFn([1, 2, 3], (arg) => arg + 1);
  //succeeded: [2, 3, 4],
  //errors: [],

// const dataArr = ['{"login":"login","password":"password"}', '{{}'];
// const callback = JSON.parse;
// const { succeeded, errors } = applyFn(dataArr, callback);
//   succeeded: [{ login: 'login', password: "password" }],
//   errors: [ExecutionError],
// errors[0].getArgData(); // '{}'
