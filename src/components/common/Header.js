import 'styles/header.css'
import logo from 'static/logo.png'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import cartLogo from 'static/cart.svg'
import Popup from "reactjs-popup";
import Cart from "../main/catalog/Cart";


export default function Header(props) {
    const login = useSelector((state) => state.login)
    const cart = useSelector((state) => state.cart)
    const isAuth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const logoutOnSubmit = (e) => {
        e.preventDefault()
        dispatch({type: "LOG_OUT"})
        toast.success("Вы вышли из аккаунта " + login)
    }

    return (
        <header>
            <div className='header-container'>
                <Link to='/' className='logo'>
                    <img className='logo' src={logo} alt='logo'/>
                </Link>
                <h1 className='title'>DNS Цифровая и бытовая техника</h1>
                {isAuth ?
                    <>
                    <Popup trigger={
                        <div className='cart'>
                            <p className='cart-items'>{Object.keys(cart).length || 0}</p>
                            <img src={cartLogo} alt='cart logo'/>
                        </div>
                    }>
                        <Cart/>
                    </Popup>
                    <button className='btn' onClick={logoutOnSubmit}>Выйти</button>
                    </>
                    :
                    (props.auth ?
                            <Link to='/signup' className='login-button-wrapper'>
                                <button className='btn'>Регистрация</button>
                            </Link> :
                            (
                                props.auth === false ?
                                    <Link to='/login' className='login-button-wrapper'>
                                        <button className='btn'>Авторизация</button>
                                    </Link>
                                    : <span className='login-button-wrapper'/>
                            )
                    )
                }
            </div>
        </header>
    )
}
