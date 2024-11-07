import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.title === action.payload.title);
            if (!existingItem) {
                state.items.push(action.payload);
            }

        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        }
    }
})


export const { addToCart, removeFromCart } = CartSlice.actions

export default CartSlice.reducer