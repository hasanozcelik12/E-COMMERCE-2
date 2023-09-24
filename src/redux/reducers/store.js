import productReducer from "./productReducer";
import basketReducer from "./basketReducer";
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from "redux-thunk";


const rootReducer = combineReducers ({
    productState:productReducer,
    basketState: basketReducer,
})

// store'u oluşturup export etme
export default createStore(rootReducer,applyMiddleware(thunk))