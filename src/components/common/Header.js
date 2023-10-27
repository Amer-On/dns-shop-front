import 'styles/header.css'
import logo from 'static/logo.png'
import {Link} from "react-router-dom";


export default function Header(props) {
    return (
        <header>
            <div className='header-container'>
                <Link to='/' className='logo'>
                    <img className='logo' src={logo} alt='logo'/>
                </Link>
                <h1 className='title'>DNS Цифровая и бытовая техника</h1>
                {props.auth ?
                    <Link to='/signup' className='login-button-wrapper'>
                        <button className='btn'>Регистрация</button>
                    </Link>
                    :
                    <Link to='/login' className='login-button-wrapper'>
                        <button className='btn'>Авторизация</button>
                    </Link>
                }
            </div>
        </header>
    )
}
