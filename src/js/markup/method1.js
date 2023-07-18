export const markupMethod1 = (result) => {
	let markup = '';
	if (result.uniqueChar) {
		markup = `
        <section class="method1">
			<h2>Method1</h2>
			<p>Unique character in the text: <span>${result.uniqueChar}</span></p>
		</section>
        `;
	} else {
		markup = `
        <section class="method1">
			<h2>Method1</h2>
			<p>There are no unique symbols</p>
		</section>
        `;
	}
	return markup;
};
