const prisma = require("../db");

const findCart = async () => {
    const cart = await prisma.cart.findMany({
        include: {
            drink: true,
            topping: true
        }
    })
    return cart
}

const insertCart = async (newCart) => {

    const { quantity, total, drinkId, toppingId } = newCart;

    const cart = await prisma.cart.create({
        data: {
            quantity,
            total,
            drink: {
                connect: {id: drinkId}
            },
            topping: {
                connect: {id: toppingId}
            }
        }
    })

    return cart
}

module.exports = {
    findCart,
    insertCart
}