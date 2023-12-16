import {NavBar} from "../component/NavBar";
import {Outlet} from "react-router-dom";
import {Footer} from "../component/Footer";


export const MenuLayout = () => {
    return (
        <>
            <div>
                <NavBar/>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}
