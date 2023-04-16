import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';


export default function CartSummary() {

    let { cartId } = useParams();

    let urlList = `http://localhost:8080/cart/get/${cartId}`;
    let [cart, setCart] = useState([{}]);

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
    }, [urlList])

    return (
        <>
            <div>
            <div> Sepet numarası: {cartId} </div>
                Ürün numaraları: 
                {cart.map(item =>
                    <li>
                        {item.productId}
                    </li>)}
            </div>
            <Link to= {`/cartDetail/${cartId}`}>
                    <Button variant="contained" component="label" size="large"> Detay sayfası</Button>
                </Link>

        </>
    )
}