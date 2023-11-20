const { findDrinksByName } = require("../repository/search.repository")


const getDrinksByName = async (name) => {
    const drink = await findDrinksByName(name)

    if(!drink){
        throw Error("Product Name Doesnt Exist")
    }

    return drink
}

module.exports = {
    getDrinksByName
}