import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../components/CounterSlice";
import multiplierReducer from "../components/MultiplierSlice";
import currentUserReducer from "../components/CurrentUserSlice";
import upgradeReducer from '../components/UpgradesSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        multiplier: multiplierReducer,
        uid: currentUserReducer,
        upgrades: upgradeReducer,
    },
})