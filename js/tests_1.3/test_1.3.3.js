/*sequenceSum
Реализуйте(с использованием рекурсии) функцию sequenceSum,
которая находит сумму последовательности целых чисел.
Последовательность задается двумя значениями: begin - начало последовательности,
end - конец последовательности.
Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. 
Сумма такой последовательности будет: 20.*/

let sum = 0;

function sequenceSum(begin, end) {

	if (begin > end) {
		return NaN
	} else if (begin === end) {
		return begin
	}

	return begin += sequenceSum(begin + 1, end)
}

console.log(sequenceSum(1, 5))// 1 + 2 + 3 + 4 + 5 = 15