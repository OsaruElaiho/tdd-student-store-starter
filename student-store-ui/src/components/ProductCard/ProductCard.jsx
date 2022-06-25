import * as React from "react"
import {Link} from 'react-router-dom'
import "./ProductCard.css"


export default function ProductCard({product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart, showDescription}) {
    const [count,setCount] = React.useState(0)
    var currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    return (
    <div className="product-card">
        <div className="media">
            <Link to={"products/" + productId}>
            <img  className="pc-image" src={product.image}/>
            </Link>  
        </div>
        <div className="product-info">
            <div className="main-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{currency.format(product.price)}</p>
                <p className="stars">{stars(5)}</p>
            </div>
            {showDescription ? <p className="product-description">{product.description}</p> : null}
            <div className="actions">
               <button className="add" onClick={handleAddItemToCart(productId)}>+</button>
               {/* <button className="add" onClick={setCount(count-1)}>+</button> */}
               {/* <button className="remove" onClick={handleRemoveItemToCart(productId)}>+</button> */}
               {/* <button className="remove" onClick={setCount(count-1)}>-</button> */}
               <div className="quantity">
               {count > 0 ? <p className="product-quantity">{count}</p> : null}
               </div>
               {/* <button className="remove" onClick={handleRemoveItemFromCart(productId)}>-</button> */}

            </div>
        </div>
    </div>
  )
}

function stars (rating){
    if(rating== null || rating == 0){
        return "⭐"
    }
    let stars = ""
    let numStars = Math.ceil(rating)
    for (let i = 0; i < numStars; i++) {
        stars += "⭐"
    }
    return stars;
}
