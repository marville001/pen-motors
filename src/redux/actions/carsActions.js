import axios from "axios";
import { CAR, CARS, ADD_TO_CART } from "../types"

export const getCarsActions = () => async (dispatch) => {
    dispatch({
        type: CARS.REQUEST
    })

    try {
        const {data} = await axios.get("https://my-json-server.typicode.com/marville001/json-server/vehicles");
        
        dispatch({
            type: CARS.SUCCESS,
            cars: data
        })
        
    } catch (error) {
        dispatch({
            type: CARS.FAIL,
            error: JSON.stringify(error.message)
        })
    }
}

export const getCarActions = (id) => async (dispatch) => {
    dispatch({
        type: CAR.REQUEST
    })

    try {
        const {data} = await axios.get(`https://my-json-server.typicode.com/marville001/json-server/vehicles/${id}`);
        
        dispatch({
            type: CAR.SUCCESS,
            car: data
        })
        
    } catch (error) {
        dispatch({
            type: CAR.FAIL,
            error: JSON.stringify(error.message)
        })
    }
}

export const addToCartActions = (id) => async (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        id
    })
}