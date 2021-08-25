import { ADD_TO_CART, CAR, CARS, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from '../types';

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
            const item = state.cars.find(car => car.id === action.id)
            return { ...state, cart: [...state.cart, { ...item, quantity: 1 }] }
        case REMOVE_FROM_CART:
            const filteredCart = state.cart.filter(c => c.id !== action.id);
            return { ...state, cart: [...filteredCart] }
        case INCREMENT_QUANTITY:
            const items1 = state.cart.map(c => {
                if (c.id === action.id) {
                    c.quantity++
                }
                return c
            })
            
            return {
                ...state,
                cart: [...items1]
            }
        case DECREMENT_QUANTITY:
            const items = state.cart.map(c => {
                if (c.id === action.id) {
                    c.quantity > 1 && c.quantity--
                }
                return c
            })
            return {
                ...state,
                cart: [...items]
            }

        default:
            return state
    }
}


