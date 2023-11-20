const prisma = require("../db")


const findDrinksByName = async (name) => {
    const drink = await prisma.drinks.findMany({
        where:{
            title: {
                contains: name,
                mode: 'insensitive' 
            }
        }
    })

    return drink
}

module.exports = {
    findDrinksByName
}