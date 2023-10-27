import React from 'react';
import 'styles/catalog.css'
import filler from 'static/filler.jpg'
import CatalogItem from "./CatalogItem";
import App from "../../../App";
import Navigation from "../home/Navigation";

const Catalog = () => {
    const catalog = [
        {
            'id': 0,
            'name': 'Пароварка',
            'summary': 'Очень крутая и классная пароварка мощностью 120гц',
            'price': 10000,
            'img': filler,
        },
        {
            'id': 1,
            'name': 'Игровая мышь',
            'summary': 'Прекрасная беспроводная игровая мышь',
            'price': 1500,
            'img': filler,
        },
        {
            'id': 2,
            'name': 'Монитор',
            'summary': 'Суперский беспроводная мониток с частотой опроса 120вт',
            'price': 15000,
            'img': filler,
        },
        {
            'id': 3,
            'name': 'Пылесос',
            'summary': 'Засасывает всё целиком и полностью, в работе безупречен',
            'price': 10000,
            'img': filler
        },
        {
            'id': 4,
            'name': 'Компьютерный стол',
            'summary': 'Удобный и комфортный рабочий стол',
            'price': 1500,
            'img': filler
        },
        {
            'id': 5,
            'name': 'Ноутбук',
            'summary': 'Хороший ноутбук',
            'price': 45000,
            'img': filler
        }
    ]


    return (
        <App headerProps={{auth: false}}>
            <Navigation/>
            <div className='catalog-wrapper'>
                <h1 className='catalog-title'>Каталог</h1>
                <div className='catalog-content-wrapper'>
                    {catalog.map((item) => <CatalogItem {...item}/>)}
                </div>
            </div>
        </App>
    );
};

export default Catalog;