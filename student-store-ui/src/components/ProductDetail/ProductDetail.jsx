import * as React from "react"
import axios from "axios"
import { useParams  } from "react-router-dom"
import "./ProductDetail.css"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound";
import { useState, useEffect } from "react"

export default function ProductDetail({handleAddItemToCart, handleRemoveItemFromCart,shoppingCart}) {
  const[product, setProduct] = useState({})
  const [isFetching, setIsFetching] = useState(true);
  const{productId} = useParams()
  
  useEffect(() => {
    const getProduct = async () => {
        try{
          const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
          const productData = response.data
          setProduct(productData.product)
          setIsFetching(false)
        } catch(error){
          return <NotFound/>
        }
      }
      getProduct()  
  },[])

  console.log("remove function (ProductDetail)",handleRemoveItemFromCart)
  
  return (
    <div className="product-detail">
        {isFetching ? <h1 className="loading">Loading...</h1> : <ProductView product={product} shoppingCart={shoppingCart} quantity={shoppingCart.quantity} productId={productId} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} /> }
    </div>
  )
}
