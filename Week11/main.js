import { h, app } from "hyperapp"

function titleCase(text) {
    let terms = text.split(" ");
    terms = terms.map((term) => {
        let chars = term.split("");
        chars[0] = chars[0].toUpperCase();
        return chars.join("");
    });
    return terms.join(" ");
}



app({
    init: () => 0,
    view: state => (
        <div>
      <h1>{state}</h1>
      <button onclick={state => state - 1}>-</button>
      <button onclick={state => state + 1}>+</button>
    </div>
  ),
  node: document.getElementById("app")
})