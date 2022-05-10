import { useState } from "react";
import {Link} from "react-router-dom";
import src from "../../../package.json";
import "./about.css";

function About(){
    const [heightphone1,setheightphone1] = useState(false);
    const handel1 = () => {
        setheightphone1(!heightphone1);
    }
    const [heightphone2,setheightphone2] = useState(false);
    const handel2 = () => {
        setheightphone2(!heightphone2);
    }
    return(
        <div className="delivery about">
            <h2>{src.homeoage}</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 d-x-none ">
                        <div className="products">
                            <h2 className="name-product" onClick={()=> handel1()}>NEW PRODUCTS</h2>
                            <div className={"product " + (heightphone1? "add-height" : "")}>
                                <div className="item">
                                    <div className="img">
                                        <img src={src.homepage+"images/small1.jpg"} alt="no"/>
                                    </div>
                                    <div className="content">
                                        <h6>Voluptas assume nostrum...</h6>
                                        <div className="price">
                                            <span className="discount">€94.00</span>
                                            <span className="end">€85.00</span>
                                        </div>
                                        <div className="star-x">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                <div className="img">
                                    <img src={src.homepage+"images/small2.jpg"} alt="no"/>
                                </div>
                                <div className="content">
                                    <h6>Occasion repeat predefine...</h6>
                                    <div className="price">
                                        <span className="end">€99.00</span>
                                    </div>
                                    <div className="star-y">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img">
                                    <img src={src.homepage+"images/small3.jpg"} alt="no"/>
                                </div>
                                <div className="content">
                                    <h6>Occasion praesentium...</h6>
                                    <div className="price">
                                        <span className="discount">€91.00</span>
                                        <span className="end">€86.55</span>
                                    </div>
                                    <div className="star-x">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <img  className="nnn" src={src.homepage+"images/left-banner-1.jpg"} alt="ff"/>
                        <div className="products blog">
                            <h2 className="name-product" onClick={()=> handel2()}>BLOG CATEGORIES</h2>
                            <div className={"product " + (heightphone2? "add-height" : "")}>
                                <div className="item">
                                    <div className="content">
                                        <h6>Vestibulum consequat</h6>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="content">
                                        <h6>Pellentesque condimentum </h6>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="content">
                                        <h6>Suspendisse turpis</h6>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9">
                        <div className="content">
                            <div className="link">
                                <Link to="/home">Home</Link> |
                                <Link to="/about"> About Us</Link>
                            </div>
                            <h2 className="head">About Us</h2>
                            <div className="info">
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <div className="info1">
                                            <h2>Our company</h2>
                                            <strong className="dark">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididun.</strong>
                                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.</p>
                                            <p>Top quality products <br/>
                                                Best customer service <br/>
                                                30-days money back guarantee <br/>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="info2">
                                            <h2>Our team</h2>
                                            <div className="img"></div>
                                            <p className="one"> <strong className="dark">Lorem set sint occaecat cupidatat non </strong><br/>
                                                Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="info1">
                                            <h2>Testimonials</h2>
                                            <p>“Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.”
                                                <br/><strong className="dark">Lorem ipsum dolor sit</strong><br/>

                                                “Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod.”
                                                <strong className="dark">Ipsum dolor sit</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;