import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { LayoutList } from "lucide-react";

const Layout = () => {
    return(
        <>
        <Navbar />
        <Outlet />
        <Footer/>
        </>
    )
}

export default Layout;