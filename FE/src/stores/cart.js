import { createSlice } from "@reduxjs/toolkit";
import dataCard from '../utils/dataCard.json'


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        title: "",
        price: 0,
        image: ""
    },
    reducers: {
        SET_CART: (state) => {
            state.title = "",
            state.price = 0,
            state.image = ""
        }
    }
})

export const {SET_CART} = cartSlice.actions
export default cartSlice.reducer