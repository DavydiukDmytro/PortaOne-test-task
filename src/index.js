import { markupMethod1, markupMethod2 } from './js/markup';
import { method1, method2 } from './js/method';

const refs = {
	form: document.querySelector('form'),
	textarea: document.querySelector('textarea'),
	sectionResult: document.querySelector('.result'),
};

refs.form.addEventListener('submit', search);

function search(e) {
	e.preventDefault();
	const text = refs.textarea.value.trim();

	if (text === '') {
		refs.sectionResult.innerHTML = `<h2>You need to enter arbitrary text</h2>`;
		return;
	}

	const result = method1(text);
	const result2 = method2(text);

	const markup = markupMethod1(result) + markupMethod2(result2);
	refs.sectionResult.innerHTML = markup;
}
