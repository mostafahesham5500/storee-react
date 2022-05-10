import "./logo.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";
import src from "../../../package.json";

function Logo(){
    const [height,setheight] = useState(0);
    const [isActive, setActive] = useState(false);
    const [i, seti] = useState(false);
    const dispatch = useDispatch();
    var fix = false,anmation=false;
    const handel = e =>{
        setheight(window.scrollY);
    }
    const toggle = () => {
        setActive(!isActive);
    }
    
    window.addEventListener('scroll',handel);
    document.querySelector("body").onclick = () => {seti(!i) }
    if(height >= 200){
        fix = true;
    }else{
        fix = false;
    }
    
    if(height >= 250){
        anmation = true;
    }else{
        anmation = false;
    }
    
    const totalprice = useSelector(state => state.totalprice);
    const state = useSelector(state => state);
    const remove = (id) => {
        dispatch({type:"REMOVE",id:id})
        seti(!i)
        if(state.product.length == 0){
            setActive(!isActive);
        }
    }

    const ProductActive = state.product.map(item => {
        return(
            <div key={item.id} className="cart-item">
                <div className="cart-image">
                    <img src={src.homepage+item.img}/>
                </div>
                <div className="cart-info">
                    <span onClick={() => remove(item.id)} className="remove"><i className="fas fa-trash"></i></span>
                    <span className="product-quantity">{item.quantity}</span>
                    <span className="product-name">{item.head}</span>
                    <span className="product-price">€{item.price2}</span>
                </div>
            </div>
        )
    })
    
    return(
        <div className={"logo " +  (fix ? "fixed " : "") + (anmation ? "anmation " : "")}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="img-logo col-3">
                        <img src={src.homepage+"images/logo1.jpg"} alt=""/>
                    </div>
                    <div className="contact n col-md-7 row">
                        <div className="search col-md-8 col-12">
                            <div className="title">
                                <input placeholder="Search Our catalog"/>
                                <span className="icon"> 
                                    <i className="fa fa-magnifying-glass"></i>
                                </span>
                            </div>
                        </div>
                        <div className="contact-me col-md-4 row">
                            <div className="icon col-3"> 
                                <i className="fa-solid fa-headphones"></i>
                            </div>
                            <div className="contact-info col-9">
                                <h2>Contact Us</h2>
                                <p>0103 050 8285</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart col-2 row">
                            <div  className={isActive ? "block_content active": "block_content"}>
                                <div className="cart_block_list">
                                    {ProductActive}
                                </div>
                                <div className="cart-summary">
                                    <div className="card-block">
                                        <div className="items">
                                            <span className="lable">{state.product.length} items</span>
                                            <span className="value">€{totalprice.toFixed(2)}</span>
                                        </div>
                                        <div className="Shipping">
                                            <span className="Shipping">Shipping</span>
                                            <span className="value">Free</span>
                                        </div>
                                    </div>
                                    <div className="card-block">
                                        <span className="lable">Total (tax incl.)</span>
                                        <span className="value">€{totalprice.toFixed(2)}</span>
                                        <br/>
                                    </div>
                                    <div onClick={()=>setActive(!isActive)} className="card_btn">
                                        <Link to="/cart" >VIEW CART</Link>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        <i className="fa fa-user col-2"></i>
                        <div className="det col-10 row">
                            <div className="shopping col-4">
                                {
                                    state.product.length > 0 ? <i onClick={() => toggle()} className="fa fa-cart-shopping"></i> :
                                    <Link to="/cart"><i className="fa fa-cart-shopping"></i></Link>
                                }
                                <span className="num-product">{state.product.length}</span>
                            </div>
                            <div className="num col-8">
                                <h6>My Cart</h6>
                                <span>€{totalprice.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact col-md-12">
                        <div className="search phone col-12">
                            <div className="title">
                                <input placeholder="Search Our catalog"/>
                                <span className="icon"> 
                                    <i className="fa fa-magnifying-glass"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logo;