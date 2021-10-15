import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
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
                        <h3>Log In</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Button type="submit" className="btn btn-primary btn-block" style={{ background: 'crimson', border: "none" }}>Log In</Button>
                        </Form.Group>


                        <p className="mt-0 mb-0 p-0">
                            New to <span style={{ color: 'red' }}>Red</span> Onion? Create <Link to='/signup'>Account.</Link>
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

export default Login;