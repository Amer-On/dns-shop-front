import Navigation from "./Navigation";
import AssortmentSideNavigation from "./AssortmentSideNavigation";
import HomeBody from "./HomeBody";
import SideAdvertisement from "./SideAdvertisement";

import 'styles/home.css'
import App from "../../../App";


export default function Home() {
    return (
        <App>
            <Navigation/>
            <div className='main-content-wrapper'>
                <AssortmentSideNavigation/>
                <HomeBody/>
                <SideAdvertisement/>
            </div>
        </App>
    )
}