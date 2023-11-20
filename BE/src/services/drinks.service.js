// service untuk logic, biar tanggung jawabnya ter isolate, dan functionnya reusable

const prisma = require("../db")
const {
    findDrinks,
    findDrinksById,
    insertDrink,
    deleteDrink,
    editDrink
} = require("../repository/drinks.repository")

const getAllDrinks = async () => {

    const drinks = await findDrinks()

    return drinks
}

const getDrinksById = async (id) => {

    const drink = await findDrinksById(id)

    // console.log("drink serv", drink);

    if (!drink) {
        throw Error("Product not found");
    }

    return drink
}


const createDrink = async (newDrink) => {
    const drinks = await insertDrink(newDrink)

    return drinks
}

const deleteDrinkById = async (drinkId) => {

    await getDrinksById(drinkId)

    await deleteDrink(drinkId)
}

const editDrinkById = async (drinkId, drinkData) => {

    await getDrinksById(drinkId)
    
    const drink = await editDrink(drinkId, drinkData)

    return drink
}

module.exports = {
    getAllDrinks,
    getDrinksById,
    createDrink,
    deleteDrinkById,
    editDrinkById
}