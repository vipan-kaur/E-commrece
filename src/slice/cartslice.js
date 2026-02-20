import {createSlice} from '@reduxjs/toolkit'
const initialState = {
  cartitem: JSON.parse(localStorage.getItem("product")) || [] ,
    cartbadge: JSON.parse(localStorage.getItem("product")) || ""
};

export const cart = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
                const item = action.payload
                const existitem= state.cartitem.find((i)=>i.id == item.id)
                if(existitem){
                    existitem.quantity += 1
                }
                else{
                    state.cartitem.push({...item, quantity:1})
                }
                localStorage.setItem("product",JSON.stringify(state.cartitem))

        },

        removefromcart:(state,action)=>{
                const id =action.payload
                state.cartitem = state.cartitem.filter((item)=>item.id !==id)
                localStorage.setItem("product",JSON.stringify(state.cartitem))
        },

        incquantity:(state,action)=>{
            const id = action.payload
             const existitem=state.cartitem.find((item)=>item.id==id)
             if(existitem){
                existitem.quantity += 1
             }
             localStorage.setItem("product",JSON.stringify(state.cartitem))
        },

        decquantity:(state,action)=>{
            const id=action.payload
            const existitem=state.cartitem.find((item)=>item.id==id)
            if(existitem && existitem.quantity>1){
                existitem.quantity -=1
            }else if(existitem && existitem.quantity ===1 ){
                state.cartitem=state.cartitem.filter((item)=>item.id!==id)
            }
            localStorage.setItem("product",JSON.stringify(state.cartitem))
        }
  }

})
export const{addToCart,removefromcart,incquantity,decquantity}  = cart.actions;
export default cart.reducer;

