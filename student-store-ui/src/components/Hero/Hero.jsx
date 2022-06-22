import * as React from "react"

export default function Hero() {
  return (
    <div className="hero">
     <div className="intro">
        <h1>Welcome!</h1>
        <p></p>
     </div> 
     <div className="hero-img">
        <img src={"/src/hero.png"} alt={"hero img"}/>
     </div> 

    </div>
  )
}
