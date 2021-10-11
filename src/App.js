//Main Imports
import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//imports for Footer
import 'rc-footer/assets/index.css';
import Footer from 'rc-footer';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity);
        
        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, { quantity });

        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    // console.log(cart);

    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={ handleAddCart }/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart}
                            handleUpdateCartQty = { handleUpdateCartQty }
                            handleRemoveFromCart = { handleRemoveFromCart }
                            handleEmptyCart = { handleEmptyCart }
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout
                            cart={cart}
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={errorMessage}
                        />
                    </Route>
                </Switch>  
                <Footer
                    style={{
                        backgroundColor: '#222222',
                        width: '100vw',
                        maxWidth: '100%',
                        position: 'absolute',
                        left: '0',
                        right: '0',
                        color: 'gray',
                        borderRadius: '10px 10px 0 0',
                    }}
                    columns={[{
                        title: 'Support',
                        items: [
                            {
                                title: 'Contact Us',
                                url: 'https://github.com/',
                                style: {
                                    color: 'white'
                                }
                            },
                            {
                                title: 'FAQ',
                                url: 'https://instagram.com',
                                openExternal: true,
                                style: {
                                    color: 'blue',
                                },
                            },
                            {
                                title: 'About Us',
                                url: 'https://www.google.com/maps/place/Rruga+David+Selanicasi,+Vlor%C3%AB,+Albania/@40.4604079,19.4841174,18z/data=!3m1!4b1!4m5!3m4!1s0x134533dd32e5886b:0x8041d384594823a6!8m2!3d40.4605845!4d19.4853525',
                                description: 'Address',
                                openExternal: true,
                                style: {
                                    color: 'gray'
                                }
                            },
                        ],
                    },
                    {
                        title: 'Address',
                        items: [
                            {
                                title: 'Class name',
                                url: 'https://pro.ant.design/',
                                openExternal: true,
                                LinkComponent: 'span',
                                style: {
                                    color: 'white'
                                }
                            },
                            {
                                title: 'Class name',
                                url: 'https://mobile.ant.design/',
                                openExternal: true,
                            },
                            {
                                title: 'Test',
                                url: 'https://kitchen.alipay.com/',
                                description: 'Test Description',
                                style: {
                                    color: 'gray'
                                }
                            },
                        ],
                    },
                    {
                        icon: (
                            <img
                                src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                                alt="more products"
                            />
                        ),
                        title: 'Social Media',
                        items: [
                            {
                                icon: (
                                    <img
                                        src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
                                        alt="twitter"
                                    />
                                ),
                                title: 'Twitter',
                                url: 'https://twitter.com',
                                description: 'Follow Us',
                                openExternal: true,
                                style: {
                                    color: 'gray'
                                }
                            },
                            {
                                icon: (
                                    <img
                                        src="https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg"
                                        alt="instagram"
                                    />
                                ),
                                title: 'Instagram',
                                url: 'https://instagram.com',
                                description: 'Follow Us',
                                openExternal: true,
                                style: {
                                    color: 'gray'
                                }
                            },
                        ],
                    },
                    ]}
                    bottom="Copyright &copy; 2021 - Shoppocles"
                />
            </div>
        </Router>
    )
}

export default App;
