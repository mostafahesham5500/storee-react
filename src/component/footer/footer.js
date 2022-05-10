import "./footer.css";
function Footer(){
    return(
        <div className="footer">
            <div className="icons">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-3 all">
                            <div className="info">
                                <i className="fa fa-dollar"></i>
                                <h2>14-DAY MONEY BACK</h2>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 all">
                            <div className="info">
                            <i className="fa fa-plane"></i>
                                <h2>FAST FREE SHIPMENT</h2>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 all">
                            <div className="info">
                                <i className="fa fa-thumbs-up"></i>
                                <h2>MONEY BACK GUARENTEE</h2>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 all">
                            <div className="info">
                                <i className="fa fa-thumbs-up"></i>
                                <h2>SAVE 20% WHEN YOU</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="contact">
                                <h2>STORE INFORMATION</h2>
                                <ul>
                                    <li>Elocart - Furniture Store</li>
                                    <li>507-Union Trade ipsum</li>
                                    <li>Call Us: 000-000-0000</li>
                                    <li>sales@yourcompany.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="contact">
                                <h2>PRODUCTS</h2>
                                <ul>
                                    <li>Prices drop</li>
                                    <li>New products</li>
                                    <li>Best sales</li>
                                    <li>Contact us</li>
                                    <li>Sitemap</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="contact">
                                <h2>OUR COMPANY</h2>
                                <ul>
                                    <li>Delivery</li>
                                    <li>Legal Notice</li>
                                    <li>Terms and conditions of use</li>
                                    <li>About us</li>
                                    <li>Secure payment</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="contact">
                                <h2>SUBSCRIBE NOW</h2>
                                <ul>
                                    <li>Subscribe our newsletter get 10% off your first update.</li>
                                    <li>
                                        <div className="title">
                                            <input placeholder="Your Email Address"/>
                                            <span className="icon"> 
                                                <i className="fa fa-magnifying-glass"></i>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="social">
                                        <i className="fa-brands fa-facebook-f"></i>
                                        <i className="fa-brands fa-twitter"></i>
                                        <i className="fa-brands fa-youtube"></i>
                                        <i className="fa-brands fa-instagram"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="end">
                <div className="container">
                    <h2>© 2022 - Ecommerce software by MostafaHesham</h2>
                </div>
            </div>
        </div>
    )
}
export default Footer;