import { actionTypes } from "./actions/actionTypes";
const initialState = {
   basket : [],
  total :0,
  amount :0,
}


const basketReducer = (state=initialState,action) => {
    switch (action.type) {
      // sepete ekleme aksiyonu çalıştığında 
  case actionTypes.ADD_TO_PRODUCT :
    // elemanın sırasını sepette  bulma
    const index = state.basket.findIndex((i) => i.id === action.payload.id)

    if(index >= 0) {
      const clone = [...state.basket];
      clone[index] .amount++ ;
      return {...state ,  basket:clone} ;
    } 
    else {
       //  sepete yoksa sepete ekler
       const newArr = state.basket.concat({ ...action.payload, amount: 1 });

       return {
         ...state,
         basket: newArr,
         total: state.total + action.payload.price 
    }
   
    
      }
      case actionTypes.REDUCE_TO_PRODUCT:
        const instead = state.basket.findIndex((i) => i.id === action.payload.id)
         if (instead >= 0) {
          const New = [...state.basket];
          New[instead] .amount-- ;
          return {...state,basket:New}
  
        }else if (amount = 1) {
          return {...state,amount : 1}
        }
        
          
      default :
      return state;
}
}

export default basketReducer