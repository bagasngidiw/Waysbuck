const {findToppings, findToppingsById, insertTopping} = require('../repository/topping.repository')


const getAllToppings = async () => {
    
    const toppings = await findToppings()

    return toppings

}

const getToppingsById = async (id) => {
    const topping = await findToppingsById(id)

    if (!topping) {
        throw Error("Product not found");
    }

    return topping
}


const createTopping = async (newTopping) => {
    const topping = await insertTopping(newTopping)

    return topping
}

module.exports = {
    getAllToppings,
    getToppingsById,
    createTopping
}
