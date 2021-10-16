import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {

    const { signInWithGoogle, setIsLoading, handleNameChange, handaleEmailChange, handalePasswordChange, handaleConfirmPasswordChange, createNewUser, setUserName, setError, email, password, confirmPassword, error } = useAuth();

    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirect_uri);
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }


    const handleRegistration = e => {
        e.preventDefault();
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setError('Password must contain Minimum eight characters, at least one letter and one number');
            return;
        }
        else if (password !== confirmPassword) {
            setError("Password doesn't match!")
        }
        else {
            createNewUser(email, password)
                .then(userCredential => {
                    const user = userCredential.user;
                    setUserName();
                    console.log(user);
                    history.push('/login');
                    setError('');
                    alert('Your Accound have been created!')
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode, ":", errorMessage);
                }).finally(() => { setIsLoading(false) });
        }
    }

    return (
        <div style={{ width: '22rem' }} className="container-fluid">
            <p className="text-danger">{error}</p>
            <Card className="mb-5 shadow-lg">
                <Card.Body>
                    <Form onSubmit={handleRegistration}>
                        <h3>Sign Up</h3>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="name" placeholder="Enter Name" required onBlur={handleNameChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Email" required onBlur={handaleEmailChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" required onBlur={handalePasswordChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Control type="password" placeholder="Confirm Password" required onBlur={handaleConfirmPasswordChange} />
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