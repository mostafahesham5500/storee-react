import React ,{useEffect,useState}from "react";
import Slider from "react-slick";
import { useSelector,useDispatch } from "react-redux";
import src from "../../../package.json";


import {data,categorys,brands,page} from "../../data";
import{settings1,settings2,settings3,settings4} from "./slides";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
    const state = useSelector(state => state)
    const totalprice = useSelector(state => state.totalprice);

    const dispatch = useDispatch();
    const [category,setcategory] =useState(categorys)
    const [Addproduct,setAddproduct] =useState({})
    const [show,setshow] =useState("none")
    useEffect(()=>{
        document.querySelector(".slick-arrow").innerHTML = "";
        document.querySelector(".slick-next").innerHTML = "";
    },[])
    const Add_product = (item) =>{
        setAddproduct(item);
        setshow("block");
        dispatch({ type: "Add_PRODUCT1", item:item })
    }
    const allitems = data.map(item => {
        return(
            <div className="map" key={item.id}>
                <div className="item">
                    <div className="img">
                        <img src={src.homepage+item.img} alt="no"/>
                    </div>
                    <hr/>
                    <div className="content">
                        <h6>{item.head}</h6>
                        <div className="price">
                        {item.price1 ? <span className="discount">€{item.price1}</span> : ""}
                            <span className="end">€{item.price2}</span>
                        </div>
                        <div className="star-x">
                            {item.star.map((st,index) => {
                                return(
                                    <i key={index} className={st}></i>
                                )
                            })}
                            {/* dispatch({ type: "Add_PRODUCT1", item:item }) */}
                            <i onClick={()=> Add_product(item)}  className="cart fa fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    const onMouseOver = (id) => {
        const newcategory = category.filter(item =>{
            if(item.id == id){ 
                item.state = true
            }
            return item
        })
        setcategory(newcategory)
    }
    const onMouseOut = () => {
        const newcategory = category.filter(item =>{
            item.state = false
            return item
        })
        setcategory(newcategory)
    }
    const allcategory = category.map(item =>{
        return (
            <div onMouseOver={() => onMouseOver(item.id)} onMouseOut={() => onMouseOut()} className="map" key={item.id}>
                <div className="item">
                    <img src={src.homepage+item.img} alt="no"/>
                </div>
                <h3 >{(item.state == false)? item.text:"VIEW MORE"}</h3>
            </div>
        )
    })

    const allitems2 = page.map(item => {
        return(
            <div key={item.id} className="col-12">
                <div className="info">
                    <div className="img">
                        <img src={src.homepage+item.img} alt=""/>
                    </div>
                    <div className="content">
                        <span>{item.time}</span>
                        <h6>{item.head}</h6>
                        <p>{item.title}</p>
                    </div>
                </div>
            </div>
        )
    })

    const allbrands = brands.map(item => {
        return(
            <div key={item.id} className="col-12">
                <div className="info">
                    <div className="img">
                        <img src={src.homepage+item.img} alt=""/>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="home">
            {<div className="Add_product" style={{display:show}}>
                <span className="close" onClick={() => setshow("none")}>x</span>
                <h2 className="head">Product successfully added to your shopping cart</h2>
                <hr/>
                <div className="details">
                    <div className="row">
                        <div className="col-12 col-md-6" style={{borderRight:"1px solid #c8c9ca"}}>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <img src={src.homepage+Addproduct.img}/>
                                </div>
                                <div className="col-md-6 col-12">
                                    <p className="titl">{Addproduct.head}</p>
                                    <p className="price">€{Addproduct.price2}</p>
                                    <h5>Size: S</h5>
                                    <h5>Color: red</h5>
                                    <h5>Quantity: 2</h5>                            
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="cart-content">
                                <h4>There are {state.product.length} items in your cart.</h4>
                                <hr/>
                                <p><span className="lable">Subtotal:</span><span className="value">€{totalprice.toFixed(2)}</span></p>
                                <p><span className="lable">Shipping:</span><span className="value">Free</span></p>
                                <p><span className="lable">Total (tax incl.) </span><span className="value">€{totalprice.toFixed(2)}</span></p>
                                <div className="cart-content-btn">
                                    <Link onClick={() => setshow("none")} className="shopping" to="/home">Continue shopping</Link>
                                    <Link className="checkout" to="/cart">Proceed to checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <Slider {...settings1} className="head">
                <div className="slide-1">
                </div>
                <div className="slide-2">
                </div>
            </Slider>
            <section className="subbanners">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <img src={src.homepage+"images/sub-banner-1.jpg"} alt=""/>
                        </div>
                        <div className="col-md-6 col-12">
                            <img src={src.homepage+"images/sub-banner-1.jpg"} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="slide3">
                <div className="container">
                    <div className="row">
                        <h2>SHOP BY CATEGORIES</h2>
                        <Slider {...settings2}>
                            {allitems}
                        </Slider>
                    </div>
                </div>
            </section>

            <section className="slide2">
                <div className="container">
                    <div className="row">
                        <h2>FEATURED PRODUCTS</h2>
                        <Slider {...settings2}>
                            {allitems}
                        </Slider>
                    </div>
                </div>
            </section>

            <section className="slide2 slide3">
                <div className="container">
                    <div className="row">
                        <h2>SHOP BY CATEGORIES</h2>
                        <Slider {...settings2}>
                            {allcategory}
                        </Slider>
                    </div>
                </div>
            </section>

            <section className="banners">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="cmsbanner">
                                <a className="banner-anchor" href="#">
                                    <img src={src.homepage+"images/banner-1.jpg"}/>
                                </a>
                                <div className="banner-detail">
                                    <div className="offer-title">10% discount</div>
                                    <div className="main-title">Meryl Lounge <span>Chair</span></div>
                                    <div className="shopnow"><a href="#">Shop Now</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="cmsbanner">
                                <a className="banner-anchor" href="#"><img src={src.homepage+"images/banner-2.jpg"}/></a>
                                <div className="banner-detail">
                                    <div className="offer-title">20% discount</div>
                                    <div className="main-title">Eclipse Smart <span>Lamp</span></div>
                                    <div className="shopnow"><a href="#">Shop Now</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="cmsbanner">
                                <a className="banner-anchor" href="#"><img src={src.homepage+"images/banner-3.jpg"}/></a>
                                <div className="banner-detail">
                                    <div className="offer-title">10% discount</div>
                                    <div className="main-title">Wood Garden <span>Table</span></div>
                                    <div className="shopnow"><a href="#">Shop Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="slide2">
                <div className="container">
                    <div className="row">
                        <h2>SPECIAL PRODUCTS</h2>
                        <Slider {...settings2}>
                            {allitems}
                        </Slider>
                    </div>
                </div>
            </section>

            <div className="delivery blog">
                <div className="container">
                    <div className="row">
                            <div className="content">
                                <h2 className="head">LATEST BLOGS</h2>
                                <div className="row">
                                    <Slider {...settings3}>
                                        {allitems2}
                                    </Slider>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div  className="brands">
                <div className="container">
                    <div className="row">
                        <Slider {...settings4}>
                            {allbrands}
                        </Slider>
                    </div>
                </div>
            </div>


        </div >
        
    );
}
export default Home;