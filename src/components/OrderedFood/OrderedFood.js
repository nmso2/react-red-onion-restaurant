import React from 'react';

const OrderedFood = (props) => {
    console.log(props.orderedFood);
    console.log(props.cart);

    const orderedFoodsId = Object.keys(props.cart);

    console.log(orderedFoodsId.map(foodId=>parseInt(foodId)===props.orderedFood?.id));
    props.cart.hasOwnProperty(props.orderedFood?.id);

    return (
        <div>
            <h4>{props.orderedFood?.name}</h4>
            <p>Price: {props.orderedFood?.price}</p>
            <p>Quantity: {orderedFoodsId.map(foodId=>parseInt(foodId)===props.orderedFood?.id?props.cart[foodId]:'')}</p>
            <hr />
        </div>
    );
};

export default OrderedFood;