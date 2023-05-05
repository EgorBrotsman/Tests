/*increaseSalary
Давайте доработаем нашу функцию увеличения зарплат, но теперь будем увеличивать ЗП всем сотрудникам и добавим к ней дополнительный функционал.
Теперь будем использовать функционал async/await для решения этой задачи.

Вам нужно написать функцию, которая

Получает данные по всем работникам
Считаем среднее-арифметическое по ЗП
Тем сотрудникам, у которых ЗП меньше средней - повышаем на 20%, у кого больше - на 10%
Если запрос прошел успешно - отправлять сотруднику уведомление об увеличении ЗП тектом: Hello, <имя>! Congratulations, your new salary is <новая ЗП>!
Если запрос завершился неудачей - отправлять данные ошибки администратору
По итогу отправить суммарное ЗП работников после повышения в бухгалтерию
Должна всегда возвращать resolved промис с числовым значением, сколько зарплат успешно повышено.

Все функции для получения/изменения данных асинхронны и возвращают промисы.
	Вам предоставлены функции: 
api.getEmployees(); // Возвращает массив с объектами {id: 343, name: 'Alex', salary: 20000}
api.setEmployeeSalary(employeeId, newSalary); // Принимает id сотрудника и новую зарплату. Возвращает новые данные по сотруднику.
api.notifyEmployee(employeeId, text); // Принимает id сотрудника и текст уведомления
api.notifyAdmin(error); // Принимает ошибку
api.sendBudgetToAccounting(summarySalaries); // Принимает суммарную ЗП */

async function increaseSalary() {
	const employees = await api.getEmployees(); 
	const averageSalary =
		(await employees.reduce((acc, employee) => (acc += employee.salary), 0)) /
		employees.length;
	let newSalaryAllEmployees = 0
	let successSalaryTop = 0;
	for (const employee of employees) {
		try {
			let updateEmployeeSalary;
			if (employee.salary > averageSalary) {
				updateEmployeeSalary = await api.setEmployeeSalary(
					employee.id,
					employee.salary * 1.1
				);
				await api.notifyEmployee(
					updateEmployeeSalary.id,
					`Hello, ${updateEmployeeSalary.name}! Congratulations, your new salary is ${updateEmployeeSalary.salary}!`
				);
			} else {
				updateEmployeeSalary = await api.setEmployeeSalary(
					employee.id,
					employee.salary * 1.2
				);
				await api.notifyEmployee(
					updateEmployeeSalary.id,
					`Hello, ${updateEmployeeSalary.name}! Congratulations, your new salary is ${updateEmployeeSalary.salary}!`
				);
			}
			newSalaryAllEmployees += updateEmployeeSalary.salary;
			successSalaryTop++;
		} catch (error) {
			await api.notifyAdmin(error);
		}
	}

	await api.sendBudgetToAccounting(newSalaryAllEmployees)
	return successSalaryTop;
}

const api = {
	_employees: [
		{ id: 1, name: "Alex", salary: 120000 },
		{ id: 2, name: "Fred", salary: 110000 },
		{ id: 3, name: "Bob", salary: 80000 },
	],

	getEmployees() {
		return new Promise((resolve) => {
			resolve(this._employees.slice());
		});
	},

	setEmployeeSalary(employeeId, newSalary) {
		return new Promise((resolve) => {
			const updatedEmployees = this._employees.map((employee) =>
				employee.id !== employeeId
					? employee
					: {
							...employee,
							salary: newSalary,
					  }
			);
			this._employees = updatedEmployees;
			resolve(this._employees.find(({ id }) => id === employeeId));
		});
	},

	notifyEmployee(employeeId, text) {
		return new Promise((resolve) => {
			resolve(true);
		});
	},

	notifyAdmin(error) {
		return new Promise((resolve) => {
			resolve();
		});
	},

	setEmployees(newEmployees) {
		return new Promise((resolve) => {
			this._employees = newEmployees;
			resolve();
		});
	},

	sendBudgetToAccounting(newBudget) {
		return new Promise((resolve) => {
			resolve();
		});
	},
};

increaseSalary();
