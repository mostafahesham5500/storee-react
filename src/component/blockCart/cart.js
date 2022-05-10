import { useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import src from "../../../package.json";

function Blockcart(){
    const dispatch = useDispatch();
    const totalprice = useSelector(state => state.totalprice);
    const state = useSelector(state => state);
    const isActive = state.isActive;
    const remove = (id) => {
        dispatch({type:"REMOVE",id:id})
        dispatch({type:"isActive"})
    }

    const toggle = () => {
        dispatch({type:"isActive"})
        console.log(state.product.length)
    }
    const ProductActive = state.product.map(item => {
        return(
            <div key={item.id} className="cart-item">
                <div className="cart-image">
                    <img src={src.homepage+item.img}/>
                </div>
                <div className="cart-info">
                    <span onClick={() => remove(item.id)} className="remove">X</span>
                    <span className="product-quantity">1</span>
                    <span className="product-name">{item.head}</span>
                    <span className="product-price">€{item.price2}</span>
                </div>
            </div>
        )
    })
    return(
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
                <div className="card_btn">
                    <Link to="/cart">VIEW CART</Link>
                    <br/>
                </div>
            </div>
        </div>
        <i className="fa fa-user col-2"></i>
        <div className="det col-10 row">
            <div className="shopping col-4">
                {console.log(state.product.length)}
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
    )
}

export default Blockcart;