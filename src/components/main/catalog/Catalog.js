import React, {useEffect, useState} from 'react';
import 'styles/catalog.css'
import 'styles/slider.css'
import CatalogItem from "./CatalogItem";
import App from "../../../App";
import Navigation from "../home/Navigation";
import axios from "axios";

const Catalog = (props) => {
    const [catatog, setCatalog] = useState([])
    useEffect(() => {
        let res;
        const data = {category: props.cat};
        res = axios.get('http://localhost:8000/api/v1/products/', {params: data})
        res.then(
            (r) => setCatalog(r.data)
        ).catch(
            (e) => console.log('Error ', e)
        )
    }, [props.cat])

    return (
        <App headerProps={{auth: false}}>
            <Navigation/>
            <div className='catalog-wrapper'>
                <h1 className='catalog-title'>Каталог</h1>
                <div className='catalog-content-wrapper'>
                    {catatog.map((item) => <CatalogItem {...item}/>)}
                </div>
            </div>
        </App>
    );
};

export default Catalog;