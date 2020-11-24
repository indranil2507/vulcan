import { configureStore } from '@reduxjs/toolkit'
import CountReducer from "./Reducers"
const store = configureStore({ reducer: {
   counter : CountReducer
} })

console.log(store.getState())


export default store