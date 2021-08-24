import { ADD_TO_CART, CAR, CARS } from '../types';

const initialState = {
    cars: [],
    cart: [],
    car: {},
    loading: false,
    error: ""
}

export const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CARS.REQUEST:
            return { ...state, loading: true, error: "" }
        case CARS.SUCCESS:
            return { ...state, loading: false, cars: action.cars }
        case CARS.FAIL:
            return { ...state, loading: false, error: action.error }
        case CAR.REQUEST:
            return { ...state, loading: true, error: "" }
        case CAR.SUCCESS:
            return { ...state, loading: false, car: action.car }
        case CAR.FAIL:
            return { ...state, loading: false, error: action.error }
            case ADD_TO_CART:
                const item = state.cars.find(car=>car.id===action.id)
                return { ...state, cart: [...state.cart, item ] }
                // case ADD_CART_QUANTITY:
                //     return { ...state, cart: [...state.cart, [action.id]:{name:"dhdh"} ] }

        default:
            return state
    }
}


