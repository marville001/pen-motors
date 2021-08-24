import { CARS } from '../types';

const initialState = {
    cars: [],
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

        default:
            return state
    }
}


