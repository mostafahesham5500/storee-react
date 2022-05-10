import { useState,useEffect } from "react";
import src from "../../../package.json";
import "./blog.css";

import {data2} from "../../data";

function Blog(){


    const allpages = Math.ceil(data2.length/4);
    const [heightphone1,setheightphone1] = useState(false);
    const handel1 = () => {
        setheightphone1(!heightphone1);
    }

    const [heightphone2,setheightphone2] = useState(false);
    const handel2 = () => {
        setheightphone2(!heightphone2);
    }

    const [page,setpage] = useState(data2.slice(0 , 4));
    const [numpage,setnumpage] = useState(1);
    const changepage = (e) => {
        setpage(data2.slice((e*4) - 4, e*4));
        setnumpage(e)
    }   
    
    const add = () => {
        if(numpage < allpages){
            setnumpage(numpage+1)
        }
    }

    const remove = () => {
        if(numpage > 0){
            setnumpage(numpage-1)
        }
    }
    useEffect(() => {
        setpage(data2.slice((numpage*4) - 4, numpage*4));
    },[numpage])
        const allitems = page.map(item => {
            return(
                <div key={item.id} className="col-12 col-lg-6">
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
        <div className="delivery blog">
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
                            <h2 className="head">LATEST BLOGS</h2>
                            <div className="row">
                                {allitems}
                                <div className="pages">
                                    <div>
                                        <span onClick={() => remove()}><i className="fa-solid fa-arrow-left-long"></i></span>
                                        {pages}
                                        <span onClick={() => add()}><i className="fa-solid fa-arrow-right-long"></i></span>
                                    </div>
                                    <div>{`Showing ${numpage*4 - 3} - ${(numpage*4 - 4) + page.length} of 4 items`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog;