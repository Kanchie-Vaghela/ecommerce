import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../Slices/CartSlice';
import wishlistReducer from '../Slices/WishlistSlice'

const store = configureStore({
    reducer:{
        cart : cartReducer,
        wishlist : wishlistReducer
    }
})

export default store