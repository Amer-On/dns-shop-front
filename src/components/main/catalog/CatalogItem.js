import React from 'react';
import {Link} from "react-router-dom";
import CustomSlider from "../Slider";
import {useDispatch, useSelector} from "react-redux";

const CatalogItem = (props) => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const buyItem = (e) => {
        e.preventDefault()
        dispatch({type: 'BUY_ITEM', item: {id: props.id, img: props.images[0], title: props.name, amount: 1, price: props.price}})
    }


    return (
        <div className='catalog-item' id={props.id}>
            <Link to={'/catalog/items/' + props.id}>
                <CustomSlider images={props.images}/>
            </Link>
            <div className='catalog-item-content'>
                <Link to={'/catalog/items/' + props.id}><p className='catalog-item-name'>{props.name}</p></Link>
                <p className='catalog-item-summary'>{props.summary}</p>
                {/*{*/}
                {/*    // <div className='catalog-item-amount-manipulation'>*/}
                {/*    //     <button className='cart-item-add' onClick={addItem}>+</button>*/}
                {/*    //     <p className='cart-item-amount'>{props.amount}</p>*/}
                {/*    //     <button className='cart-item-remove' onClick={removeItem}>-</button>*/}
                {/*    // </div>*/}
                {/*    <button className='btn basket-btn' onClick={buyItem}>Купить за {props.price}₽</button>*/}
                {/*    ? props.id in cart :*/}
                {/*    <button className='btn basket-btn' onClick={buyItem}>Купить за {props.price}₽</button>*/}
                {/*}*/}
                <button className='btn basket-btn' onClick={buyItem}>Купить за {props.price}₽</button>
            </div>
        </div>
    );
};

export default CatalogItem;