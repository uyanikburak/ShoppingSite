import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Grid } from "@mui/material";

import Button from '@mui/material/Button';



export default function ProductsComponent() {
    let { categoryId } = useParams();

    let urlList = `http://localhost:8080/products/${categoryId}`;
    let [productList, setProductList] = useState([]);

    let navigate = useNavigate();

    function detailPage(product) {
        navigate('/product/' + product.productId)
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
                setProductList(json);
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
            <Grid container spacing={4}>
                {productList.map(product =>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            title={product.productName}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={"/img/product/" + product.imagePath}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing align>
                            <Stack direction="row" alignItems="center">
                                <Button variant="contained" component="label" size="large" onClick={() => detailPage(product)} >Ürün Detayları</Button>
                            </Stack>
                        </CardActions>
                    </Card>)}
            </Grid>
        </>

    );
}




