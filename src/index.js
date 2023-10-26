import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from '@reduxjs/toolkit'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import reducer from "./reducer";
import 'styles/index.css'
import Home from "./components/main/home/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({reducer: reducer})

root.render(
    <>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<App/>}>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/login' element={<p>login form</p>}/>
                        <Route path='/stock' element={<p>none</p>}/>
                        <Route path='/shops' element={<p>none</p>}/>
                        <Route path='/for_customers' element={<p>none</p>}/>
                        <Route path='/contacts' element={<p>none</p>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </>
);
