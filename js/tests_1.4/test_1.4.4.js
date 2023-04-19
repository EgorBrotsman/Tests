/*Create Usernames
Дан массив пользователей. Необходимо преобразовать массив так, чтобы у каждого пользователя появился username. 
Поле username создается путем конкатенации firstName в нижнем регистре, 
первой буквы lastName в нижнем регистре и года рождения пользователя, 
который необходимо вычислить из текущей даты и возраста пользователя. Учтите, что функция должна работать даже в том случае,
 если вызвать ее, к примеру, через 10 лет.

Данные всегда будут передаваться в указаном ниже формате.
Возраст представлен в виде целого числа.
Фамилия всегда будет в формате "N.", где N - первая буква фамилии.
Порядок объектов в массиве должен сохраняться.
Порядок полей в объекте не важен.*/


const createUsernames = (users) => {
	//code here
	const year = new Date().getFullYear();
	
	users.map((user) => user.username = user.firstName.toLowerCase() + user.lastName[0].toLowerCase() + (year - user.age));

	return users 
};

const data = [
	{
		firstName: "Emily",
		lastName: "N.",
		country: "Ireland",
		continent: "Europe",
		age: 30,
		language: "Ruby",
	},
	{
		firstName: "Nor",
		lastName: "E.",
		country: "Malaysia",
		continent: "Asia",
		age: 20,
		language: "Clojure",
	},
];
const processedData = createUsernames(data);
console.log(processedData); // [
// { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//  username: 'emilyn1990' },
// { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//  username: 'nore2000' }
// ];