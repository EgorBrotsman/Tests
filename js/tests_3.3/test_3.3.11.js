/*PromisesInSeries
Напишите функцию, которая принимает массив асинхронных функций и последовательно(следующая начинается, когда закончилась предыдущая) вызывает их, передавая в аргументы результат вызова предыдущей функции.*/

async function promisesInSeries(asyncFns) {
	let result;
    for(let item of asyncFns) {
        result = await item(result)
    }
    return result;
}


const firstPromise = () =>
	new Promise((resolve) => setTimeout(() => resolve(300)), 300);

const secondPromise = () =>
	new Promise((resolve) => setTimeout(() => resolve(200)), 200);

const thirdPromise = () =>
	new Promise((resolve) => setTimeout(() => resolve(100)), 100);

promisesInSeries([firstPromise, secondPromise, thirdPromise]);