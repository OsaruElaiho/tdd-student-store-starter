import * as React from "react"
import {Link} from 'react-router-dom'
import "./ProductCard.css"


export default function ProductCard(props) {
    const product = props.product
    var currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    function remove (productId) {
        // props.handleRemoveItemFromCart(productId)
        console.log(props.handleRemoveItemFromCart)
    }
    return (
    <div className="product-card">
        <div className="media">
            <Link to={"products/" + props.productId}>
            <img  className="pc-image" src={product.image}/>
            </Link>  
        </div>
        <div className="product-info">
            <div className="main-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{currency.format(product.price)}</p>
                <p className="stars">{stars(5)}</p>
            </div>
            {props.showDescription ? <p className="product-description">{product.description}</p> : null}
            <div className="actions">
                <div className="shop-btns">
                    <button type="button" name="add" onClick={() => props.handleAddItemToCart(product.id)}>+</button>
                    {/* <button type="button" name="remove" onClick={() => props.handleRemoveItemFromCart(product.id)}>-</button> */}
                    {/* <button type="button" className="remove" disabled={props.quantity === 0 ? true : false} onClick={() => props.handleRemoveItemFromCart(product.id)}>-</button> */}
                    <button type="button" className="remove" disabled={props.quantity === 0 ? true : false} onClick={() => props.handleRemoveItemFromCart(product.id)}>-</button>
                </div>
                <span className="product-quantity">
                    {props.quantity === 0 ? <span className="amt hide">{props.quantity}</span> : <span className="amt">{props.quantity}</span>}
                </span>
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
