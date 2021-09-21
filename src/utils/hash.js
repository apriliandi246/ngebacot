function hash(str, status) {
	let asciiCode;
	let character;
	let result = "";
	const arrStr = str.split("");

	if (status === "encrypt") {
		for (let index = 0; index < arrStr.length; index += 1) {
			asciiCode = arrStr[index].codePointAt(0) + 11;
			character = String.fromCodePoint(asciiCode);

			result += character;
		}
	}

	if (status === "decrypt") {
		for (let index = 0; index < arrStr.length; index += 1) {
			asciiCode = arrStr[index].codePointAt(0) - 11;
			character = String.fromCodePoint(asciiCode);

			result += character;
		}
	}

	return result;
}

export default hash;
