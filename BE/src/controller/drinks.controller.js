const express = require('express')
const prisma = require('../db')
const {
    getAllDrinks,
    getDrinksById,
    createDrink,
    deleteDrinkById,
    editDrinkById,
    getDrinksByName
} = require('../services/drinks.service')

const router = express.Router()

router.get('/', async (req, res) => {
    const drinks = await getAllDrinks()

    res.status(200).send(drinks)
})

router.get('/:id', async (req, res) => {
    try {
        const drinkId = req.params.id
        // console.log(drinkId, "jamal");

        const drink = await getDrinksById(parseInt(drinkId))
        // console.log(drink, "drink by id");

        return res.status(200).send(drink)

    } catch (error) {
        return res.status(400).send(error.message)
    }
})



router.post('/', async (req, res) => {
    try {
        const newDrink = req.body;

        const drinks = await createDrink(newDrink)

        res.status(201).send(drinks)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.delete('/:id', async (req, res) => {

    try {
        const drinkId = req.params.id

        const product = await deleteDrinkById(parseInt(drinkId))
        res.status(200).send({
            product,
            message: 'Delete Success'
        })

    } catch (error) {
        res.status(400).send(error.message)
    }
})

// put itu harus seutuhnya di update
router.put('/:id', async (req, res) => {
    const drinkId = req.params.id
    const drinkData = req.body;

    if (!(drinkData.title && drinkData.price && drinkData.image)) {
        return res.status(400).send('Some Fields Are Missing');
    }

    const updatedDrinks = await editDrinkById(parseInt(drinkId), drinkData)

    res.status(200).send(updatedDrinks)
})

// patch boleh 1 field aja
router.patch('/:id', async (req, res) => {

    try {
        const drinkId = req.params.id
        const drinkData = req.body;
    
        const updatedDrinks = await editDrinkById(parseInt(drinkId), drinkData)
    
        res.status(200).send(updatedDrinks)

    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router