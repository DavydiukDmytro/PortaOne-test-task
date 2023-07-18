const e=e=>e.uniqueChar?`
        <section class="method1">
			<h2>Method1</h2>
			<p>Unique character in the text: <span>${e.uniqueChar}</span></p>
		</section>
        `:`
        <section class="method1">
			<h2>Method1</h2>
			<p>There are no unique symbols</p>
		</section>
        `,t=e=>e.uniqueChar?`
        <section class="method2">
			<h2>Method2</h2>
			<p>Unique character in the text: <span>${e.uniqueChar}</span></p>
            <p>The number of unique characters in the text: <span>${e.countUnique}</span></p>
            <p>The number of words in the text: <span>${e.countWord}</span></p>
            </section>
        `:`
        <section class="method2">
			<h2>Method2</h2>
			<p>There are no unique symbols</p>
		</section>
        `,n=e=>{let t=e.split(" ").map(e=>r(Array.from(e))).filter(e=>/^[a-zA-Z]$/.test(e)),n=r(t);return{uniqueChar:n}},r=e=>{for(let t=0;t<e.length;t++){let n=e.filter(n=>n===e[t]);if(1===n.length)return e[t]}return null},u=e=>{let t=o(e),n=h(t),r=s(n);return{uniqueChar:r,countUnique:n.length,countWord:t.length}},o=e=>{let t=[],n="",r=1;for(let u=0;u<e.length;u++)e[u].match(/[a-zA-Z]/)?(r=1,n+=e[u],u===e.length-1&&(t.push(n),n="")):(1===r&&t.push(n),n="",r++);return t},h=e=>{let t=[];for(let n=0;n<e.length;n++){let r=s(e[n]);r&&t.push(r)}return t},s=e=>{let t={};for(let n=0;n<e.length;n++)t[e[n]]?t[e[n]]++:t[e[n]]=1;for(let e in t)if(1===t[e])return e;return null},l={form:document.querySelector("form"),textarea:document.querySelector("textarea"),sectionResult:document.querySelector(".result")};l.form.addEventListener("submit",function(r){r.preventDefault();let o=l.textarea.value.trim();if(""===o){l.sectionResult.innerHTML="<h2>You need to enter arbitrary text</h2>";return}let h=n(o),s=u(o),a=e(h)+t(s);l.sectionResult.innerHTML=a});
//# sourceMappingURL=index.ebe78cef.js.map
