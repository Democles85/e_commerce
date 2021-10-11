import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useCollapse from 'react-collapsed';
import Carousel from 'react-material-ui-carousel'

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} tittle={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom className={classes.productName}>
                        {product.name}
                    </Typography>
                    <Typography className={classes.productPrice}>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
            </CardContent>
            <CardContent>
                <div>
                    <Button className={classes.expandButton}
                        {...getToggleProps({
                            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                        })}
                    >
                    {isExpanded ? 'Close Description' : 'Product Description'}
                    </Button>
                    <section {...getCollapseProps()}>
                        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
                    </section>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Card" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
};

export default Product;
