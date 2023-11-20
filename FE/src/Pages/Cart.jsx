import { Box, Divider, Typography, Button, Input } from "@mui/material";
import trash from '../assets/svg/trash.svg'
import attach from '../assets/svg/attach.svg'
import dataCard from '../utils/dataCard.json'
// import toppings from '../utils/toppings.json'
import { Link, useParams } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import useAddToCart from "../hooks/useAddToCart";
import { useLocation } from 'react-router-dom';



export default function Cart() {
    // const { cart } = useAddToCart()
    const location = useLocation();
    const { state } = location;

    const { drinkDetails, selectedToppings, totalPrice, formatrupiah } = state || {};

    // if (!drinkDetails) {
    //     return <Typography>Your data not found</Typography>;
    // }

    console.log('Drink Details:', drinkDetails);
    console.log('Selected Toppings:', selectedToppings);
    console.log('Total Price:', totalPrice);

    // console.log('cart', cart);

    


    return (
        <>
            <Box sx={{ display: 'flex', width: '100%', gap: '84px' }}>
                <Box sx={{ width: '55%' }}>
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
                    <Box sx={{ my: '26px', textAlign: 'start' }}>
                        <Typography fontSize={'24px'} fontWeight={'900'} color={'#BD0707'}>
                            My Cart
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', textAlign: 'start' }}>
                        <Typography sx={{ mb: '9px' }} fontSize={'18px'} fontWeight={'400'} color={'#BD0707'}>
                            Review Your Order
                        </Typography>
                        <Divider sx={{ width: '100%', height: '1px', bgcolor: '#974A4A' }} />
                        {/* {cart.map((item, index) => ( */}
                            <Box sx={{ display: 'flex', mt: '17px' }}>
                                <Box sx={{
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: '10px',
                                    mb: '23px',
                                }} component='img' src="https://images.unsplash.com/photo-1638970813546-9c72d68c5194?auto=format&fit=crop&q=80&w=1938&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <Box sx={{ width: '100%', ml: '13px' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '13px' }}>
                                        <Box sx={{ textAlign: 'start' }}>
                                            <Typography fontSize={'14px'} fontWeight={'900'} color={'#BD0707'}>
                                            {drinkDetails && drinkDetails.title}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ textAlign: 'end' }}>
                                            <Typography fontSize={'14px'} fontWeight={'400'} color={'#BD0707'} >
                                               rp. 33.000
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '13px' }}>
                                        <Box sx={{ textAlign: 'start' }}>
                                            <Box sx={{ display: 'flex' }}>
                                                <Typography fontSize={'14px'} fontWeight={'800'} color={'#974A4A'}>
                                                    Toping
                                                </Typography>
                                                <Typography sx={{ ml: '8px' }} fontSize={'14px'} fontWeight={'400'} color={'#BD0707'}>
                                                    : bubble tea
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ textAlign: 'end' }}>
                                            <img src={trash} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        {/* ))} */}
                        <Divider sx={{ width: '100%', height: '1px', bgcolor: '#974A4A' }} />
                    </Box>
                    <Box sx={{ width: '100%', mt: '42px', display: 'flex' }}>
                        <Box sx={{ width: '350px' }}>
                            <Divider sx={{ width: '100%', height: '1px', bgcolor: '#974A4A' }} />
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mt: '14px', mb: '12px' }}>
                                <Typography textAlign={'start'} fontSize={'14px'} fontWeight={'400'} color={'#BD0707'}>
                                    Subtotal
                                </Typography>
                                <Typography textAlign={'end'} fontSize={'14px'} fontWeight={'400'} color={'#BD0707'}>
                                    Rp 33.000
                                </Typography>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mt: '14px', mb: '17px' }}>
                                <Typography textAlign={'start'} fontSize={'14px'} fontWeight={'400'} color={'#BD0707'}>
                                    Qty
                                </Typography>
                                <Typography textAlign={'end'} fontSize={'14px'} fontWeight={'400'} color={'#BD0707'}>
                                    2
                                </Typography>
                            </Box>
                            <Divider sx={{ width: '100%', height: '1px', bgcolor: '#974A4A' }} />
                        </Box>
                        <Box sx={{ width: '216px', height: '122px', bgcolor: 'rgba(224, 200, 200, 0.25)', ml: '91px', mt: '-12px', borderRadius: '5px', border: '2px solid #BD0707', color: 'gray' }}>
                            <img style={{ marginTop: '21px', marginLeft: '83px', marginRight: '83px' }} src={attach} />
                            Attache of Transaction
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    width: '450px',
                    mt: '62px',
                    rowGap: '20px',
                }}>
                    <Input placeholder="Name" sx={{
                        width: '100%', height: '50px', px: '15px', border: 'solid #BD0707', borderRadius: '5px', bgcolor: 'rgba(224, 200, 200, 0.25)', '&::placeholder': {
                            marginRight: '10px',
                        },
                    }} />
                    <Input placeholder="Email" sx={{
                        width: '100%', height: '50px', px: '15px', border: 'solid #BD0707', borderRadius: '5px', bgcolor: 'rgba(224, 200, 200, 0.25)', '&::placeholder': {
                            marginRight: '10px',
                        },
                    }} />
                    <Input placeholder="Phone" sx={{
                        width: '100%', height: '50px', px: '15px', border: 'solid #BD0707', borderRadius: '5px', bgcolor: 'rgba(224, 200, 200, 0.25)', '&::placeholder': {
                            marginRight: '10px',
                        },
                    }} />
                    <Input placeholder="PostCode" sx={{
                        width: '100%', height: '50px', px: '15px', border: 'solid #BD0707', borderRadius: '5px', bgcolor: 'rgba(224, 200, 200, 0.25)', '&::placeholder': {
                            marginRight: '10px',
                        },
                    }} />
                    <Input placeholder="Address" minRows={7} sx={{
                        resize: 'none', width: '100%', height: '130px', px: '15px', border: '2px solid #BD0707', borderRadius: '5px', bgcolor: 'rgba(224, 200, 200, 0.25)', '&::placeholder': {
                            marginRight: '10px',
                        },
                    }} />
                    <Button sx={{
                        width: "100%", borderRadius: '5px', backgroundColor: '#BD0707', color: 'white', '&:hover': {
                            backgroundColor: '#BD0707'
                        }
                    }} >
                        Pay
                    </Button>
                </Box>
            </Box>
        </>
    )
}