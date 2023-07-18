const refs = {
    form: document.querySelector("form"),
    textarea: document.querySelector("textarea"),
    method1: document.querySelector(".method1")
};
refs.form.addEventListener("submit", search);
function search(e) {
    e.preventDefault();
    const text = refs.textarea.value.trim();
    if (text === "") console.log("0");
    const arrUniqueChar = text.split(" ").map((word)=>findUniqueCharacter(Array.from(word))).filter((element)=>{
        return /^[a-zA-Z]$/.test(element);
    });
    const uniqueChar = findUniqueCharacter(text);
// const arr = findUniqueCharacter(Array.from(text));
// console.log(arr);
// const arrayChar = text.split(' ').map((element) => element.map());
// console.log(text.length);
}
function findUniqueCharacter(word) {
    for(let i = 0; i < word.length; i++){
        const arrChar = word.filter((element)=>element === word[i]);
        if (arr.length === 1) return word[i];
    }
    return null;
}

//# sourceMappingURL=index.579125c3.js.map
