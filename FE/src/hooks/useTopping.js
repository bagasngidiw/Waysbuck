import { useState } from "react";
import { API } from "../libs/api";

export function useTopping(){

    const [toppings, setTopping] = useState([])


    const fetchTopping = async () => {

        try {
            const response = await API.get('/toppings')
            setTopping(response.data)
            console.log(response.data, "res top");
        } catch (error) {
            console.log(error, "error fetching data topping");
        }
    }


    

    return {toppings, fetchTopping}
    
}