import React from 'react';
import 'styles/auth.css'
import App from "../../App";
import axios from "axios";
import {toast} from "react-toastify";

const Feedback = () => {
    function onSubmit(e) {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            comment: e.target.message.value
        }
        axios.post("http://localhost:8000/api/v1/feedbacks", data).then(
            (response) => {
                if (response.status === 200) {
                    toast.success('Обратная связь оставлена!')
                }
                console.log(response)
            }
        ).catch(
            (error) => {
                toast.error("Ошибка " + error.response.status + ": " + error.response.data.detail)
            }
        )
    }

    return (
        <App headerProps={{auth: false}}>
            <div className='login-form'>
                <form id='auth-form' onSubmit={onSubmit}>
                    <h3>Обратная связь</h3>

                    <label htmlFor="username">Введите вашу электронную почту</label>
                    <input type="email" placeholder="Электронная почта" id="email"/>

                    <label htmlFor="confirm_password">Введите сообщение</label>
                    <input type="text" placeholder="Сообщение" id="message"/>

                    <button type='submit' form='auth-form'>Отправить</button>
                </form>
            </div>
        </App>
    );
};

export default Feedback;