import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import backgroundImg from '../../resources/bannerbackground.png'
import Foods from '../Foods/Foods';
import WhyYouChooseContainer from '../WhyYouChooseContainer/WhyYouChooseContainer';

const Home = ({ children }) => {

    return (
        <div>
            <img className="mb-5 img-fluid" src={backgroundImg} alt="" />
            <InputGroup className="w-25 position-absolute top-50 start-50">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="rounded-pill"
                />
                <Button variant="outline-secondary" id="button-addon2" className="rounded-pill">
                    Button
                </Button>
            </InputGroup>

            <Foods></Foods>

            <WhyYouChooseContainer></WhyYouChooseContainer>

        </div>

    );
};

export default Home;