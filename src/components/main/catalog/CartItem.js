import React, {useEffect, useState} from 'react';
import cartDeleteButton from 'static/cart_delete.svg'
import 'styles/cart.css'
import {useDispatch, useSelector} from "react-redux";

const CartItem = (props) => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const addItem = (e) => {
        e.preventDefault()
        dispatch({type: "ADD_TO_CART", id: props.id})
    }

    const removeItem = (e) => {
        e.preventDefault()
        dispatch({type: "REMOVE_FROM_CART", id: props.id})
    }

    const dropItem = (e) => {
        e.preventDefault()
        dispatch({type: "TOTALLY_REMOVE_FROM_CART", id: props.id})
    }


    return (
        <div className='cart-item' id={props.id}>
            <img className='cart-item-img' src={props.img}/>
            <div className='cart-item-info'>
                <p className='cart-item-title'>{props.title}</p>
            </div>
            <div className='cart-item-additional'>
                <div className='cart-item-price-delete'>
                    <p className='cart-item-price'>{props.price} ₽</p>
                    <input type='image' className='cart-item-delete' src={cartDeleteButton} onClick={dropItem}/>
                </div>
                <div className='cart-item-amount-manipulation'>
                    <button className='cart-item-add' onClick={addItem}>+</button>
                    <p className='cart-item-amount'>{props.amount}</p>
                    <button className='cart-item-remove' onClick={removeItem}>-</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;