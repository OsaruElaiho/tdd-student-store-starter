import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import "./App.css"
import axios from "axios"

export default function App() {
  const [products,setProducts] = React.useState([])
  const [isFetching,setIsFetching] = React.useState(false)
  const [error,setError] = React.useState(null)
  const [isOpen,setIsOpen] = React.useState(false)
  const [shoppingCart,setShoppingCart] = React.useState({})
  const [checkoutForm,setCheckoutForm] = React.useState("")
  
  const handleOnToggle = () => {
    if( true){
      setIsOpen(true)
    } else{
      setIsOpen(false)
    }
  }

  const handleAddItemToCart = (productId) => {
    
  }

  const handleRemoveItemFromCart = (productId) => {
    
  }

  const handleOnCheckoutFormChange = ({name, value}) => {
    setCheckoutForm({name, value})
  }

  const handleOnSubmitCheckoutForm = () => {

  }

  // API Call
const getData = async () => {
  const { data } = await axios.get(`https://codepath-store-api.herokuapp.com/store`);
  console.log(data.products.length)
  console.log(data.products);

  if (data.products.length > 0) {
    console.log("Set the data!")
    setProducts(data.products);
  }
  else {
    setError("API call failure!")
  }
};

React.useEffect(() => {
  getData();
}, []);

  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
              <Sidebar/>
        <Routes>
              {/* YOUR CODE HERE! */}
              <Route 
                path="/" 
                element={
                  <Home 
                    products={products}
                    setProducts={setProducts}
                    handleOnToggle={handleOnToggle}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                    handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                    handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                  />
                }
              />

              <Route 
                path="/products/:productId" 
                element={
                  <ProductDetail 
                    handleOnToggle={handleOnToggle}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                    handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                    handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                  />
                }
              />

              <Route 
                path="*" 
                element={
                  <NotFound 

                  />
                }
              />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
