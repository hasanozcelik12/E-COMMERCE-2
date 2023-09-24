import { useSelector } from "react-redux"
import Loading from "../components/Loading"
import Card from "../components/card"

const MainPage = () => {
  const {productState,basketState} = useSelector((store) => ({
    basketState: store.basketState,
    productState : store.productState,
  }))
  console.log(productState)
  return (
    <div>
      {/* Ürünler yoksa Loadingi ekrana bas */}
    {productState.isLoading && <Loading /> }
      
      <div className = 'd-flex flex-wrap justify-content-center gap-5 p-5'>
        {/* Üürnler varsa ekrana bas */}
      {productState.products.map((item) => (
      <Card key={item.id} item={item}/>
      ))}
      </div>
  
    </div>
  )
}

export default MainPage