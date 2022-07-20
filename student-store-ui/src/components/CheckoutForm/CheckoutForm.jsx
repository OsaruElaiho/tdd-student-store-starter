import React from 'react'
import "./CheckoutForm.css"


export default function CheckoutForm(props) {
  return (
    <div className="checkout-form">
        <h3>Payment Info $</h3>
        <form className="checkout-form" onSubmit={props.handleOnSubmitCheckoutForm}>
        <div className='input-field'>
            <label htmlFor="name">Name</label>
            <div className='control'>
                <input 
                    className="checkout-form-input"
                    type="text" 
                    name="name" required
                    placeholder="Student Name" 
                    value={props.checkoutForm.name}
                    onChange={(event) => {props.handleOnCheckoutFormChange(event.target.name,event.target.value)}}>
                </input>
            </div>
        </div>
        <div className='input-field'>
            <label htmlFor="label">Email</label>
            <div className='control'>
                <input 
                    className="checkout-form-input" 
                    type="email" 
                    name="email" required
                    placeholder="student@codepath.org" 
                    value={props.checkoutForm.email}
                    onChange={(event) => {props.handleOnCheckoutFormChange(event.target.name,event.target.value)}}>
                </input>
            </div>
        </div>
        <div className='field'>
            <div className='control'>
            <button className="checkout-button" type="submit">Checkout</button> 
            </div>
        </div>
      </form>
      <div className='checkout-success'>
        <h3>Checkout Info</h3>
        <div className='content'>
            <p>
                "A confirmation email will be sent to you so that you can confirm this order.
                Once you have confirmed the order, it will be delivered to your dorm room."
            </p>
        </div>
      </div>
    </div>
  )
}
