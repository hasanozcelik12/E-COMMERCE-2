import React from 'react'
import { addToBasket } from '../redux/reducers/actions/productActions'
import { useDispatch } from 'react-redux'

const Card = ({item}) => {
  const dispatch = useDispatch()
  const handleSubmit = () => {
    dispatch(addToBasket(item))
  }
  return (
  
        <div className="card" style={{ width: '18rem'}}>
 <div className='p-4' style={{height:'300px'}}>
 <img  src={item.image} className="card-img-top img-fluid h-100" alt="..." />
 </div>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description.slice(0,50) + '...'}</p>
    <button onClick={handleSubmit } className="btn btn-primary">Sepete Ekle</button>
  </div>
</div>
   
  )
}

export default Card