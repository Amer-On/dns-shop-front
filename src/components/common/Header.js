import 'styles/header.css'
import logo from 'static/logo.png'
import {Link} from "react-router-dom";


export default function Header() {
    return (
        <header>
            <div className='header-container'>
                <Link to='/' className='logo'>
                    <img className='logo' src={logo} alt='logo'/>
                </Link>
                <h1 className='title'>DNS Цифровая и бытовая техника</h1>
                <Link to='/login' className='login-button-wrapper'>
                    <button className='btn'>Авторизоваться</button>
                </Link>
            </div>
        </header>
    )
}
