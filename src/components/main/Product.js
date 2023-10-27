import React from 'react';
import {useParams} from "react-router-dom";
import App from "../../App";
import Navigation from "./home/Navigation";
import {cat} from "../../catalog";
import 'styles/product.css'

const Product = () => {
    const {id} = useParams();
    return (
        <App headerProps={{auth: false}}>
            <Navigation/>
            <div className='body-content-wrapper item-wrapper'>
                <div className='general-product-info'>
                    <img src={cat[id].img} alt={cat[id].name} className='product-image'/>
                    <div className='general-product-description'>
                        <h1 className='title product-name'>{cat[id].name}</h1>
                        <p className='product-summary'>{cat[id].summary}</p>
                        <div className='product-price-wrapper'>
                            <div>
                                <p className='product-price'>Цена: {cat[id].price}₽</p>
                                <p className='product-price'>Рассрочка: {cat[id].price / 12}₽/мес</p>
                            </div>
                            <button className='btn basket-btn product-btn'>Купить</button>
                        </div>
                    </div>
                    <div className='product-places'>
                        <p>В данный момент в наличии в следующих магазинах:</p>
                        <ul>
                            <li><a href='https://yandex.ru/maps/-/CDa9YTZe'>Марксистская улица, 1к1</a></li>
                            <li><a href='https://yandex.ru/maps/-/CDa9Y-9S'>Манежная площадь, 1с2</a></li>
                        </ul>
                    </div>
                </div>
                <p className='product-description'>
                    {cat[id].description}
                </p>
            </div>
        </App>
    );
};

export default Product;