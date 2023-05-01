/*В localStorage по ключу "counters" находится JSON c объектом, полями которого являются имена счётчиков, а значениями - числовое значение счётчика. Напишите функцию incrementCounter, которой на вход первым параметром передаётся counterName - имя счётчика.

Задача функцции увеличить значение счётчика counterName на 1 и обновить данные в localStorage. В localStorage может находится невалидный JSON, чтение которого может првести к ошибке, в этом случае функция должна записывать новые данные, где у указанного счетчика будет значение 1. В конце функция должна возвращать значение счетчика после инкремента.*/

function incrementCounter(counterName) {
	try {
		const localCounters = JSON.parse(localStorage.getItem("counters"));
		if (localCounters[counterName]) {
			localCounters[counterName] = Number(localCounters[counterName]) + 1;
		} else {
			localCounters[counterName] = 1;
		}
		localStorage.setItem("counters", JSON.stringify(localCounters));
		return JSON.parse(localStorage.getItem("counters"))[counterName];
	} catch (e) {
		const localTargetCounter = {
			[counterName]: 1,
		};
		localStorage.setItem("counters", JSON.stringify(localTargetCounter));
		return JSON.parse(localStorage.getItem("counters"))[counterName];
	}
}