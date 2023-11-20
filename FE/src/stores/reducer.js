import { combineReducers } from "redux";
import cartSlice from "./cart";

export const {SET_CART} = cartSlice.actions
export const cart = cartSlice.reducer
const rootReducer = combineReducers({
    cartItems: cart
})

export default rootReducer;