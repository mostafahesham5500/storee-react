import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import src from "../../../package.json";

import "./cart.css";

function Cart(){
    const state= useSelector(state => state)
    const [ren,setren] = useState(state.ren);
    const dispatch = useDispatch();
    const remove = (item) => {
        dispatch({type:"REMOVE",id:item.id})
        setren(state.ren)
    }
    const increase = (item) =>{
        setren(state.ren)
        dispatch({ type: "INCREASE", id:item.id })
    }
    const decrease = (item) =>{
        setren(state.ren)
        dispatch({ type: "DECREASE", id:item.id })
    }
    var allitems = state.product.length > 0 ? state.product.map(item => {
        return(
                <div key={item.id} className="item row ">
                    <div className="img col-md-3 col-xs-4">
                        <img src={src.homepage+item.img} alt="no"/>
                    </div>
                    <div className="content col-md-6 col-xs-8">
                        <h6>{item.head}</h6>
                        <div className="price">
                            {item.price1 ?<div> <span className="discount">€{item.price1}</span><span className="rate">-{(((item.price1 - item.price2) / item.price1)*100).toFixed(0)}%</span></div> : ""}
                            <span className="end">€{item.price2}</span>
                            <h5>Size: S</h5>
                            <h5>Color: red</h5>
                        </div>
                        <div className="star-x">
                            {item.star.map((st,index) => {
                                return(
                                    <i key={index} className={st}></i>
                                )
                            })}
                            <i className="cart fa fa-cart-shopping b"></i>
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <div className="delete">
                            <span>€{item.price2 * item.quantity}</span><span className="icon"><i onClick={() => remove(item)} className="fas fa-trash"></i></span>
                            <h5 className="mt-5">Quantity : {item.quantity}
                                <span  onClick={() => increase(item)}><i className="qu ml-5 fas fa-arrow-up"></i></span>
                                <span  onClick={() => decrease(item)}><i className="qu fas fa-arrow-down"></i></span>
                            </h5>
                        </div>
                    </div>
                </div>
        )
    })
    : "no product"
    return(
        <div className="cart-items">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="allitems">
                            <h4 className="cart_head">SHOPPING CART</h4>
                            <hr/>
                            {allitems}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;