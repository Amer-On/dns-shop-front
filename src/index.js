import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import reducer from "./reducer";
import 'styles/index.css'
import Home from "./components/main/home/Home";
import Authorization from "./components/main/Authorization";
import Registration from "./components/main/Registration";
import video from "./static/bg.mp4";
import Feedback from "./components/main/Feedback";
import Catalog from "./components/main/catalog/Catalog";
import Shops from "./components/main/shops/Shops";
import Product from "./components/main/Product";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({reducer: reducer})

root.render(
    <>
        <video id="background-video" autoPlay loop muted>
            <source src={video} type="video/mp4"/>
        </video>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/catalog' element={<Catalog ids={[0, 1, 2, 3, 4, 5]} title='Каталог'/>}/>
                    <Route path='/shops' element={<Shops/>}/>
                    <Route path='/feedback' element={<Feedback/>}/>
                    <Route path='/contacts' element={<p>none</p>}/>
                    <Route path='/login' element={<Authorization/>}/>
                    <Route path='/signup' element={<Registration/>}/>
                    <Route path="/catalog/items/:id" element={<Product/>} />
                    <Route path="/catalog/tech/" element={<Catalog cat='tech' ids={[0, 3]} title='Бытовая техника'/>} />
                    <Route path="/catalog/beauty/" element={<Catalog cat='beauty' ids={[]} title='Красота и здоровье'/>} />
                    <Route path="/catalog/smart/" element={<Catalog cat='smart' ids={[4]} title='Смартфоны и техника'/>} />
                    <Route path="/catalog/pc/" element={<Catalog cat='pc' ids={[1, 2, 5]} title='Пк, ноутбуки и периферия'/>} />
                    <Route path="/catalog/search/:query" element={<Catalog title='Поиск' cat='search'/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </>
);
