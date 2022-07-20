const express = require("express")
const Store = require("../models/store")
const router = express.Router()
const {NotFoundError, BadRequestError} = require("../utils/errors")


// respond to GET requests to /store with an array of all products in the store
router.get("/", async (req, res, next) => {
  try {
    const products =  Store.listProducts()
    res.status(200).json({ products })
  } catch (err) {
    next(err)
  }
})

// respond to GET requests to /store/:productId with a single product based 
// on the product's id using this JSON format
router.get("/:productId", async (req, res, next) => {
  try {
    const productId = req.params.productId
    const product =  Store.fetchProduct(productId)
    if(!product){
      throw new NotFoundError("Product not found")
    }
    res.status(200).json({ product })
  } catch (err) {
    next(err)
  }
})

// should allow POST requests to the /store endpoint:
router.post("/", async (req, res, next) => {
  router.post('/', async (req, res, next) => {
    const newPost = req.body.post;
    console.log(newPost);
})
})


module.exports = router
