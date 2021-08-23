import { GET_PRODUCTS_REQUEST } from "../types"

const productsActions = () => dispatch=> {
    dispatch({
        type: GET_PRODUCTS_REQUEST,
        payload: "LOADING"
    })
}

export default productsActions
