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
                    <Route path='/stock' element={<p>none</p>}/>
                    <Route path='/shops' element={<p>none</p>}/>
                    <Route path='/for_customers' element={<p>none</p>}/>
                    <Route path='/contacts' element={<p>none</p>}/>
                    <Route path='/login' element={<Authorization/>}/>
                    <Route path='/signup' element={<Registration/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </>
);
