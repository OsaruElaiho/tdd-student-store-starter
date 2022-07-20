import * as React from "react"
import "./App.css"
import { useState } from "react"

//import components
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import NotFound from "../NotFound/NotFound"
import ProductDetail from "../ProductDetail/ProductDetail"
import Hero from "../Hero/Hero"
import SubNavBar from "../SubNavBar/SubNavBar"


//Import Routes and API 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'
import { useEffect } from "react"


export default function App() {
  const [products,setProducts] = React.useState([])
  const [isFetching,setIsFetching] = React.useState()
  const [error,setError] = React.useState("")
  const [isOpen,setIsOpen] = React.useState(false)
  const [shoppingCart,setShoppingCart] = React.useState([])
  const [checkoutForm,setCheckoutForm] = React.useState({name:"", email: ""})
  const [inputValue,setInputValue] = React.useState("")
  const [purchases, setPurchases] = useState([])
  
const handleOnToggle = () => {
  if (isOpen === true) {
    setIsOpen(false)
  } else {
    setIsOpen(true)
  }
}


function handleAddItemToCart (productId) {
  console.log("productId", productId)
  if(shoppingCart.hasOwnProperty(productId)){
    setShoppingCart((prevCart)=> 
    ({...prevCart, [productId]:prevCart[productId] + 1}))
  }
  else{
    setShoppingCart((prevCart) => 
    ({...prevCart, [productId]:1}))
  } 
}

const handleRemoveItemFromCart = (productId) => {
  const cart = {...shoppingCart, [productId]:shoppingCart[productId]-1}
    if(cart[productId]=== 0){
      delete cart[productId]
    }
  setShoppingCart(cart)
}

    
// should update the checkoutForm object with the new value from the correct input(s)
function handleOnCheckoutFormChange(name, value) {
  setCheckoutForm({...checkoutForm, [name] : value})
}


// should submit the user's order to the API
const handleOnSubmitCheckoutForm = async () => {
  try {
    const res = await axios.post('http://localhost:3001/store', {user :checkoutForm, shoppingCart: shoppingCart})
    if(res.data.purchase) {
      setPurchases(current => [...current,res.data.purchase])
      setShoppingCart([])
    }      
  }catch(err) {
      console.log({err})
  }
  setShoppingCart([])
}
  
useEffect(() => {
  const getProducts = async () => {
    try {
      const response = await axios.get(`https://codepath-store-api.herokuapp.com/store`)
      // const response = await axios.get('http://localhost:3001/store')
      const products =  await response?.data?.products
      setProducts(products)
    } catch(error) {
      setError("data retrieval failed")
    }
  }
  getProducts()   
}, [])

const handleInputValueChange = (event) => {
  setInputValue(event.target.value)
}


return (
    <div className="app">
      <BrowserRouter>
      <main>
        <Sidebar
        isOpen={isOpen}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        products={products}
        checkoutForm={checkoutForm}
        setCheckoutForm={setCheckoutForm}
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
                    // isFetching={isFetching} 
                    // setIsFetching={setIsFetching}
                    handleAddItemToCart={handleAddItemToCart} 
                    handleRemoveItemFromCart={handleRemoveItemFromCart} 
                    // error={error}
                    // setError={setError} 
                    shoppingCart={shoppingCart}
                  />
                }
              />

              <Route 
                path="*" 
                element={ <NotFound/> }
              />
        </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
