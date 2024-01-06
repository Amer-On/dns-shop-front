import 'styles/auth.css'
import React, {useEffect} from 'react';
import App from "../../App";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {Navigate, useNavigate} from "react-router-dom";


const Authorization = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector((state) => state.auth)

    function onSubmit(e) {
        e.preventDefault();
        const data = {
            login: e.target.username.value,
            password: e.target.password.value
        }
        axios.post('http://localhost:8000/api/v1/login/', data).then(
            (r) => {
                dispatch({type: "LOG_IN", login: data.login})
                navigate('/')
                toast.success('Авторизация успешна, ' + data.login + "!")
            }
            ).catch(
            (e) => {
                console.log(e)
                toast.error('Ошибка авторизации')
            }
        )
    }

    const headerProps = {
        auth: true,
    }
    useEffect(
        () => {
            if (isAuth) {
                toast.error('Вы уже авторизованы!')
            }
        },
        [isAuth, ]
    )

    return isAuth ?
        <Navigate to='/'/>
        : (
        <App headerProps={headerProps}>
            <div className='login-form'>
                <form id='auth-form' onSubmit={onSubmit}>
                    <h3>Авторизация</h3>

                    <label htmlFor="username">Введите имя пользователя</label>
                    <input type="text" placeholder="Имя пользователя" id="username"/>

                    <label htmlFor="password">Введите пароль</label>
                    <input type="password" placeholder="Пароль" id="password"/>

                    <button type='submit' form='auth-form'>Войти</button>
                </form>
            </div>
        </App>
    );
};

export default Authorization;