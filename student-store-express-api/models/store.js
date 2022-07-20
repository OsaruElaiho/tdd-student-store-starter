const { storage } = require("../data/storage");
const { BadRequestError } = require("../utils/errors")

class Store{
    // List all products currently in the db.json file
    static listProducts(){
        const products =  storage.get("products")
        return products
    }

    // Fetch a single product by its id
    static fetchProduct(productId){
        const product = storage.get("products").find({id:Number(productId)}).value()
        return product
    }
    
    // Create a purchase order
    static async purchaseOrder(purchase){
        if (!purchase) {
            throw new BadRequestError("Purchase order")
        }

        const createdAt = new Date().toISOString()
        const id = storage.get("purchases").value().length + 1
        let total = 0
        purchase.shoppingCart.forEach(cartItem => {
            let targetProduct = this.fetchProductById(cartItem.itemId)
            total += (targetProduct.price * cartItem.quantity)
        })
        // add a `8.75%` tax to the total
        total *= 1.0875
        // create a new purchase object containing 6 required fields and 1 optional field:
        const newPurchaseObj = { id, ...purchase.user, order: purchase.shoppingCart, total: total.toFixed(2) , createdAt }
        storage.get("purchases").push(newPurchaseObj).write()
        return newPurchaseObj
    }

    // 
    static async listPurchases(){
        const purchases = storage.get("purchases")
        return purchases
    }

}
module.exports = Store