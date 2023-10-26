import {Link} from "react-router-dom";

export default function AssortmentSideNavigation() {
    return (
        <div className='assortment body-item'>
            <Link className='assortment-item' to={'/'}>Бытовая техника</Link>
            <Link className='assortment-item' to={'/'}>Красота и здоровье</Link>
            <Link className='assortment-item' to={'/'}>Смартфоны и техника</Link>
            <Link className='assortment-item' to={'/'}>ТВ, консоли и аудио</Link>
            <Link className='assortment-item' to={'/'}>ПК, ноутбуки и периферия</Link>
            {/*<p>something</p>*/}
        </div>
    )
}