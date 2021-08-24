import { combineReducers } from "redux";
import {carsReducer} from "./carsReducers"


const rootReducer = combineReducers({
    cars: carsReducer
})

export default rootReducer;