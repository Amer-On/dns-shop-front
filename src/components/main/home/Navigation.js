import {Link, useNavigate} from "react-router-dom";
import 'styles/navigation.css'
import {useState} from "react";

export default function Navigation() {
    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const onClick = () => {
        navigate('/catalog/search/' + query)
    }
    return (
        <nav>
            <div className='nav-content'>
                <Link to='/catalog'>Каталог</Link>
                <Link to='/shops'>Магазины</Link>
                <Link to='/feedback'>Обратная связь</Link>
                {/*<Link to='/contacts'>Контакты</Link>*/}
                <div className='search'>
                    <input type="text" placeholder="Поиск по сайту" onChange={(e) => setQuery(e.target.value)}/>
                    <button className='search-btn' onClick={onClick}>Поиск</button>
                </div>
            </div>
        </nav>
    )
}