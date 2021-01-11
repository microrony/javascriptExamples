function calculateExponent(num, exp) {
	if (exp == 1) {
		return num;
	} else {
		return num * calculateExponent(num, exp - 1);
	}
}
