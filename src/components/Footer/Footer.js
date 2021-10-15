import React from 'react';
import logo from '../../resources/logo.png'

const Footer = () => {



    return (
        <div className="start-0 bottom-0 w-100 alert-dange">
            <div>

                <footer className="bg-dark text-center text-lg-start text-white">
                    <div className="px-4 pt-2">
                        <div className="row mt-4">
                            <div className="col-lg-7 col-md-6 col-12 mb-4 mb-md-0">
                                <img src={logo} alt="" style={{ width: '10rem' }} />
                            </div>

                            <div className="col-lg-5 col-md-6 col-12 mb-4 mb-md-0 d-lg-flex d-md-flex justify-content-between ">
                            <div>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#!" className="text-white text-decoration-none">About Online Food</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white text-decoration-none">Read Our Blog</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white text-decoration-none">Sign Up to Delivery</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white text-decoration-none">Add Your Restaurant</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#!" className="text-white text-decoration-none">Get Help</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white text-decoration-none">Read FAQs</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white text-decoration-none">View All Cities</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white text-decoration-none">Restaurants Near Me</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-md-6">
                                © 2021 Copyright:
                                <a className="text-white text-decoration-none" href="https://github.com/nmso2"> MD. Nagib Mahfuz Subho</a>
                            </div>
                            <div className="col-lg-4 col-md-6 d-lg-flex d-md-flex justify-content-around">
                                <p>Privacy Policy</p>
                                <p>Terms of Use</p>
                                <p>Pricing</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;