function compareWithPrecision(a, b, precision) {
	if (a - b > 0 && a - b <= precision) {
		return true;
	} else if (b - a > 0 && b - a <= precision) {
		return true;
	}

	return false;
}
