

let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

const inRange = (a, b) => {
	//code here
	return function (element) {
		return Number(element) >= Number(a) && Number(element) <= Number(b)
	} 

};

const inArray = (arr) => {
	//code here
	return function (element) {
		return arr.includes(element)
	}
};

const notInArray = (arr) => {
	//code here
	return function (element) {
		return !arr.includes(element)
	}
};


console.log(arr.filter(inRange(3, 6))); // [3, 4, 5, 6]
console.log(arr.filter(inArray([1, 2, 10, undefined]))); // [1, 2, undefined]
console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true]))); // [undefined, NaN]