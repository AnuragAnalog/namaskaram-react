import { createSlice, current } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // In Vanialla Redux
            // const newState = [...state];
            // newState.items.push(action.payload)
            // return newState;

            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            console.log(state)
            console.log(current(state))
            state.items.length = 0; // []
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer;