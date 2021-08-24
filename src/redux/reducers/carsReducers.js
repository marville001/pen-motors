import { CAR, CARS } from '../types';

const initialState = {
    cars: [],
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

        default:
            return state
    }
}


