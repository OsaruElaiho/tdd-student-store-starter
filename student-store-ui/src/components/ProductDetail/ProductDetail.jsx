import axios from "axios"
import * as React from "react"
import { useParams } from "react-router-dom"
import ProductView from "../ProductView/ProductView"


export default function ProductDetail({handleAddItemToCart, handleRemoveItemFromCart}) {
  const[product, setProduct] = React.useState({})
  const{productId} = useParams()

  React.useEffect(() => {
  axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`).then(response => {
    setProduct(response.data.product)
  }).catch(error => {
    setProduct(null)
  })
  },[])
  return (
    <div className="product-detail">
        {
          <ProductView 
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          product={product}
          />
        }
    </div>
  )
}
