/*Транслятор событий
Cоздайте класс EventEmitter для управления событиями. У этого класса должны быть следующие методы:
.on(event, callback) - добавить обработчик события

.off(event, callback) - удалить обработчик события

.once(event, callback) - добавить обработчик события, который сработает единожды

.emit(event, [...arg]) - вызвать все обработчики события event, можно передать аргументы

Расширьте EventEmitter классом BroadcastEventEmitter так, чтобы была возможность вызвать все обработчики всех событий:
emit("*", [...arg]) - вызвать все обработчики событий, можно передать аргументы
Event Emitter можно перевести как “транслятор” событий.

Представьте себе такую ситуацию: происходит какое-то событие, например пользователь кликнул на кнопку, на которое должны отреагировать разные участки программы. Чтобы проще организовать такую логику, используют шаблон Event Emitter, который можно реализовать разными способами. Основная идея в том, чтобы грамотно создать основу для управления событиями и реализовать возможность любым элементам “подписаться” на него (и быть в курсе происходящего).*/


class EventEmitter {
	constructor() {
		this.events = {};
		this.eventsOnce = {};
	}

	on(eventName, callback) {
		if (this.events[eventName]) {
			this.events[eventName].push(callback);
		} else {
			this.events[eventName] = [];
			this.events[eventName].push(callback);
		}
	}

	off(eventName, callback) {
		this.events[eventName] = this.events[eventName].filter(
			(eventCallback) => eventCallback !== callback
		);
	}

	once(eventName, callback) {
		if (this.eventsOnce[eventName]) {
			this.eventsOnce[eventName].push(callback);
		} else {
			this.eventsOnce[eventName] = [];
			this.eventsOnce[eventName].push(callback);
		}
	}

	emit(eventName, ...args) {
		if (this.events[eventName]) {
			this.events[eventName].forEach((eventCallback) =>
				eventCallback(...args)
			);
		}
		if (this.eventsOnce[eventName]) {
			this.eventsOnce[eventName].forEach((eventCallback) =>
				eventCallback(...args)
			);
			delete this.eventsOnce[eventName];
		}
	}
}

class BroadcastEventEmitter extends EventEmitter {
	emit(eventName, ...args) {
		if (eventName === "*") {
			for (const eventKey in this.events) {
				this.events[eventKey].forEach((eventCallback) =>
					eventCallback(...args)
				);
			}
			for (const eventKey in this.eventsOnce) {
				this.eventsOnce[eventKey].forEach((eventCallback) =>
					eventCallback(...args)
				);
			}
			delete this.eventsOnce[eventName];
		}
	}
}

let emitter = new EventEmitter();
console.log(emitter)

emitter.on("event:name-changed", (data) => {
	console.log(data);
});