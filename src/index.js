import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from '@reduxjs/toolkit'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import reducer from "./reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.overflow = "hidden"

const store = configureStore({reducer: reducer})

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
);
