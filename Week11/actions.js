export const actions = {
    updateInput: (state, event) => ({
        ...state,
        input: event.target.value,
    }),
    addItem: (state) => {
        if (state.input.length > 0) {
            return {
                ...state,
                input: "",
                // items: [...state.items, {name: state.input, completed: false}],
                items: [...state.items, {name: state.input, completed: false}],
            }    
        }
        return state;
    },
    recieveForm: (state, event) => {
        event.preventDefault();

        return state;
    },
    removeItem: (state, index) => ({
        ...state,
        items: [...state.items.slice(0, index), ...state.items.slice(index + 1)],
    }),
    toggleItem: (state, index) => {
        let items = [...state.items];
        items[index].completed = !items[index].completed;

        return {
            ...state,
            items: items,
        }
    },
}

export function titleCase(text) {
    let terms = text.split(" ");
    terms = terms.map((term) => {
        let chars = term.split("");
        chars[0] = chars[0].toUpperCase();
        return chars.join("");
    });
    return terms.join(" ");
}