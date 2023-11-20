// berkomunikasi dengan database
// boleh pke orm, boleh pke raw query
// supaya klo mo ganti orm, disini aja

const prisma = require("../db");

const findDrinks = async () => {
    const drinks = await prisma.drinks.findMany()

    return drinks
}

const findDrinksById = async (id) => {
    const drink = await prisma.drinks.findUnique({
        where: {
            id
        }
    })

    // console.log("ini drink repo", drink);

    return drink
}



const insertDrink = async (newDrink) => {
    const drinks = await prisma.drinks.create({
        data: {
            title: newDrink.title,
            price: newDrink.price,
            image: newDrink.image
        }
    })

    return drinks
}

const deleteDrink = async (id) => {
    await prisma.drinks.delete({
        where: {
            id
        }
    })
}

const editDrink = async (id, drinkData) => {
    const drink = await prisma.drinks.update({
        where: {
            id
        },
        data: {
            title: drinkData.title,
            price: drinkData.price,
            image: drinkData.image
        }
    })
    return drink
}

module.exports = {
    findDrinks,
    findDrinksById,
    insertDrink,
    deleteDrink,
    editDrink
}