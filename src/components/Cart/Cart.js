import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useFoods from '../../hooks/useFoods';
import OrderedFood from '../OrderedFood/OrderedFood';

const Cart = (props) => {

    const orderedFoodsId = Object.keys(props.cart);



    const [foods, setFoods] = useFoods();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        console.log(data);
    }


    const orderedFoods = orderedFoodsId.map(ids => foods.filter(food => food.id === parseInt(ids)));

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 container-fluid row">

                <div className="col-lg-6 col-md-6 col-12 px-5">
                    <h4 className="text-start fs-4">Edit Delivery details</h4>
                    <hr />
                    <Form.Group className="mb-3" controlId="formBasicEmail"  >
                        <Form.Control type="email" defaultValue={user.email} {...register("email", { required: true })} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName"  >
                        <Form.Control type="text" defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTel"  >
                        <Form.Control type="tel" {...register("phone", { required: true })} placeholder="Enter phone number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress"  >
                        <Form.Control type="address" {...register("address", { required: true })} placeholder="Enter address" />
                    </Form.Group>


                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                <div className="col-lg-6 col-md-6 col-12 px-5">
                    <h4 className="text-start fs-4">Order details</h4>
                    <hr />

                    {
                        orderedFoods.map(orderedFood => <OrderedFood orderedFood={orderedFood[0]} cart={props.cart}></OrderedFood>)
                    }

                    <Button type="submit" variant="warning" className="w-25">Confirm</Button>
                </div>
            </Form>
        </div>
    );
};

export default Cart;