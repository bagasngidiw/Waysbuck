const express = require('express')
const { getAllCart, createCart } = require('../services/cart.service')

const router = express.Router()


router.get('/', async(req,res) => {
    const carts = await getAllCart()

    res.status(200).send(carts)
})

router.post('/', async (req, res) => {
    try {
     const newCart = req.body

     const carts = await createCart(newCart)

     return res.status(200).send({
        data: carts,
        message: "Create Cart Success"
     })
    } catch (error) {
        
    }
    
})

module.exports = router