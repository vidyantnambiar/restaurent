import { configureStore } from "@reduxjs/toolkit";
import restaurentSlice from "./restaurentSlice";

const store = configureStore({
    reducer: {
        restaurentSlice: restaurentSlice

    }
})
export default store;