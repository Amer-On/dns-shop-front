import 'styles/auth.css'
import React from 'react';

const Authorization = () => {
    function onSubmit(e) {
        e.preventDefault();
        console.log('ON SUBMIT');
    }

    return (
        <div className='login-form'>
            <form id='auth-form' onSubmit={onSubmit}>
                <h3>Авторизация</h3>

                <label htmlFor="username">Имя пользователя</label>
                <input type="text" placeholder="Имя пользователя" id="username"/>

                <label htmlFor="password">Пароль</label>
                <input type="password" placeholder="Пароль" id="password"/>

                <button type='submit' form='auth-form' className='login-button'>Войти</button>
            </form>
        </div>
    );
};

export default Authorization;