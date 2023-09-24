import { useEffect } from "react"
import axios from "axios";
import { useDispatch } from "react-redux";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Basket from "./pages/Basket";
import { actionTypes } from "./redux/reducers/actions/actionTypes";
import { getProduct } from "./redux/reducers/actions/productActions";
function App() {
  const dispatch = useDispatch()

  // Bileşenin yüklenme anında çalışır
useEffect(() => {
  // api'den ürünleri alır
  // ve store'a aktarır
  dispatch(getProduct());
 },[]);

  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path = '/'  element={<MainPage/>}/>
    <Route path = '/sepet'  element={<Basket/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
