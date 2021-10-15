import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {

    const { signInWithGoogle, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirect_uri);
            }).catch((error) => {

            }).finally(() => setIsLoading(false));
    }

    return (
        <div style={{ width: '22rem' }} className="container-fluid">
            <Card className="mb-5 shadow-lg">
                <Card.Body>
                    <Form>
                        <h3>Sign Up</h3>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="name" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Button type="submit" style={{ background: 'crimson', border: "none" }}>Sign Up</Button>
                        </Form.Group>


                        <p className="mt-0 mb-0 p-0">
                            Already have an account? <Link to='/login'>Login.</Link>
                        </p>
                        <p className="mt-0 mb-0 p-0">
                            or <br />
                            Log In with <Button variant="outline-primary" onClick={handleGoogleLogIn}>Google</Button>
                        </p>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SignUp;