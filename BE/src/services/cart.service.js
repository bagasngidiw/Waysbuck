const { findCart, insertCart } = require("../repository/cart.repository")


const getAllCart = async () => {
    const carts = await findCart()

    return carts
}

const createCart = async(newDrink) => {
    const carts = await insertCart(newDrink)

    return carts
}

module.exports = {
    getAllCart,
    createCart
}

