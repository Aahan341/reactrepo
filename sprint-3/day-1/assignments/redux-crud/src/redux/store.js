import thunk from "redux-thunk";
import {reducer as authReducer} from "./authReducer/reducer"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

const rootReducer =combineReducers({
    authReducer,
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))