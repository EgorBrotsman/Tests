const lettersCount = (str) => {
	let string = str.toLowerCase();
	let letters = {};
	for (let i = 0; i < string.length; i++) {
		if (!letters[string[i]]) {
			letters[string[i]] = 1;
		} else {
			letters[string[i]] += 1;
		}
	}
	return letters;
};
