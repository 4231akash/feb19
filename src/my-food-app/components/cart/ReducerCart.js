import { createSlice, current } from "@reduxjs/toolkit";
// import { number } from "yup";
// import { useState } from "react";
import Category from "../Dashboard/Category";

//  initialState : const [cart,setCart] =useState([...selectCount]);

export const counterSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
    value2: [...Category],
    // value3: [],
    cartAmount: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addCart: (state, ele) => {
      const newFind = state.value.findIndex(
        (item) => item.id === ele.payload.id
      );
      if (newFind > 0) {
        state.value[newFind].cartQuanity += 1;
      } else {
        const temporary = { ...ele.payload, cartQuanity: 1 };
        state.value.push(temporary);
      }
    },
    desCription: (state, ele) => {
      const newFind = state.value.findIndex(
        (item) => item.id === ele.payload.id
      );
      if (newFind >= 0) {
        state.value[newFind].cartQuanity += 1;
      }
       else {
        const temporary = { ...ele.payload, cartQuanity: 1 };
        state.value.push(temporary);
      }
    },
    increse: (state, ele) => {
      let newFind = [...current(state.value)];
      let index = newFind.findIndex((item) => item.id === ele.payload.id);
      if(newFind){
        state.value[index].cartQuanity +=1 ;
      }

    },
    decrese: (state, ele) => {
      let newFind = [...current(state.value)];
      let index = newFind.findIndex((item) => item.id === ele.payload.id);
      state.value[index].cartQuanity -=1

    },
    

  },
});

export const { addCart, desCription, increse, decrese } = counterSlice.actions;
export const selectCount = (state) => state.cart.value;
export const selectCount1 = (state) => state.cart.value2;
// export const selectCount2 = (state) => state.cart.value3;

export default counterSlice.reducer;
