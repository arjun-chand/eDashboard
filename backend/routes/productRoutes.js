const express = require('express');
const router = express.Router();

const Product = require('../db/Product');

router.post('/addproduct', async (req, res) => {
    let product = new Product(req.body);
    let response = await product.save();
    res.send(response);
})

router.get('/getproducts', async (req, res) => {
    let products = await Product.find();
    if (products.length > 0) {
        res.send(products);
    } else {
        res.send({ error: "no product found" })
    }
})

router.delete('/product/:id', async (req, res) => {
    try {
        const response = await Product.deleteOne({ _id: req.params.id })
        if (response.deletedCount === 1) {
            // If successful, send a success message
            res.json({ message: "Product deleted successfully" });
        } else {
            // If the product with the given ID was not found, send a 404 error
            res.status(404).json({ error: "Product not found" });
        }
    } catch (error) {
        // If an error occurred during the deletion process, send a 500 error
        res.status(500).json({ error: "Internal server error" });
    }

})

router.get('/product/:id', async (req, res) => {
    try {
        const response = await Product.findOne({ _id: req.params.id });
        if (response) {
            res.send(response);
        } else {
            res.status(404).send({ error: "Product not found" });
        }
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).send({ error: "Internal server error" });
    }
});

router.put('/product/:id', async (req, res) =>{
    const response = await Product.updateOne(
        {_id:req.params.id},
        {
            $set: req.body
        })
        res.send(response);
})
module.exports = router