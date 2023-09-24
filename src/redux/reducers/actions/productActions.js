import axios from "axios"
import { actionTypes } from "./actionTypes"

// // Senkron Aksiyon : herhangi bir asenkron işlem yapmaz
// function sayiArttır() {
//   return {
//     type:'ADD_COUNT'
//   }
// }

export const addToBasket = (item) => {
  return {
    type :actionTypes.ADD_TO_PRODUCT,
    payload: item,
  }
}

export const reduceToBasket = (item) => {
  return {
    type :actionTypes.REDUCE_TO_PRODUCT,
    payload: item,
  }
}



// Asenkron Aksiyon
// Thunk sayesinde aksiyon dispatch edilmeden önce
// APİ çağrısı yapar
// gelen veriye göre dispatch işlemini yapar.
 export const getProduct = () =>  (dispatch) => {
    axios.get('https://fakestoreapi.com/products')
    .then((res) => dispatch({
        type: actionTypes.SET_PRODUCTS,
        payload:res.data,
    }))
    .catch((err) => dispatch({
        type:actionTypes.SET_ERROR,
    }))
 }




// // Asenkron Aksiyon
// function getProducts() {
//     return async function (dispatch) {
//     //    asenkron işlemler

//     // gelen verileri store a aktarma 
//     dispatch();
//     }
// }

// // Kısa yol 
// const getProduct = () => (dispatch) => {
//     // asenkron işlemler

//     // reducer'a emir verme
// }