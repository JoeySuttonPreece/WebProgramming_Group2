import { h, app } from "hyperapp"

const Reset = () => 0
const Decrement = state => state - 1
const Increment = state => state + 1

app({
    init: Reset,
    view: state => (
        <div>
            <h1>{state}</h1>
            <button onclick={Reset}>Reset</button>
            <button onclick={Decrement} disabled={state === 0}>-</button>
            <button onclick={Increment}>+</button>
        </div>
    ),
    node: document.getElementById("app")
})


function titleCase(text) {
    let terms = text.split(" ");
    terms = terms.map((term) => {
        let chars = term.split("");
        chars[0] = chars[0].toUpperCase();
        return chars.join("");
    });
    return terms.join(" ");
}