import * as React from "react"


export default function ProductDetail({handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className="product-detail">
        {
              <ProductDetail 
              handleAddItemToCart={handleAddItemToCart}
              handleRemoveItemToCart={handleRemoveItemToCart}
              />
            
          
        }

    </div>
  )
}
