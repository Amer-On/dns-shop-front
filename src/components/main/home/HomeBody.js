import ceo from 'static/ceo.jpg'


export default function HomeBody() {
    return (
        <div className='body'>
            <h1 className='body-title'>Привет, меня зовут DNS</h1>
            <div className='about'>
                <div>
                    <p>
                        Самый лучший <b>Интернет магазин</b>. Совершайте покупки <i>выгодно</i>.
                        Мы - всероссийский <b>Интернет магазин</b>, но оригинально базируемся во Владивостоке.
                    </p>
                    <p>Наша цель изменить жизнь людей, сделав простым доступ к огромному количеству качественных и
                        недорогих товаров, предоставляя лучший сервис.
                    </p>
                </div>
                <div className='photo-wrapper'>
                    <img alt='DNS CEO' src={ceo} className='ceo-photo'/>
                    <p>Генеральный директор компании DNS</p>
                </div>
            </div>
        </div>
    )
}