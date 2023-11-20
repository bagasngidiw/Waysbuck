const { getDrinksByName } = require("../services/search.service")
const express = require('express')
const router = express.Router()


router.get('/', async(req, res) => {
    try {
        const name = req.query.name

        const drink = await getDrinksByName(name)
        
        return res.status(200).send(drink)
    } catch (error) {
        return res.status(400).send(error.message)
    }
})

module.exports = router