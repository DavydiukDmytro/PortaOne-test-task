export const method2 = (text) => {
	const arrWord = getArrWord(text);

	const arrUniqueChar = getArrUniqueChar(arrWord);

	const uniqueChar = getUniqueChar(arrUniqueChar);

	return { uniqueChar, countUnique: arrUniqueChar.length, countWord: arrWord.length };
};

const getArrWord = (text) => {
	let arrWord = [];
	let word = '';
	let currentIndex = 1;
	for (let i = 0; i < text.length; i++) {
		if (text[i].match(/[a-zA-Z]/)) {
			currentIndex = 1;
			word += text[i];
			if (i === text.length - 1) {
				arrWord.push(word);
				word = '';
			}
		} else {
			if (currentIndex === 1) {
				arrWord.push(word);
			}
			word = '';
			currentIndex++;
		}
	}
	return arrWord;
};

const getArrUniqueChar = (arr) => {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		const char = getUniqueChar(arr[i]);
		if (char) {
			result.push(char);
		}
	}
	return result;
};

const getUniqueChar = (arr) => {
	const countChar = {};
	for (let i = 0; i < arr.length; i++) {
		if (countChar[arr[i]]) {
			countChar[arr[i]]++;
		} else {
			countChar[arr[i]] = 1;
		}
	}

	for (const char in countChar) {
		if (countChar[char] === 1) {
			return char;
		}
	}

	return null;
};
