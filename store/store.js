import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../components/CounterSlice";
import multiplierReducer from "../components/MultiplierSlice";


export default configureStore({
    reducer: {
        counter: counterReducer,
        multiplier: multiplierReducer,

    },
})