import { useState } from "react";
import {Link} from "react-router-dom";
import src from "../../../package.json";
import "./delivery.css";
function Delivery(){
    const [heightphone1,setheightphone1] = useState(false);
    const handel1 = () => {
        setheightphone1(!heightphone1);
    }
    const [heightphone2,setheightphone2] = useState(false);
    const handel2 = () => {
        setheightphone2(!heightphone2);
    }
    return(
        <div className="delivery">
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
                        <img className="nnn" src={src.homepage+"images/left-banner-1.jpg"} alt="ff"/>
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
                                <Link to="/delivery"> Delivery</Link>
                            </div>
                            <h2 className="head">DELIVERY</h2>
                            <div className="info">
                                <h2>Shipments and returns</h2>
                                <h3>Your pack shipment</h3>
                                <p className="one">Packages are generally dispatched within 2 days after 
                                    receipt of payment and are shipped via UPS with tracking and drop-off 
                                    without signature. If you prefer delivery by UPS Extra with required 
                                    signature, an additional cost will be applied, so please contact us 
                                    before choosing this method. Whichever shipment choice you make, we will 
                                    provide you with a link to track your package online.
                                </p>
                                <p className="two">Shipping fees include handling and packing fees as well
                                    as postage costs. Handling fees are fixed, whereas transport fees vary according
                                    to total weight of the shipment. We advise you to group your items in one order. 
                                    We cannot group two distinct orders placed separately, and shipping fees will apply
                                    to each of them. Your package will be dispatched at your own risk, but special care
                                    is taken to protect fragile objects.
                                </p>
                                <p className="there">Boxes are amply sized and your items are well-protected.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Delivery;