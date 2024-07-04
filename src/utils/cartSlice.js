import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    //firt configuration
    name :'cart',
    //2nd configration
    initialState :{
        items :[],
    },
    //3rd configuration
    reducers:{
        //mutating the state directly
        addItem :(state , action )=>{
            state.items.push(action.payload);
        },
        removeItem :(state ,action)=>{
            state.items.pop();
        },
        clearCart :(state , action)=>{
            state.items.length = 0 ;
        },
    },
});

export const {addItem ,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;