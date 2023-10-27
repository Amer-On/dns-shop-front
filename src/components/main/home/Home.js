import Navigation from "./Navigation";
import AssortmentSideNavigation from "./AssortmentSideNavigation";
import HomeBody from "./HomeBody";
import SideAdvertisement from "./SideAdvertisement";

import 'styles/home.css'
import App from "../../../App";


export default function Home() {
    const headerProps = {
        auth: false
    }
    return (
        <App headerProps={headerProps}>
            <Navigation/>
            <div className='main-content-wrapper'>
                <AssortmentSideNavigation/>
                <HomeBody/>
                <SideAdvertisement/>
            </div>
        </App>
    )
}