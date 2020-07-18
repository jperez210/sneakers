import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Products extends Component {
    render() {
        const{id, title, img, price, inCart} = this.props.products;
        return (
            <div className="wrapper col-12 mx-auto col-md-6 col-lg-4 my-4">
            <div className="card">
                <ProductConsumer>
                {value => (
                <div 
                    className="img-container p-5" onClick={() => value.handleDetail(id)}>
                    <Link to='/details'>
                        <img src={img} alt='product' className="card-img-top" />
                    </Link>
                    <button className="cart-btn" disabled={inCart ? true: false} 
                    onClick={() =>{
                        value.addToCart(id);
                        value.openModal(id);                 
                }}>
                    {inCart ? (
                        <p className="text-capitalize mb-0" disabled>
                            {""}
                            In Cart
                        </p>
                    ) : (
                    <i className="fas fa-cart-plus" />
                    )}  
                    </button>
                </div>)}
            
        
                </ProductConsumer>
                <div className="card-footer d-flex
                justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}
                    </p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-2">$</span>
                        {price}
                    </h5>
                </div>
            </div>
            </div>
        );
    }
}

Products.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,   
        img:PropTypes.number,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};