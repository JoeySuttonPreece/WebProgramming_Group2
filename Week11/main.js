function titleCase(text) {
    let terms = text.split(" ");
    terms = terms.map((term) => {
        let chars = term.split("");
        chars[0] = chars[0].toUpperCase();
        return chars.join("");
    });
    return terms.join(" ");
}

// let _ = document.querySelector("#_");
let items = document.querySelector("#items");
let add = document.querySelector("#add");
let entry = document.querySelector("#entry");

add.onclick = () => {
    if (entry.value != "") {
        let newItem = document.createElement("div");
        newItem.appendChild(document.createTextNode(titleCase(entry.value)));
        items.appendChild(newItem);
    }
};