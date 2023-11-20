import { useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../libs/api"


export function useDrinks(){

    const [cardData, setCardData] = useState([])
    const [dataCardById, setDataCardById] = useState([])
    const {id} = useParams()

    const fetchData = async () => {
        try {
            const response = await API.get('/drinks')
            setCardData(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error, "error fetching data drinks");
        }
    }

    const getDrinksByid = async () => {
        try {
            const response = await API.get(`/drinks/${id}`)
            setDataCardById(response.data)
            console.log(response.data);
        } catch (error) {
            console.log(error, "error get data by id");
        }
    }

    return { fetchData, getDrinksByid ,cardData, dataCardById }
}