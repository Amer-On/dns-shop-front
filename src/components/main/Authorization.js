import 'styles/auth.css'
import React from 'react';
import App from "../../App";

const Authorization = () => {
    function onSubmit(e) {
        e.preventDefault();
        console.log('ON SUBMIT');
    }

    const headerProps = {
        auth: true,
    }

    return (
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