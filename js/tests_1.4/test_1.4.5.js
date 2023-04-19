/*Реализуйте функцию calculatePrice, которая принимает массив заказов,
а возвращает сумму их стоимостей.
Каждый объект заказа содержит поле price, в котором хранится стоимость товара в числовом формате.

Суммой пустого массива должен быть 0. Если массив не передан, то суммой так же должен быть 0.*/

const calculatePrice = (orders) => {
	if (!orders) {
		return 0
	}
	return orders.reduce((acc, order) => {
		return acc += order.price
	}, 0)
	//code here
};


const data = [
	{
		type: "food",
		price: 130,
	},
	{
		type: "clothes",
		price: 7300,
	},
	{
		type: "other",
		price: 1400,
	},
];

console.log(calculatePrice(data)); // 8830