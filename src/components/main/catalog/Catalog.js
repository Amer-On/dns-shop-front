import React from 'react';
import 'styles/catalog.css'
import CatalogItem from "./CatalogItem";
import App from "../../../App";
import Navigation from "../home/Navigation";
import catalog from "../../../catalog";

const Catalog = (props) => {
    const real_catalog = props.ids.map(idx => catalog[idx])

    return (
        <App headerProps={{auth: false}}>
            <Navigation/>
            <div className='catalog-wrapper'>
                <h1 className='catalog-title'>Каталог</h1>
                <div className='catalog-content-wrapper'>
                    {real_catalog.map((item) => <CatalogItem {...item}/>)}
                </div>
            </div>
        </App>
    );
};

export default Catalog;