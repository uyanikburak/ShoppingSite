import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from '@mui/material';
import CartCheckout from './CartCheckout';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

export default function CartDetail() {

    let { cartId } = useParams();
    let urlList = `http://localhost:8080/cart/get/${cartId}`;
    let [cart, setCart] = useState([]);
    let [count, setCount] = useState(0);

    // const itemCount = useSelector(state => state.quantity)
    // const dispatch = useDispatch();

    // const quantityDecreased= () => {
    //     dispatch({ type: 'DELETE_ITEM' })
    // }

    const element = document.querySelector('#delete-request .status');

    async function deleteProduct(product) {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return fetch(`http://localhost:8080/cart/remove/${1}/${product.productId}`, requestOptions)
            .then(response => {
                console.log('Item deleted successfully.');
                setCount(count + 1);
                //quantityDecreased();
            }
            )
            .catch(error => console.error(error));
    }


    useEffect(() => {
        let isSubscribed = true;

        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const data = await fetch(urlList);
            // convert the data to json
            const json = await data.json();

            // set state with the result if `isSubscribed` is true
            if (isSubscribed) {
                setCart(json);
            }
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);;

        // cancel any future `setData`
        return () => isSubscribed = false;
    }, [urlList, count])

    return (
        <>
            <div>
                <div> Sepet numarası: {cartId} </div>
                Ürün numaraları:
                {cart.map(item =>
                    <li>
                        Seçilen Ürün : {item.productId}   Ürün Adeti:{item.salesQuantity} <Button variant="contained" component="label" size="large" onClick={() => deleteProduct(item)} >Sil</Button>
                    </li>)}
                <br>
                </br>
                <br></br>
                <Link to="/cartCheckout/1">
                    <Button variant="contained" component="label" size="large"> Ödeme Ekranı </Button>
                </Link>
            </div>
        </>
    )
}