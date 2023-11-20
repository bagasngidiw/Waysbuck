import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import dataCard from '../../utils/dataCard.json'
// import { borderRadius, width } from '@mui/system';
import './index.css'
// import Toppings from '../Toppings/Toppings';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useFormat } from '../../hooks/useFormat';
import { useDrinks } from '../../hooks/useDrinks';

export default function DrinkCard() {


    const {cardData, fetchData} = useDrinks()
    const {formatCurrency} = useFormat()

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Box >
                <Box sx={{ width: "100%", padding: '38px', textAlign: 'start' }}>
                    <Typography fontSize={'36px'} fontWeight={'900'} color={'#BD0707'} lineHeight={'normal'}>
                        Let's Order
                    </Typography>
                </Box>
                <Box display="flex" flexWrap="wrap" justifyContent="flex-start" >
                    {cardData.map((item, index) => (
                        <>
                            <Link to={`/drinks/${item.id}`} >
                                <Card sx={{ width: "241px", bgcolor: '#F6DADA', borderRadius: '10px', border: 'none', padding: 0, mr: '35px' }} variant="outlined">
                                    <CardMedia
                                        className='cardMedia'
                                        sx={{ height: '312px', width: '241px', borderRadius: '10px', margin: 0, cursor: 'pointer' }}
                                        image={item.image}
                                    />
                                    <CardContent className='cardContent' sx={{ textAlign: 'start', }}>
                                        <Typography component="div" fontSize={'18px'} color={'#BD0707'} fontWeight={'900'} lineHeight={'24.59px'}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" fontSize={'14px'} color="#974A4A" fontWeight={'400'} lineHeight={'19.12px'}>
                                            {formatCurrency(item.price)}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </>
                    ))}
                </Box>
                {/* <Button onClick={prevCard}>&lt;</Button> */}
                {/* <Button onClick={nextCard}>&gt;</Button> */}
            </Box>
        </>
    );
}