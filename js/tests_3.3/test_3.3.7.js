/*PromiseRace
Напишите функцию, которая принимает массив промисов и возвращает результат того, который завершился первым. При этом если первый промис выдал ошибку - необходимо вернуть ее. */

function promiseRace(promises) {
	return new Promise((res, rej) => {
		promises.forEach((promise) => {
			promise
				.then(() => {
					return res(promise);
				})
				.catch(() => {
					return rej(promise);
				});
		});
	});
	// return new Promise((res, rej) => {
	// 	promises.forEach((promise) => {
	// 		promise
	// 			.then(() => {
	// 				return resolve(promise);
	// 			})
	// 			.catch((err) => {
	// 				return reject(err);
	// 			});
	// 	});
	// });
}
