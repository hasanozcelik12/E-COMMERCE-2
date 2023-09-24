import { actionTypes } from "./actions/actionTypes";

const initialState = {
    products : [],
    isLoading : true,
}


const productReducer = (state=initialState,action) => {
    switch (action.type) {
  case actionTypes.SET_PRODUCTS :
    return {...state,products:action.payload,isLoading : false }

    default :
    return state;

    }
}

export default productReducer