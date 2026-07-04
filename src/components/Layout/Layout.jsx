import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { LayoutList } from "lucide-react";

const Layout = () => {
    return(
        <>
        <Navbar />
        <Outlet />
        </>
    )
}

export default Layout;