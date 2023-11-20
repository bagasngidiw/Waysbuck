import { Card, CardMedia, Box, CardContent, Typography, Button } from "@mui/material";
import { Link, useParams } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useDrinks } from "../hooks/useDrinks";
import { useFormat } from "../hooks/useFormat";
import { useEffect, useState } from "react";
import { useTopping } from "../hooks/useTopping";

export default function DetailProduct() {

    // const { drinkDetails, selectedToppings, totalPrice, addToCart, formatRupiah, handleToppingClick } = useAddToCart()
    const { dataCardById, getDrinksByid } = useDrinks()
    const { formatCurrency } = useFormat()
    const { toppings, fetchTopping } = useTopping()


    if (!dataCardById) {
        return <Typography>Your data not found</Typography>
    }

    const [selectedToppings, setSelectedToppings] = useState([]);

    useEffect(() => {
        getDrinksByid()
        fetchTopping()
    }, [])


    const handleToppingClick = (toppingId) => {
        const isToppingSelected = selectedToppings.includes(toppingId);

        if (isToppingSelected) {
            setSelectedToppings(selectedToppings.filter((id) => id !== toppingId));
        } else {
            setSelectedToppings([...selectedToppings, toppingId]);
        }
    };

    // Calculate total price including drink price and selected toppings
    const calculateTotalPrice = () => {
        const drinkPrice = dataCardById.price || 0; // Replace 0 with default price if needed
        const selectedToppingsTotal = selectedToppings.reduce(
            (total, toppingId) => {
                const selectedTopping = toppings.find((topping) => topping.id === toppingId);
                return total + (selectedTopping ? selectedTopping.price : 0);
            },
            0
        );

        return drinkPrice + selectedToppingsTotal;
    };


    return (
        <>
            <Box>
                <Box display="flex">
                    <Card key={dataCardById} >
                        <CardMedia image={dataCardById.image} sx={{ width: '436px', height: '555px', borderRadius: '10px' }} />
                    </Card>
                    <Box sx={{ ml: '54px' }}>
                        <Box sx={{ textAlign: 'start' }}>
                            <Link to={`/`}>
                                <Button sx={{
                                    bgcolor: '#BD0707', color: 'white', '&:hover': {
                                        backgroundColor: 'rgba(224, 200, 200, 0.25)', border: '1px solid #BD0707', color: 'gray', padding: '5.5px'
                                    }
                                }}><ArrowBackOutlinedIcon />
                                </Button>
                            </Link>
                        </Box>
                        <Box sx={{ width: '100%', textAlign: 'start' }}>
                            <Typography fontSize={'48px'} fontWeight={'900'} color={'#BD0707'}>
                                {dataCardById.title}
                            </Typography>
                        </Box>
                        <Box sx={{ width: '100%', height: '33px', textAlign: 'start', mb: '74px' }}>
                            <Typography fontSize={'24px'} fontWeight={'400'} color={'#BD0707'}>
                                {formatCurrency(dataCardById.price)}
                            </Typography>
                        </Box>
                        <Box sx={{ width: '100%', height: '33px', textAlign: 'start' }}>
                            <Typography fontSize={'24px'} fontWeight={'800'} color={'#974A4A'}>
                                Toping
                            </Typography>
                            <Box display="flex" flexWrap="wrap" justifyContent="flex-start" mb={'59px'} mt={'22px'}>
                                {toppings.map((item) => (
                                    <>
                                        <Box key={item} sx={{
                                            display: 'flex', gap: '20px', mx: '15px', '&:hover': {
                                                textDecoration: 'underline'
                                            }

                                        }} onClick={() => handleToppingClick(item.id)}>
                                            <Typography fontSize={'14px'} fontWeight={'400'} style={{ cursor: 'pointer' }}>
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </>
                                ))}
                            </Box>
                            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', mb: '62px' }}>
                                <Box sx={{ textAlign: 'start' }}>
                                    <Typography fontSize={'24px'} fontWeight={'900'} color={'#974A4A'}>
                                        Total
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: 'end' }} >
                                    <Typography fontSize={'24px'} fontWeight={'900'} color={'#974A4A'}      >
                                        {formatCurrency(calculateTotalPrice())}
                                    </Typography>
                                </Box>
                            </Box>
                            <Link to={'/'}>
                                <Button sx={{
                                    width: "576px", height: "40px", borderRadius: '5px', backgroundColor: '#BD0707', color: 'white', '&:hover': {
                                        backgroundColor: 'rgba(224, 200, 200, 0.25)', border: '1px solid #BD0707', color: 'gray'
                                    }
                                }} >
                                    Add Cart
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}