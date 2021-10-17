import React, { useEffect, useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useFoods from '../../hooks/useFoods';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import FoodDetails from '../FoodDetails/FoodDetails';
import './Foods.css'

const Foods = () => {


    const [foods, setFoods] = useFoods();
    const [cart, setCart] = useCart(foods);


    const handleAddToCart = (food, quantity) => {
        setCart([...cart, food]);
        addToDb(food.id, quantity);
        alert('Added to cart')
    }


    const storedCart = getStoredCart();
    console.log(storedCart);

    return (
        <div>
            <BrowserRouter>
                <div className="d-flex justify-content-center">
                    <Link className="mx-2 text-decoration-none link-hover" to="/home/breakfast">Breakfast</Link>
                    <Link className="mx-2 text-decoration-none link-hover" to="/home/lunch">Lunch</Link>
                    <Link className="mx-2 text-decoration-none link-hover" to="/home/dinner">Dinner</Link>
                </div>

                <Switch>
                    <Route exact path="/">
                        <Row xs={1} md={2} lg={3} className="g-5 p-5 mx-auto container">
                            {
                                foods.filter(food => food.category === 'breakfast').map(food => <Food key={food.id} food={food} ></Food>
                                )
                            }
                        </Row>
                        <Link className="text-decoration-none" to="/home/checkorder"><Button className="mt-3" variant="warning" >Checkout! Your Food</Button></Link>
                    </Route>
                    <Route exact path="/home/breakfast">
                        <Row xs={1} md={2} lg={3} className="g-5 p-5 mx-auto container">
                            {
                                foods.filter(food => food.category === 'breakfast').map(food => <Food key={food.id} food={food} ></Food>
                                )
                            }
                        </Row>
                        <Link className="text-decoration-none" to="/home/checkorder"><Button className="mt-3" variant="warning" >Checkout! Your Food</Button></Link>
                    </Route>
                    <Route path="/home/lunch">
                        <Row xs={1} md={2} lg={3} className="g-5 p-5 mx-auto container">
                            {
                                foods.filter(food => food.category === 'lunch').map(food => <Food key={food.id} food={food} ></Food>
                                )
                            }
                        </Row>
                        <Link className="text-decoration-none" to="/home/checkorder"><Button className="mt-3" variant="warning" >Checkout! Your Food</Button></Link>
                    </Route>
                    <Route path="/home/dinner">
                        <Row xs={1} md={2} lg={3} className="g-5 p-5 mx-auto container">
                            {
                                foods.filter(food => food.category === 'dinner').map(food => <Food key={food.id} food={food} ></Food>
                                )
                            }
                        </Row>
                        <Link className="text-decoration-none" to="/home/checkorder"><Button className="mt-3" variant="warning" >Checkout! Your Food</Button></Link>
                    </Route>
                    <Route path="/home/foods/:id">
                        <FoodDetails foods={foods} handleAddToCart={handleAddToCart}></FoodDetails>
                    </Route>
                    <Route path="/home/checkorder">
                        <Cart cart={storedCart}></Cart>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div >
    );
};

export default Foods;