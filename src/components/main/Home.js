import {Link} from "react-router-dom";
import 'styles/navigation.css'

export default function Home() {
    return (
        <nav>
            <div className='nav-content'>
                <Link to='/stock'>Акции</Link>
                <Link to='/shops'>Магазины</Link>
                <Link to='/for_customers'>Покупателям</Link>
                <Link to='/contacts'>Контакты</Link>
                <div className='search'>
                    <input type="text" placeholder="Поиск по сайту"/>
                    <button className='search-btn'>Поиск</button>
                </div>
            </div>
        </nav>
    )
}