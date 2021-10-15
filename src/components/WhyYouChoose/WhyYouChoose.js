import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './WhyYouChoose.css'

const WhyYouChoose = ({children}) => {
    return (
        <div>
            <p></p>
            <Col>
                <Card className="rounded-5 border-0 cards-hover">
                    {children}
                </Card>
            </Col>
        </div>
    );
};

export default WhyYouChoose;