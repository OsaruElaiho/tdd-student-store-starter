import * as React from "react"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import "./Home.css"

export default function Home({products, handleAddItemToCart, handleRemoveItemFromCart}) {
  console.log("Home remove", handleRemoveItemFromCart)
  return (
    <div className="home">
      {/* <Hero/> */}
      <ProductGrid 
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
    </div>
  )
}
