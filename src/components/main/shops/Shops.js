import React from 'react';
import App from "../../../App";
import Navigation from "../home/Navigation";
import 'styles/shops.css'


const Shops = () => {
    return (
        <App headerProps={{auth: false}}>
            <Navigation/>
            <div className='body-content-wrapper'>
                <h1 className='title shops-title'>Наши магазины</h1>
                <p className='shops-description'>Наши магазины расположены по всей стране
                    и вы можете выбрать любой, который вам больше нравится.</p>
                <p className='shops-description'>
                    Мы нашли ближайшие магазины для вас! Рекомендуем к посещению именно их
                </p>

                <h2 className='title shops-secondary-title'>Ближайшие магазины</h2>
                <div className='maps-wrapper'>
                    <div className='ymap'><a
                        href="https://yandex.ru/maps/org/dns/1622980608/?utm_medium=mapframe&utm_source=maps"
                        style={{color:'#eee', 'font-size': '12px', position:'absolute', top: '0px'}}>DNS</a><a
                        href="https://yandex.ru/maps/213/moscow/category/computer_store/184105760/?utm_medium=mapframe&utm_source=maps"
                        style={{color:'#eee', 'font-size': '12px', position: 'absolute', top: '14px'}}>Computer store in Moscow</a><a
                        href="https://yandex.ru/maps/213/moscow/category/electronics_store/184107835/?utm_medium=mapframe&utm_source=maps"
                        style={{color:'#eee', 'font-size': '12px', position: 'absolute', top: '28px'}}>Electronics store in Moscow</a>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?display-text=DNS&filter=chain_id%3A1996262835&ll=37.659998%2C55.739770&mode=search&oid=1622980608&ol=biz&sctx=ZAAAAAgBEAAaKAoSCZ5eKcsQz0JAEdOgaB7A4EtAEhIJ%2BrX103%2BW9j8R2Ls%2F3qtW4j8iBgABAgMEBSgAOABA260HSAFqAnJ1ggETY2hhaW5faWQ6MTk5NjI2MjgzNZ0BzcxMPaABAKgBAL0BqVKhJsIBBYDw8oUG6gEA8gEA%2BAEAggITY2hhaW5faWQ6MTk5NjI2MjgzNYoCAJICAJoCDGRlc2t0b3AtbWFwc6oCFTE5OTYyNjI4MzUsMTA3MjE0NDQ3NrACAQ%3D%3D&sll=37.659998%2C55.739770&sspn=0.033667%2C0.013672&text=%7B%22text%22%3A%22DNS%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%221996262835%22%5D%7D%5D%7D&z=15.39"
                            width="560" height="400" frameBorder="1" allowFullScreen="true"
                            style={{position: 'relative'}}></iframe>
                    </div>
                    <div className='ymap'><a
                        href="https://yandex.ru/maps/org/dns/23052785224/?utm_medium=mapframe&utm_source=maps"
                        style={{color: '#eee', 'font-size': '12px', position: 'absolute', top: '0px'}}>DNS</a><a
                        href="https://yandex.ru/maps/213/moscow/category/computer_store/184105760/?utm_medium=mapframe&utm_source=maps"
                        style={{color: '#eee', 'font-size': '12px', position: 'absolute',  top:'14px'}}>Computer store in Moscow</a><a
                        href="https://yandex.ru/maps/213/moscow/category/electronics_store/184107835/?utm_medium=mapframe&utm_source=maps"
                        style={{color:'#eee', 'font-size':'12px', position:'absolute', top:'28px'}}>Electronics store in Moscow</a>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?display-text=DNS&filter=chain_id%3A1996262835&ll=37.614806%2C55.755778&mode=search&oid=23052785224&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXS2gNB61EJAEe1Hisiw3ktAEhIJUKvoD808oT8RtqD3xhAAjD8iBgABAgMEBSgAOABA3K0HSAFqAnJ1ggETY2hhaW5faWQ6MTk5NjI2MjgzNZ0BzcxMPaABAKgBAL0BqVKhJsIBBcistvBV6gEA8gEA%2BAEAggITY2hhaW5faWQ6MTk5NjI2MjgzNYoCAJICAJoCDGRlc2t0b3AtbWFwc6oCFTE5OTYyNjI4MzUsMTA3MjE0NDQ3NrACAQ%3D%3D&sll=37.614806%2C55.755778&sspn=0.024475%2C0.009935&text=%7B%22text%22%3A%22DNS%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%221996262835%22%5D%7D%5D%7D&z=15.85"
                            width="560" height="400" frameBorder="1" allowFullScreen="true"
                            style={{position:'relative'}}></iframe>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default Shops;