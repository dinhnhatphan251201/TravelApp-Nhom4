import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "./tourSlice";

const rootReducer = {
    tours: tourReducer,
};

store = configureStore({
    reducer: rootReducer,
});

export default store;
