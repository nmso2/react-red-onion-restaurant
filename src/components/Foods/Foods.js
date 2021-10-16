import React, { useEffect, useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Food from '../Food/Food';
import FoodDetails from '../FoodDetails/FoodDetails';
import './Foods.css'

const Foods = () => {


    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('https://nmso2.github.io/fake-data-json/data/foods.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, []);

    useEffect(() => {
        if (foods.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const id in savedCart) {
                const addedProduct = foods.find(food => food.id === id);
                if (addedProduct) {
                    const quantity = savedCart[id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [foods])


    const handleAddToCart = (food) => {
        setCart([...cart, food]);
        addToDb(food.id);
    }

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
                        </Route>
                        <Route exact path="/home/breakfast">
                            <Row xs={1} md={2} lg={3} className="g-5 p-5 mx-auto container">
                                {
                                    foods.filter(food => food.category === 'breakfast').map(food => <Food key={food.id} food={food} ></Food>
                                    )
                                }
                            </Row>
                        </Route>
                        <Route path="/home/lunch">
                            <Row xs={1} md={2} lg={3} className="g-5 p-5 mx-auto container">
                                {
                                    foods.filter(food => food.category === 'lunch').map(food => <Food key={food.id} food={food} ></Food>
                                    )
                                }
                            </Row>
                        </Route>
                        <Route path="/home/dinner">
                            <Row xs={1} md={2} lg={3} className="g-5 p-5 mx-auto container">
                                {
                                    foods.filter(food => food.category === 'dinner').map(food => <Food key={food.id} food={food} ></Food>
                                    )
                                }
                            </Row>
                        </Route>
                        <Route path="/home/foods/:id">
                                <FoodDetails foods={foods} handleAddToCart={handleAddToCart}></FoodDetails>
                        </Route>
                    </Switch>
                    <Button variant="warning">Checkout! Your Food</Button>
            </BrowserRouter>
        </div >
    );
};

export default Foods;