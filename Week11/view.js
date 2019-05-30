import { h } from "hyperapp"
import { actions } from "./actions.js"

export const view = (state) =>
<div>
    <form id="inputForms" onsubmit={actions.recieveForm}>
        <input id="boot" oninput={actions.updateInput} value={state.input}></input>
        <button onclick={actions.addItem}>add to list</button>
    </form>
    {state.items.map((item, index) =>
    <div>
        <span>
            <i class="fas fa-minus-square" onclick={(state) => actions.removeItem(state, index)}></i>
        </span>
        <span>
            {item.completed ?
            <i class="far fa-check-square"></i> :
            <i class="far fa-square"></i>
            }
        </span>
        {item.name}
    </div>
    )}
</div>;