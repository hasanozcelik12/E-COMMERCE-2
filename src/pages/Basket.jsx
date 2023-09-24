import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import BasketItem from '../components/basketItem'

const Basket = () => {
 
  const state = useSelector((store) => store.basketState);
  return (
    <div className="row">
      <div className="col-md-9">
        {/* ürün yoksa */}
        {state.basket.length === 0 && (
          <p>Sepete henüz ürün eklenemedi...</p>
        )}

        {/* ürün varsa */}
        {state.basket.map((item,i) => (
          <BasketItem key={i} item={item} />
        ))}
      </div>

      <div className="col-md-3  mt-5">
        <h5 className="mb-4">Toplam: ${state.total}</h5>

        <button className="btn btn-success">
          Alışverişi Tamamla
        </button>
      </div>
    </div>
  )
}

export default Basket