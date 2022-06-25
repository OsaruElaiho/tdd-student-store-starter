const express = require("express")
const data = require("../data/db.json")
class Store{
    // List all products currently in the db.json file
    static listProducts(){
        const products = {"products" : data.products}
        return products
    }

    // Fetch a single product by its id
    static fetchProduct(productId){
        const product = data.products[productId - 1]
        return product
    }
    
    // Create a purchase order
}
module.exports = Store