
const prisma = require('../db')


const findToppings = async() => {
    const toppings = await prisma.toppings.findMany()

    return toppings
}

const findToppingsById = async (id) => {
    const toppings = await prisma.toppings.findFirst({
        where: {
            id
        }
    })

    return toppings
}


const insertTopping = async (newTopping) => {
    const drink = await prisma.toppings.create({
        data: {
            title: newTopping.title,
            price: newTopping.price,
            image: newTopping.image
        }
    })

    return drink
}


module.exports = {
    findToppings,
    findToppingsById,
    insertTopping
}