import React from 'react';
import 'styles/cart.css'
import CartItem from "./CartItem";
import {useSelector} from "react-redux";


const Cart = (props) => {
    const cart = useSelector((state) => state.cart)


    return (
        <div className='cart-wrapper'>
            <h3 className='cart-title'>Корзина</h3>
            <div className='cart-content'>
                {Object.keys(cart).map((id) => <CartItem {...cart[id]} id={id}/>)}
                {/*{cart.map((id, item) => <CartItem {...item} id={id}/>)}*/}
            </div>
        </div>
    )
}

export default Cart;