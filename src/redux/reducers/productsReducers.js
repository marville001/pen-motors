import { GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from '../types';

const initialState = {
    products: [],
    loading: false,
    error: ""
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return { ...state, loading: true, error: "" }
        case GET_PRODUCTS_SUCCESS:
            return { ...state, loading: false, products: action.products }
        case GET_PRODUCTS_FAIL:
            return { ...state, loading: false, error: action.error }

        default:
            return state
    }
}


