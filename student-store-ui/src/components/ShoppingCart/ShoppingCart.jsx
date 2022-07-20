import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({shoppingCart, products}) {
  console.log(shoppingCart)
  let subTotal = 0
  const cart = Object.keys(shoppingCart)

  return (
    <div className="cart-table">
      <div className="shopping-cart">
        <table>
          <thead>
            <tr className="cart-header">
              <th className="name-header">Name</th>
              <th className="header">Quantity</th>
              <th className="header">Unit Price</th>
              <th className="header">Cost</th>
            </tr>
          </thead>

          {Object.keys(shoppingCart).length === 0 ? <p>No items added to cart</p> : <Cart products={products} shoppingCart={shoppingCart} />}
          
        </table>
          {shoppingCart[0] ? "" : <div className="note" display="none">"No items added to cart yet. Start shopping now!"</div> }
      </div>
    </div>

  )
}

export function Cart({shoppingCart, products}) {
  let subTotal = 0
  const cart = Object.keys(shoppingCart)
  console.log("cart", shoppingCart)

  return(
    cart.map((product, index) => {
      console.log("product in cart", product)
      // console.log("test product details", products[product[0] - 1] )
      console.log("test product details", shoppingCart[String(product)] )
     
  
      const quantity = shoppingCart[String(product)]
      let product_details = products[product[0] - 1] 
      subTotal += product_details.price * quantity
      
    return(
        <div>
          <tbody>
            <tr>
              <td className="cart-product-name"> <div>{product_details.name}</div></td>
              <td className="cart-product-quantity"><div>{quantity}</div></td>
            <td className="cart-unit-price"><div>${(product_details.price)?.toFixed(2)}</div></td>
            <td className="cart-unit-total"><div>${(product_details.price * quantity)?.toFixed(2)}</div></td>
          </tr>
          </tbody>
  
        <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td className="tf">Subtotal: </td>
              <td className="subtotal">${subTotal?.toFixed(2)}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td className="tf">Tax: </td>
              <td className="tax-rate">8.75%</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td className="tf">Total: </td>
              <td className="total-price">${(subTotal * 1.0875).toFixed(2)}</td>
            </tr>
          </tfoot>
        </div>
        )
      }
    )
  )

}

