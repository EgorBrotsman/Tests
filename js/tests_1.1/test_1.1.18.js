function capitalize(str) {
	let string = str.toLowerCase();
	let newString = string[0].toUpperCase();

	for (let i = 1; i < string.length; i++)
		if (string[i] !== " ") {
			newString += string[i];
		} else {
			newString += " " + string[i + 1].toUpperCase();
			i++;
		}

	return newString;
}
