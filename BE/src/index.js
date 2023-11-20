const express = require("express")
const dotenv = require("dotenv")

const cors = require('cors')
const app = express()

dotenv.config()

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Halo aku Kucing")
})

const drinksController = require('./controller/drinks.controller')
app.use('/drinks', drinksController)

const cartController = require('./controller/cart.controller')
app.use('/carts', cartController)

const toppingController = require('./controller/topping.controller')
app.use('/toppings', toppingController)

const searchController = require('./controller/search.controller')
app.use('/search', searchController)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})