import Navigation from "./Navigation";
import AssortmentSideNavigation from "./AssortmentSideNavigation";
import HomeBody from "./HomeBody";
import SideAdvertisement from "./SideAdvertisement";

import 'styles/home.css'


export default function Home() {
    return (
        <>
            <Navigation/>
            <div className='main-content-wrapper'>
                <AssortmentSideNavigation/>
                <HomeBody/>
                <SideAdvertisement/>
            </div>
        </>
    )
}