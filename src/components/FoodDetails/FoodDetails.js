import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const FoodDetails = (props) => {

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    const { id } = useParams();

    const displayFood = props.foods.filter(food => food.id === parseInt(id));
    return (
        <div className="px-5">
            <Row xs={1} md={2} lg={2} className="g-5 px-5 mx-5 mx-auto container align-items-center">

                <div>
                <h2>{displayFood[0]?.name}</h2>
                <p className="m-0">{displayFood[0]?.detail}</p>
                <p className="mb-3">{displayFood[0]?.price}</p>
                <Button type="submit" style={{ background: 'crimson', border: "none" }} onClick={() => props.handleAddToCart(displayFood[0])}>{cartIcon} Add</Button>
                </div>
                <img src={displayFood[0]?.img} alt="" />

            </Row>
        </div>
    );
};

export default FoodDetails;