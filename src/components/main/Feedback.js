import React from 'react';
import 'styles/auth.css'
import App from "../../App";

const Feedback = () => {
    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <App headerProps={{auth: false}}>
            <div className='login-form'>
                <form id='auth-form' onSubmit={onSubmit}>
                    <h3>Обратная связь</h3>

                    <label htmlFor="username">Введите вашу электронную почту</label>
                    <input type="email" placeholder="Электронная почта" id="email"/>

                    <label htmlFor="confirm_password">Введите сообщение</label>
                    <input type="text" placeholder="Сообщение" id="feedback-message"/>

                    <button type='submit' form='auth-form'>Отправить</button>
                </form>
            </div>
        </App>
    );
};

export default Feedback;