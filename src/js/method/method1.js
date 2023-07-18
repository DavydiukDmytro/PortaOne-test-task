export const method1 = (text) => {
	const arrUniqueChar = text
		.split(' ')
		.map((word) => getUniqueChar(Array.from(word)))
		.filter((element) => {
			return /^[a-zA-Z]$/.test(element);
		});
	const uniqueChar = getUniqueChar(arrUniqueChar);
	return { uniqueChar };
};

const getUniqueChar = (word) => {
	for (let i = 0; i < word.length; i++) {
		const arrChar = word.filter((element) => element === word[i]);
		if (arrChar.length === 1) {
			return word[i];
		}
	}
	return null;
};
