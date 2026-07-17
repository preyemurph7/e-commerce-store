import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import GoToCartButton from "../GoToCartButton/GoToCartButton";
import Footer from "../Footer/Footer";

const Layout = () => {
    return(
        <>
        <Navbar />
        <GoToCartButton />
        <Outlet />
        <Footer/>
        </>
    )
}

export default Layout;