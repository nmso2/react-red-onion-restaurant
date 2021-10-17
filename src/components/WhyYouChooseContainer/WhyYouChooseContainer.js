import WhyYouChoose from '../WhyYouChoose/WhyYouChoose';
import img1 from '../../resources/Image/adult-blur-blurred-background-687824.png'
import img2 from '../../resources/Image/chef-cook-food-33614.png'
import img3 from '../../resources/Image/architecture-building-city-2047397.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBell, faBus, faTruck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card, Row } from 'react-bootstrap';

const WhyYouChooseContainer = () => {


    const bus = <FontAwesomeIcon icon={faBus} style={{ background: "crimson", color: "white", padding: "10px", width: '45px', height: '45px', borderRadius: "50%" }} />

    const bell = <FontAwesomeIcon icon={faBell} style={{ background: "crimson", color: "white", padding: "10px", width: '45px', height: '45px', borderRadius: "50%" }} />

    const truck = <FontAwesomeIcon icon={faTruck} style={{ background: "crimson", color: "white", padding: "10px", width: '45px', height: '45px', borderRadius: "50%" }} />

    const arrowRight = <FontAwesomeIcon icon={faArrowRight} style={{ background: "cornflowerblue", color: "white", fontSize: "20px", padding: "2px", width: '15px', height: '15px', borderRadius: "50%" }} />

    return (
        <div className="mb-5">

            <div className="text-start container px-lg-5 pt-5 mx-auto row-cols-lg-2">
            <h2>Why you choose us</h2>
            <p>Barton waited twenty always repair in within we de. An delighted offending curiosity my is dashwood at. Boy prosperous increasing surronded.</p>
            </div>

            <Row xs={1} md={2} lg={3} className="g-5 px-5 mx-auto container">
                <WhyYouChoose>
                    <Card.Img variant="top" src={img1} />
                    <div className="d-flex px-lg-3">
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
                    <div className="d-flex px-lg-3">
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
                    <div className="d-flex px-lg-3">
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

export default WhyYouChooseContainer;