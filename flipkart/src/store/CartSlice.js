import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:[]
    },
    reducers:{
        addToCart:(state,data)=>{
            return {...state,cartItems:[...state.cartItems,data.payload]}
        },
        removeFromCart:(state,data)=>{
            let index = state.cartItems.findIndex(x=>{
                return x.id == data.payload.id
            });
            return {...state,cartItems:[...state.cartItems].splice(index,1)}
        }
    }
});
//export actions
export const {addToCart,removeFromCart} = CartSlice.actions

export default CartSlice.reducer;

