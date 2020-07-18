import React from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block"> 
            <div className="row">
            <div className="col-12 mx-auto col-lg-2">
                <p className="text-uppercase">Item</p>
                </div>
                <div className="col-12 mx-auto col-lg-2">
                <p className="text-uppercase">Product Name</p>
                </div>
                <div className="col-12 mx-auto col-lg-2">
                <p className="text-uppercase">Size</p>
                </div>
                <div className="col-12 mx-auto col-lg-2">
                <p className="text-uppercase">Price</p>
                </div>
                <div className="col-12 mx-auto col-lg-2">
                <p className="text-uppercase">Remove</p>
                </div>
                <div className="col-12 mx-auto col-lg-2">
                <p className="text-uppercase"> Item Total</p>
                </div>
            </div>
           </div>
    )
}
