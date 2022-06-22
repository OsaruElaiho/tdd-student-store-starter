import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView({product, productID, quantity, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className="product-view">
        <h1 className="product-id">Product # {productID}</h1>
        <ProductCard>
            product={product}
            productId={productID}
            quantity={quantity}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
            showDescription={true}
        </ProductCard>
    </div>
  )
}
