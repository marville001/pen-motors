import { combineReducers } from "redux";
import {productsReducer} from "./productsReducers"


const rootReducer = combineReducers({
    products: productsReducer
})

export default rootReducer;