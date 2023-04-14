const reverseLongWords = (str) => {
	let words = str.split(" ");
	let newString = [];

	for (let i = 0; i < words.length; i++) {
		if (words[i].length >= 5) {
			newString.push(reverse(words[i]));
		} else {
			newString.push(words[i]);
		}
	}

	return newString.join(" ");
};

function reverse(word) {
	let wordReverse = "";

	for (let i = word.length - 1; i >= 0; i--) {
		wordReverse += word[i];
	}

	return wordReverse;
}
