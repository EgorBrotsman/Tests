/*Личный Счет
Создайте 2 класса - Person для описания клиента и Account для работы с банковским счетом частного лица.
Считаем, что отрицательный баланс счета - это нормально, обрабатывать как ошибку не надо.

Person
const person = new Person('Johannes', 'Helms', '1983-01-02');
Методы
getAge() - Возвращает возраст владельца счета
Свойства
firstName - Имя
lastName - Фамилия
fullName - Имя вместе с фамилией, вычислямое свойство (используем геттер)
Account
new Account(person, 1000);
Методы
addMoney(amount, description) - Положить деньги на аккаунт с комментарием к переводу
withdrawMoney(amount, description) - Вывести деньги с аккаунта с комментарием к переводу
getAmount() - Получить текущее состояние счета
getAccountHistory() - Возвращает массив с объектами формата { timestamp: 1574434091131, target: 'in', amount: 10, description: 'ЗП' }. Поле target может иметь значения in или out.
transfer(fromAccount, toAccount, amount) - статический метод, переводит деньги с одного счета на другой
Свойства
person - Владелец счета
Пример
const alex = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alex, 1000);
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);

alexAccount.addMoney(1000, 'Зарплата');
const amount = alexAccount.getAmount();
alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
Account.transfer(alexAccount, helenAccount, 100);
helenAccount.getAmount(); // 500
alexAccount.getAmount(); // 1700
Disclamer
Конечно, математику с плавающей точкой для обработки балансов использовать не стоит - будут накапливаться ошибки вычисления. Но в данном упражнении этим можно пренебречь.*/

class Person {
	constructor(firstName, lastName, dateBirth) {
		(this.firstName = firstName),
			(this.lastName = lastName),
			(this.dateBirth = dateBirth);
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`
	}

	getAge() {
		const currentDay = new Date();
		let personAge = currentDay.getFullYear() - new Date(this.dateBirth).getFullYear();
		const month = currentDay.getMonth() - new Date(this.dateBirth).getMonth();
		if (month < 0 || month === 0 && currentDay.getDate() < new Date(this.dateBirth).getDate()) {
			personAge--
		}

		return personAge;
	}
}

class Account {
	static transfer(fromAccount, toAccount, amount) {
		fromAccount.withdrawMoney(amount, "transfer");
		toAccount.addMoney(amount, "transfer");
	}

	constructor(person, money) {
		(this.person = person), (this.money = money), this.accountHistory = [];
	}

	getAccountHistory() {
		return this.accountHistory;
	};

	addMoney(amount, description) {
		this.money += amount;
		this.accountHistory.push({
			timestamp: Date.now(),
			target: 'in',
			amount: amount,
			description,
		})
	};

	withdrawMoney(amount, description) {
		this.money -= amount;
		this.accountHistory.push({
			timestamp: Date.now(),
			target: "out",
			amount: amount,
			description,
		});
	};

	getAmount() {
		return this.money;
	};
}

const alex = new Person("Alexey", "Petrov", "1994-05-22");
const alexAccount = new Account(alex, 1000);
const helen = new Person("Helen", "Smith", "1990-06-06");
const helenAccount = new Account(helen, 400);

alexAccount.addMoney(1000, 'Зарплата');
const amount = alexAccount.getAmount();
alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
Account.transfer(alexAccount, helenAccount, 100);
console.log(helenAccount.getAmount()); // 500
console.log(alexAccount.getAmount()); // 1700

