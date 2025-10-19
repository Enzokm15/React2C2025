import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

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