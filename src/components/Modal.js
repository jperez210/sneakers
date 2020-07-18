import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom'


export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                const {modalOpen, closeModal}= value;
                const {img, title, price,} = value.modalProduct;
                
                if (!modalOpen) {
                return null;
                }else{
                    return (
                    <div id= "mod"className="container">
                        <div className="row">
                        <div id ="modal" className="col-8 mx-auto col-md-6 lg-4 text-center text-capitalze p-5">
                        <h5>item added to cart</h5>
                            <img src={img} className="img-fluid" alt="product" />
                                <h5>{title}</h5>
                                <h5 className="text-muted"> price : $ {price}</h5>
                                <Link to='/'>
                                <button className="back" onClick={() => closeModal()
                                }>Back
                                </button>
                                </Link>
                                <Link to='/cart'>
                                <button className="add" onClick={() => closeModal()
                                }>Cart 
                                </button>
                                    </Link>
                            </div>

                        </div>
                    </div>
                
                    );
                    }                
                }}
            </ProductConsumer>
           
        );
    }
}
