import { createSlice } from '@reduxjs/toolkit'



export const CartSlice = createSlice({
    name: 'cart',
    initialState : {
        items: []
    },
    reducers:{
         addToCart: (state, action) => {
            state.items.push(action.payload);
         },
         removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
         }
    }
})

export const {addToCart, removeFromCart} = CartSlice.actions

export default CartSlice.reducer