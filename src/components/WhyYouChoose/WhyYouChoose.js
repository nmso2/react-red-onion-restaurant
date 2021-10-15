import { faArrowAltCircleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './WhyYouChoose.css'

const WhyYouChoose = ({children}) => {
    console.log(children);
    return (
        <div>
            <Col>
                <Card className="rounded-5 border-0 cards-hover">
                    {children}
                </Card>
            </Col>
        </div>
    );
};

export default WhyYouChoose;