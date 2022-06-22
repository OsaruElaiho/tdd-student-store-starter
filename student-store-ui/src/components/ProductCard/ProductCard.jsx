import * as React from "react"
import {Link} from 'react-router-dom'
import "./ProductCard.css"


export default function ProductCard({product, productID, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {
    var currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    return (
    <div className="product-card">
        <div className="media">
            <Link to={"products/" + productID}>
            <img src={product.image}/>
            </Link>  
        </div>
        <div className="product-info">
            <div className="main-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{currency.format(product.price)}</p>
                {showDescription ? <p className="product-description">{product.description}</p> : null}
            </div>
            <div className="actions">
                <button className="add" onClick={handleAddItemToCart}>Add item</button>
                <button className="remove" onClick={handleRemoveItemToCart}>Remove item</button>
                {quantity > 0 ? <p className="product-quantity">{quantity}</p> : null}
                {/* <p className="product-quantity">{quantity}</p> */}
            </div>
        </div>
    </div>
  )
}
