import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductView.css"


export default function ProductView({product, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart}) {
  return (
    <div className="product-view">
            <h1 className="product-id">Product #{product.id}</h1>
            <ProductCard 
              key={product.id} 
              product={product} 
              productId={product.id} 
              quantity={shoppingCart[product.id] || 0} 
              handleAddItemToCart={handleAddItemToCart} 
              handleRemoveItemFromCart={handleRemoveItemFromCart}
              showDescription={true}
              shoppingCart={shoppingCart}
            />
    </div>
  )
}
