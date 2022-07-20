import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemFromCart}) {
  console.log("remove function (ProductGrid)",handleRemoveItemFromCart)
  return (
    <div className="product-grid">
        <div className="content">
            <h3>Best Selling Products</h3>
            <div className="grid">
            {console.log(products)}
            {products.map((product) =>
               (
                <ProductCard 
                key={product.id}
                product={product}
                showDescription={false}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
               )
                )
            }
            </div>
        </div>
    </div>
  )
}
