import { Outlet } from "react-router-dom";
import { Nav } from "./Nav/Nav";
import { Footer } from "./Footer/Footer";

export function LayoutPublico () {

    return(
        <>
            <Nav/>
            <main>
                <Outlet/>
            </main>
            <Footer/>

        </>
    )

}