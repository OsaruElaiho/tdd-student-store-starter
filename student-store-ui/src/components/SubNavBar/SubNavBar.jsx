import axios from "axios";
import * as React from "react"
import "./SubNavBar.css"


export default function SubNavBar(props) {    
    const handleCategories = async (category) =>{
        const { data } = await axios.get(`https://codepath-store-api.herokuapp.com/store`);
        console.log(data.products)
        if(category == "all"){
            props.setProducts(data.products)
        } else{
            let filteredCategory = data.products.filter(item => item.category == category)
            console.log(filteredCategory)
            props.setProducts(filteredCategory)
        }

    }

    return (
    <section className="sub-navbar">
        <div className="content">
            <div className="row">
                <div className="search-bar">
                <input
                type="text"
                name="search"
                placeholder="Search"
                value={props.inputValue}
                onChange={props.handleInputValueChange}
                />
                </div>
            </div>
            <div className="row">
                <div className="categories">
                <li className="active-btn">
                    <button id="all" value="all categories" onClick={() =>{ handleCategories("all")}}>All Categories</button>
                    <button id="clothing"value="clothing" onClick={() => {handleCategories("clothing")}}>Clothing</button>
                    <button id="food"value ="food" onClick={() => {handleCategories("food")}}>Food</button>
                    <button id="acc" value="accessories" onClick={() => {handleCategories("accessories")}}>Accessories</button>
                    <button id="tech" value="tech" onClick={() => {handleCategories("tech")}}>Tech</button>
                </li>
                </div>
            </div>

        </div>
    </section>
  )
}
// connectin front and backend & debugging
