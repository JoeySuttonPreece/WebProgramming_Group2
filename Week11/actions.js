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
        items: [...state.items.slice(0, index), ...state.items.slice(index + 1)]
    }),
}