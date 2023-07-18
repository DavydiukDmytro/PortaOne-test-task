export const markupMethod2 = (result) => {
	let markup = '';
	if (result.uniqueChar) {
		markup = `
        <section class="method2">
			<h2>Method2</h2>
			<p>Unique character in the text: <span>${result.uniqueChar}</span></p>
            <p>The number of unique characters in the text: <span>${result.countUnique}</span></p>
            <p>The number of words in the text: <span>${result.countWord}</span></p>
            </section>
        `;
	} else {
		markup = `
        <section class="method2">
			<h2>Method2</h2>
			<p>There are no unique symbols</p>
		</section>
        `;
	}
	return markup;
};
