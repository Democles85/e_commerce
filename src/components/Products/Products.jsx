import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from './style';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-8a39d2ed-c6f8-4183-93a9-69cf4dbd0cb8/react-miler-womens-running-shoe-0mgX0d.jpg'},
    { id: 2, name: "iPhone 13", description: 'Apple\'s latest addition to their useless phone lineup.', price: '$10', image: 'https://media.wired.com/photos/6140f6eea755c6a4b550bae8/master/pass/Gear-Apple_iphone13_hero_09142021.jpg'},
];

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
        ))}
        </Grid>
    </main>  
    )
}

export default Products;