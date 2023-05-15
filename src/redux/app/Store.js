import { configureStore } from '@reduxjs/toolkit';
import itemReducer from'../İtemSlice/ItemSlice' 
const store = configureStore({
    reducer:{
        item:itemReducer,
    }
})
export  default store;