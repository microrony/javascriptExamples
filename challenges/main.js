function length(str) {
	if (str === '') {
		return 0;
	} else {
		 return length(str.substring(1)) + 1;
	}
}

console.log(length('hello'));