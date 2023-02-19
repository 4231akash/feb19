import {configureStore} from "@reduxjs/toolkit";
import counterVar from "../cart/ReducerCart"

export default configureStore({
    reducer:{
        cart:counterVar 
    }
})