import React from 'react'

export default function CartItem({item,value}) {
    const {id,size,title,img,price,total} =item;
    const {removeItem}=value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-12 mx-auto col-lg-2">
                <img src={img} style={{width:"10rem",height:"10rem"}}
                className="img-fluid"
                alt="product"
                />
            </div>
            <div className="col-12 mx-auto col-lg-2">
                <span className="d-lg-none">product:</span>
                {title}
            </div>
            <div className="col-12 mx-auto col-lg-2">
                <span className="d-lg-none">size:</span>
                {size}
            </div>
        <div className="col-12 mx-auto col-lg-2">
                <span className="d-lg-none">price: </span>
                {price}
        </div>

        <div className="col-12 mx-auto col-lg-2">
            <div className="cart-icon" onClick={()=>removeItem(id)}>
            <i className="fas fa-trash"></i>
            </div>
            </div>
            <div className="col-12 mx-auto col-lg-2">
                <strong> Item Total $:{total} </strong>
                </div>
                
        </div>
    );
}
