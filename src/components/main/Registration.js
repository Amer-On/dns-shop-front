import 'styles/auth.css'
import React from 'react';
import App from "../../App";

const Registration = () => {
    function onSubmit(e) {
        e.preventDefault();
        console.log('ON SUBMIT');
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