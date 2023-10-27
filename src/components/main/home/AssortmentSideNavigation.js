import {Link} from "react-router-dom";

export default function AssortmentSideNavigation() {
    return (
        <div className='assortment body-item'>
            <Link className='assortment-item' to={'catalog/tech'}>Бытовая техника</Link>
            <Link className='assortment-item' to={'catalog/beauty'}>Красота и здоровье</Link>
            <Link className='assortment-item' to={'catalog/smart'}>Смартфоны и техника</Link>
            {/*<Link className='assortment-item' to={'/'}>ТВ, консоли и аудио</Link>*/}
            <Link className='assortment-item' to={'catalog/pc'}>ПК, ноутбуки и периферия</Link>
            {/*<p>something</p>*/}
        </div>
    )
}