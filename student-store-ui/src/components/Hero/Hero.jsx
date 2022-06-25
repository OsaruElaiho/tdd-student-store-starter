import * as React from "react"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <div className="intro">
          <h1>Welcome!</h1>
          <h2>Feel free to shop!</h2>
          <p>We have all kinds of goodies. Click on any of the items 
            to start filling up your shopping cart. Checkout whenever you're ready.</p>
        </div> 
        <div className="media">
          <img src={"/src/student_store_icon.svg"} alt={"hero img"} className="hero-img"/>
          {/* <img src={"/src/hero.png"} alt={"hero img"}/> */}
        </div> 
      </div>
    </div>
  )
}
