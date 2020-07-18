import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Navbar extends Component {
   
    render() {
        return (
            <nav className ="navbar navbar-expand-sm  px-sm-5">
                <ul className ='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'></li>
                    <Link to='/' className='nav-link'>
                    Products
                    </Link>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <button>
                        <i className='fas fa-cart-plus' />Cart
                    </button>
                </Link>
                </nav>
       
        )
    }
}
