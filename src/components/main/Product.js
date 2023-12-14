import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import App from "../../App";
import Navigation from "./home/Navigation";
import 'styles/product.css'
import axios from "axios";

const Product = () => {
    const {id} = useParams();

    const [data, setData] = useState()
    useEffect(() => {
        var res;
        res = axios.get('http://localhost:8000/api/v1/products/' + id)
        res.then(
            (r) => setData(r.data)
        ).catch(
            (e) => console.log('Error ', e)
        )
    }, [id])
    if (data) {
        return (
            <App headerProps={{auth: false}}>
                <Navigation/>
                <div className='body-content-wrapper item-wrapper'>
                    <div className='general-product-info'>
                        <img src={data.images[0]} alt={data.images[0]} className='product-image'/>
                        <div className='general-product-description'>
                            <h1 className='title product-name'>{data.name}</h1>
                            <p className='product-summary'>{data.summary}</p>
                            <div className='product-price-wrapper'>
                                <div>
                                    <p className='product-price'>Цена: {data.price}₽</p>
                                    <p className='product-price'>Рассрочка: {(data.price / 12).toFixed(0)}₽/мес</p>
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
                        {data.description}
                    </p>
                </div>
            </App>
        );
    } else {
        return <></>
    }
};

export default Product;