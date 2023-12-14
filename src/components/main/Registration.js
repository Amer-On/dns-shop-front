import 'styles/auth.css'
import React from 'react';
import App from "../../App";
import axios from "axios";
import {toast} from "react-toastify";

const Registration = () => {
    function onSubmit(e) {
        e.preventDefault();
        const data = {
            login: e.target.username.value,
            password: e.target.password.value
        }
        axios.post('http://localhost:8000/api/v1/register/', data).then(
            (r) => {
                toast.success('Пользователь успешно создан, можете авторизоваться!')
            }
        ).catch(
            (e) => {
                console.log(e)
                if (e.response.status === 409) {
                    toast.error('Такой пользователь уже существует!')
                } else {
                    toast.error('Ошибка создания пользователя!')
                }
            }
        )
    }

    const headerProps = {
        auth: false
    }

    return (
        <App headerProps={headerProps}>
            <div className='login-form'>
                <form id='auth-form' onSubmit={onSubmit}>
                    <h3>Регистрация</h3>

                    <label htmlFor="username">Введите имя пользователя</label>
                    <input type="text" placeholder="Имя пользователя" id="username"/>

                    <label htmlFor="password">Введите пароль</label>
                    <input type="password" placeholder="Пароль" id="password"/>

                    <label htmlFor="confirm_password">Подтвердите пароль</label>
                    <input type="password" placeholder="Тоже пароль" id="confirm_password"/>

                    <button type='submit' form='auth-form'>Войти</button>
                </form>
            </div>
        </App>
    );
};

export default Registration;