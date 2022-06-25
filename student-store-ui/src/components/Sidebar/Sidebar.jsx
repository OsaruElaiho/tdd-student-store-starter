import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export default function Sidebar(props) {
  let temp = props.isOpen ? "open":"closed"
  return (
    <section className={`sidebar ${temp}`}>
      <div className="wrapper">
        <button className="toggle-button" onClick={props.handleOnToggle}>cart</button>
        <div className="shopping-cart">
        <ShoppingCart>
          isOpen={props.isOpen}
          products={props.products}
          shoppingCart={props.shoppingCart}
        </ShoppingCart>
        </div>
      </div>
    </section>
  )
}
