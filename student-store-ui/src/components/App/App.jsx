import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import SubNavBar from "../SubNavBar/SubNavBar"
import Hero from "../Hero/Hero"
import "./App.css"
import axios from "axios"

export default function App() {
  const [products,setProducts] = React.useState([])
  const [isFetching,setIsFetching] = React.useState(false)
  const [error,setError] = React.useState(null)
  const [isOpen,setIsOpen] = React.useState(false)
  const [shoppingCart,setShoppingCart] = React.useState({
    itemId: 0, 
    quantity: 0 })
  const [checkoutForm,setCheckoutForm] = React.useState("")
  const [inputValue,setInputValue] = React.useState("")
  
  const handleOnToggle = () => {
    if(isOpen){
      setIsOpen(false)
    } else{
      setIsOpen(true)
    }
  }

  const handleAddItemToCart = (productId) => {
    for(let i = 0; i < shoppingCart.length; i++){
      if(shoppingCart[i].itemId == productId){
        shoppingCart[i].quantity += 1
        setShoppingCart((cart) => [...cart])
        return
      }
      productId.quantity = 1
      setShoppingCart((cart) => [...cart])
    }    
  }

  const handleRemoveItemFromCart = (productId) => {
    for(let i = 0; i < shoppingCart.length; i++){
      if(shoppingCart[i].itemId == productId){
        shoppingCart[i].quantity -= 1
        setShoppingCart((cart) => [...cart])
        return
      } else if (shoppingCart[i].itemId.quantity == 0){
        delete shoppingCart[i]
      }
    }
  }

  // should update the checkoutForm object with the new value from the correct input(s)
  const handleOnCheckoutFormChange = ({name, value}) => {
    setCheckoutForm({name, value})
  }

  // should submit the user's order to the API
  const handleOnSubmitCheckoutForm = () => {
    axios.post("https://codepath-store-api.herokuapp.com/store",{
      user:{name:checkoutForm.name, email:checkoutForm.value, shoppingCart}
    })
    .then(function(response){
    })
    .catch(function(error){
    })
  }
  
  const handleInputValueChange = (event) => {
    setInputValue(event.target.value)
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
}

React.useEffect(() => {
  getData();
}, []);

  return (
    <div className="app">
      <BrowserRouter>
      <main>
        <Sidebar
        isOpen={isOpen}
        shoppingCart={shoppingCart}
        products={products}
        checkoutForm={checkoutForm}
        handleOnCheckoutFormChange={handleOnCheckoutFormChange}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        handleOnToggle={handleOnToggle}
        />
        <Navbar/>
        <Hero/>
        <SubNavBar
        inputValue={inputValue}
        handleInputValueChange={handleInputValueChange}
        setProducts={setProducts}
        />
        <Routes>
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
        </main>
      </BrowserRouter>
    </div>
  )
}
