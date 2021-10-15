import React from 'react';
import { FormControl, InputGroup, Button, Row, Card } from 'react-bootstrap';
import backgroundImg from '../../resources/bannerbackground.png'
import Foods from '../Foods/Foods';
import WhyYouChoose from '../WhyYouChoose/WhyYouChoose';
import img1 from '../../resources/Image/adult-blur-blurred-background-687824.png'
import img2 from '../../resources/Image/chef-cook-food-33614.png'
import img3 from '../../resources/Image/architecture-building-city-2047397.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBell, faBus, faTruck, faTruckPickup } from '@fortawesome/free-solid-svg-icons';

const Home = ({ children }) => {
    const bus = <FontAwesomeIcon icon={faBus} style={{ background: "crimson", color: "white", padding: "10px",width: '45px', height: '45px', borderRadius: "50%"}} />

    const bell = <FontAwesomeIcon icon={faBell} style={{ background: "crimson", color: "white", padding: "10px",width: '45px', height: '45px', borderRadius: "50%"}} />

    const truck = <FontAwesomeIcon icon={faTruck} style={{ background: "crimson", color: "white", padding: "10px",width: '45px', height: '45px', borderRadius: "50%"}} />

    const arrowRight = <FontAwesomeIcon icon={faArrowRight} style={{ background: "cornflowerblue", color: "white", fontSize: "20px", padding: "2px", width: '15px', height: '15px', borderRadius: "50%"}} />

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

            <Button variant="warning">Checkout! Your Food</Button>


            <Row xs={1} md={2} lg={3} className="g-5 p-5 mx-auto container">
                <WhyYouChoose>
                    <Card.Img variant="top" src={img1} />
                    <div className="d-flex px-3">
                        <p className="py-2">{bus}</p>
                        <Card.Body className="text-start">
                            <Card.Title className="p-0 m-0">Fast Delivery</Card.Title>
                            <Card.Text>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis aperiam temporibus a nulla repellat commodi facere ducimus, maxime alias. Earum, laudantium reiciendis soluta ad doloremque vero quis. Ad, eligendi.</p>
                            </Card.Text>
                            <a href="/" className="text-decoration-none">See more {arrowRight}</a>
                        </Card.Body>
                    </div>

                </WhyYouChoose>
                <WhyYouChoose>
                    <Card.Img variant="top" src={img2} />
                    <div className="d-flex px-3">
                        <p className="py-2">{bell}</p>
                        <Card.Body className="text-start">
                            <Card.Title className="p-0 m-0">Fast Delivery</Card.Title>
                            <Card.Text>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis aperiam temporibus a nulla repellat commodi facere ducimus, maxime alias. Earum, laudantium reiciendis soluta ad doloremque vero quis. Ad, eligendi.</p>
                            </Card.Text>
                            <a href="/" className="text-decoration-none">See more {arrowRight}</a>
                        </Card.Body>
                    </div>
                </WhyYouChoose>
                <WhyYouChoose>
                    <Card.Img variant="top" src={img3} />
                    <div className="d-flex px-3">
                        <p className="py-2">{truck}</p>
                        <Card.Body className="text-start">
                            <Card.Title className="p-0 m-0">Fast Delivery</Card.Title>
                            <Card.Text>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veritatis aperiam temporibus a nulla repellat commodi facere ducimus, maxime alias. Earum, laudantium reiciendis soluta ad doloremque vero quis. Ad, eligendi.</p>
                            </Card.Text>
                            <a href="/" className="text-decoration-none">See more {arrowRight}</a>
                        </Card.Body>
                    </div>
                </WhyYouChoose>
            </Row>
        </div>

    );
};

export default Home;