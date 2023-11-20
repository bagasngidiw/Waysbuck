const express = require('express')
const { createTopping, getToppingsById, getAllToppings } = require('../services/topping.service')
const router = express.Router()


router.get('/', async (req, res) => {
    try {

        const toppings = await getAllToppings()
        // console.log(toppings, 'ini contr');
        return res.status(200).send(toppings)
    } catch (error) {
        res.status(400).send(error.message)
    }

})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id

        const topping = await getToppingsById(parseInt(id))
        // console.log(topping, "ini id");

        return res.status(200).send(topping)
    } catch (error) {
        res.status(400).send(error.message)
    }
})


router.post('/', async (req, res) => {
    try {
        const newTopping = req.body

        const topping = await createTopping(newTopping)
        console.log(topping, "post top");

        return res.status(200).send(topping)
    } catch (error) {
        res.status(400).send(error.message)
    }
})




module.exports = router