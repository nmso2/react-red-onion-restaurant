import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import './FoodDetails.css'

const FoodDetails = (props) => {

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const plus = <FontAwesomeIcon icon={faPlus} />
    const minus = <FontAwesomeIcon icon={faMinus} />

    const { id } = useParams();

    const displayFood = props.foods.filter(food => food.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(displayFood[0]?.price);


    const handlePrice = () => {
        setPrice((quantity * displayFood[0]?.price).toFixed(2))
    }

    const handleIncrease = () => {
        setQuantity(parseInt(quantity) + 1);
        handlePrice();
    }
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(parseInt(quantity) - 1);
            handlePrice();
        }
    }
    const handleQuantity = (e) => {
        setQuantity(parseInt(e.target.value));
        console.log(e.target.value);
    }



    console.log(quantity, price);

    return (
        <div className="px-5">
            <Row xs={1} md={2} lg={2} className="g-5 px-5 mx-5 mx-auto container align-items-center flex-column-reverse flex-lg-row flex-md-row">

                <div>
                    <h2>{displayFood[0]?.name}</h2>
                    <p className="m-0">{displayFood[0]?.detail}</p>
                    <p className="mb-3 fs-2 text-danger">${price ? price : displayFood[0]?.price}</p>


                    <div className="d-flex align-content-center justify-content-center mb-3">
                        <button className="border-0 bg-transparent button-hover" onClick={handleDecrease}>{minus}</button>

                        <input className="mx-2 text-center form-control" style={{ width: "4rem" }} type="number" min="1" value={quantity} onBlur={handleQuantity} />

                        <button className="border-0 bg-transparent button-hover" onClick={handleIncrease}>{plus}</button>
                    </div>

                    <Button type="submit" style={{ background: 'crimson', border: "none" }} onClick={() => props.handleAddToCart(displayFood[0], quantity)}>{cartIcon} Add</Button>
                </div>
                <img src={displayFood[0]?.img} alt="" />

            </Row>
        </div>
    );
};

export default FoodDetails;