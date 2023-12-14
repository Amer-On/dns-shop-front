import React from 'react';
import {Link} from "react-router-dom";
import CustomSlider from "../Slider";

const CatalogItem = (props) => {
    return (
        <div className='catalog-item' id={props.id}>
            <Link to={'/catalog/items/' + props.id}>
                <CustomSlider images={props.images}/>
            </Link>
            <div className='catalog-item-content'>
                <Link to={'/catalog/items/' + props.id}><p className='catalog-item-name'>{props.name}</p></Link>
                <p className='catalog-item-summary'>{props.summary}</p>
                <button className='btn basket-btn'>Купить за {props.price}₽</button>
            </div>
        </div>
    );
};

export default CatalogItem;