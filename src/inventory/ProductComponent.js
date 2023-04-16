import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button';



export default function ProductComponent() {
    let { productId } = useParams();
    let urlList = `http://localhost:8080/product/${productId}`;
    let [product, setProduct] = useState([]);

    const itemCount = useSelector(state => state.itemCount)
    const dispatch = useDispatch();

    const quantityIncremented = () => {
        dispatch({ type: 'ADD_ITEM' })
    }



    function addToCard (product) {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'bla bla added' })
        };
        fetch(`http://localhost:8080/cart/add/${1}/${product.productId}`, requestOptions)
            .then(response => {
                //handle response            
                console.log(response);
            })
            .then(data => {
                //handle data
                console.log(data);
                quantityIncremented();
                alert('sepete eklendi');
                
            })
            .catch(error => {
                console.log(error);
            });
    };
    
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
                setProduct(json);
            }
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);;

        // cancel any future `setData`
        return () => isSubscribed = false;
    }, [urlList])

    console.log(product)



    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={product.productName}
            />
            <CardMedia
                component="img"
                height="194"
                image={"/img/product/" + product.imagePath}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Best Compact
                </Typography>
            </CardContent>
            <CardActions disableSpacing align>
                <Stack direction="row" alignItems="center">
                    <Button variant="contained" component="label" size="large" onClick={()=>addToCard(product)} >Sepete Ekle</Button>
                </Stack>
            </CardActions>
        </Card>
    );
}




