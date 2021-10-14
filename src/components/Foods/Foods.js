import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Food from '../Food/Food';
import './Foods.css'

const Foods = () => {


    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://nmso2.github.io/fake-data-json/data/foods.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, []);

    return (
        <div>
            <BrowserRouter>
                <div>
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
                    </Switch>
                </div>
            </BrowserRouter>
        </div >
    );
};

export default Foods;