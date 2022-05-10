import { useState,useEffect,useReducer } from "react";
import {Link} from "react-router-dom";
import src from "../../../package.json";

import {data} from "../../data";
import { useSelector,useDispatch } from "react-redux";


import "./feutured.css";


function Feutured(){ 
    const count = useSelector(state => state)
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const totalprice = useSelector(state => state.totalprice);
    const [Addproduct,setAddproduct] =useState({})
    const [show,setshow] =useState("none")
    const allpages = Math.ceil(data.length/12);
    const [heightphone1,setheightphone1] = useState(false);
    const handel1 = () => {
        setheightphone1(!heightphone1);
    }

    const [heightphone2,setheightphone2] = useState(false);
    const handel2 = () => {
        setheightphone2(!heightphone2);
    }

    const [page,setpage] = useState(data.slice(0 , 12));
    const [numpage,setnumpage] = useState(1);
    const changepage = (e) => {
        setpage(data.slice((e*12) - 12, e*12));
        setnumpage(e)
    }   
    
    const add = () => {
        if(numpage < allpages){
            setnumpage(numpage+1)
        }
    }

    const remove = () => {
        if(numpage > 1){
            setnumpage(numpage-1)
        }
    }
    useEffect(() => {
        setpage(data.slice((numpage*12) - 12, numpage*12));
    },[numpage])
    const Add_product = (item) =>{
        setAddproduct(item);
        setshow("block");
        dispatch({ type: "Add_PRODUCT1", item:item })
    }
        const allitems = page.map(item => {
            return(
                <div className="col-xl-3 col-lg-4 col-md-4 col-6 map" key={item.id}>
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
                                <i onClick={()=> Add_product(item)} className="cart fa fa-cart-shopping b"></i>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        const num_pages =[];
        for(var i=1; i<=allpages; i++){
            num_pages.push({id:i});
        }
        const pages = num_pages.map(item => {
            return(
                <span className={item.id === numpage ? "active" :""} onClick={() => changepage(item.id)} key={item.id}>{item.id}</span>
            )
        })
    return(
        <div className="delivery blog feutured">
            {<div className="Add_product" style={{display:show}}>
                <span className="close" onClick={() => setshow("none")}>x</span>
                <h2 className="head">Product successfully added to your shopping cart</h2>
                <hr/>
                <div className="details">
                    <div className="row">
                        <div className="col-12 col-md-6" style={{borderRight:"1px solid #c8c9ca"}}>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <img src={src.homepage+Addproduct.img}/>
                                </div>
                                <div className="col-12 col-md-6">
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
                                    <Link onClick={() => setshow("none")} className="shopping" to="/featured">Continue shopping</Link>
                                    <Link className="checkout" to="/cart">Proceed to checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
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
                                <Link to="/featured"> Featured</Link>
                            </div>
                            <h2 className="head">FEATURED</h2>
                            <div className="row">
                                {allitems}
                                <div className="pages">
                                    <div>
                                        <span onClick={() => remove()}><i className="fa-solid fa-arrow-left-long"></i></span>
                                        {pages}
                                        <span onClick={() => add()}><i className="fa-solid fa-arrow-right-long"></i></span>
                                    </div>
                                    <div>{`Showing ${numpage*12 - 11} - ${(numpage*12 - 12) + page.length} of 4 items`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feutured;