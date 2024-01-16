import React, {useEffect, useState} from 'react';
import 'styles/catalog.css'
import 'styles/slider.css'
import CatalogItem from "./CatalogItem";
import App from "../../../App";
import Navigation from "../home/Navigation";
import axios from "axios";
import {useParams} from "react-router-dom";
import {HOST} from "../../../constants";

const Catalog = (props) => {
    const {query} = useParams();

    const [catalog, setCatalog] = useState([])
    useEffect(() => {
        let res;
        let data;
        if (props.cat === 'search') {
            data = {search: query}
        } else {
            data = {category: props.cat}
        }
        res = axios.get(HOST + '/api/v1/products/', {params: data})
        res.then(
            (r) => setCatalog(r.data)
        ).catch(
            (e) => console.log('Error ', e)
        )
    }, [props.cat, query])

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