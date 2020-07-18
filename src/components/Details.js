import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom'

export default class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {value => {
                const{ 
                    id,
                    img,
                    size,
                    info,
                    price,
                    title,
                    style,
                    inCart
                } =  value.detailProduct;
                return (
                    <div className="container py-5">
                        <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted
                        text-blue my-5">
                            <h1>{title}</h1>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 ">
                                <img src={img} className ="img-fluid" alt="product" />
                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h1><strong>
                                        price: <span>$</span>
                                        {price}
                                    </strong></h1>
                                <h4 className="text-title text-uppercase
                                text-muted mt-3 mb-2"> 
                                style: <span className="text-uppercase">{style} </span>
                                </h4>
                                <h4 className ="text-blue">
                                   size:{size}
                                </h4>
                                <p className="text-capital font-weight-bold mt-3 mb-0">
                                    about this product:
                                </p>
                                <p className="text-muted lead">{info}</p>
                                <div>
                                <Link to='/'>
                    
                    <button className="back" outline color="primary">Back To Products
                    </button>
                    </Link>
                    <button className="add" outline color="warning" disabled={inCart ? true: false} 
                    onClick={() =>{value.addToCart(id);
                                   value.openModal(id);  
                }}>
                {inCart ? "inCart" : "add to cart"}

                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                );
               }}
           </ProductConsumer>
        )
    }
}
