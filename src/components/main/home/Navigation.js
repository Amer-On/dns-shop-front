import {Link} from "react-router-dom";
import 'styles/navigation.css'

export default function Navigation() {
    return (
        <nav>
            <div className='nav-content'>
                <Link to='/catalog'>Каталог</Link>
                <Link to='/shops'>Магазины</Link>
                <Link to='/feedback'>Обратная связь</Link>
                <Link to='/contacts'>Контакты</Link>
                <div className='search'>
                    <input type="text" placeholder="Поиск по сайту"/>
                    <button className='search-btn'>Поиск</button>
                </div>
            </div>
        </nav>
    )
}