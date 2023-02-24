import { createSlice, current } from "@reduxjs/toolkit";
import Category from "../Dashboard/Category";



export const counterSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
    value2: [...Category],
    cartTotalAmount: 0,
  },
  reducers: {

    addCart: (state, ele) => {
      const newFind = state.value.findIndex(
        (item) => item.id === ele.payload.id
      );
      if (newFind) {
        const temporary = {...ele.payload,cartQuanity: 1};
        state.value.push(temporary);
      }

      if (newFind >= 0) {
        state.value.cartQuanity += 1;
      }
  
    },




    increse: (state, ele) => {
      let newFind = [...current(state.value)];
      let index = newFind.findIndex((item) => item.id === ele.payload.id);
      state.value[index].cartQuanity += 1;
     
      state.cartTotalAmount = state.value.reduce((total, item) => {
        return total + Number(item.price) * Number(item.cartQuanity);
      }, 0);
     
    },


    decrese: (state, ele) => {
      let newFind = [...current(state.value)];
      let index = newFind.findIndex((item) => item.id === ele.payload.id);
      state.value[index].cartQuanity -= 1;
    
      state.cartTotalAmount = state.value.reduce((total, item) => {
        return total + Number(item.price) * Number(item.cartQuanity);
      }, 0);
  

      if (state.value[index].cartQuanity < 0) {
        return (state.cartTotalAmount = 0);
      }
      if (state.cartTotalAmount < 0) {
        return (state.cartTotalAmount = 0);
      }
    },


    remove: (state, ele) => {
      const removeItem = state.value.find((item) => item.id === ele.payload);

      if (removeItem) {
        state.value = state.value.filter((item) => item.id !== ele.payload);
        state.cartTotalAmount = 0;
      }
     
    },
  },
});

export const { addCart, increse, decrese, remove } =
  counterSlice.actions;
export const selectCount = (state) => state.cart.value;
export const selectCount1 = (state) => state.cart.value2;
export const  details = (state) => state.cart.detail;
export const selectCount2 = (state) => state.cart.cartTotalAmount;
// export const selectCount3 = (state) => state.cart.cartTotalQuantity;

export default counterSlice.reducer;
