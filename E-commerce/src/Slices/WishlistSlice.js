import { createSlice } from '@reduxjs/toolkit'

export const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: []
    },
    reducers:{
        AddToWishlist: (state, action) => {
            const existingItem = state.items.find(item => item.title === action.payload.title);
            if (!existingItem) {
                state.items.push(action.payload);
            }
        }
    }
})

export const { AddToWishlist } = WishlistSlice.actions

export default WishlistSlice.reducer