import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

export default function CartCheckout() {


    const [name, setName] = useState();
    const [cardNumber, setCardNumber] = useState();
    let { cartId } = useParams();

    // const itemCount = useSelector(state => state.quantity)
    // const dispatch = useDispatch();

    // const quantityReset= () => {
    //     dispatch({ type: 'DELETE_ALL' })
    // }
    const nameChanged = (event) => {
        setName(event.target.value)
    }

    const cardNumberChanged = (event) => {
        setCardNumber(event.target.value)
    }


    async function checkout() {

        //text box değerleri
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cartId: cartId,
                customerName: name,
                cardNumber: cardNumber
            })

        };

        return fetch(`http://localhost:8080/cart/checkout`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data === false) {
                    alert("Bu sipariş önceden tamamlanmıştır")
                }
                else {
                    alert("Siparişiniz onaylandı")
                    //quantityReset();
                }
            })
            .catch(error => console.error(error));

    }

    return (
        <>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Kullanıcı Adı" variant="outlined" onChange={nameChanged} /> <br></br>
                <TextField id="outlined-basic" label="Kart Numarası" variant="outlined" onChange={cardNumberChanged} /> <br></br>

                <Button variant="contained" component="label" size="large" onClick={() => checkout(1)} >Alışverişi tamamla</Button>
            </Box>
        </>
    )
}