import { Outlet } from "react-router-dom";
import { Apiget } from "./Apiget";
import Footer from "./Footer";
import Header from "./Header";
import { TableApi } from "./TableApi";

const Layout = () => {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
            {/* <Apiget /> */}
            
        </>
    )
}

export default Layout;