import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import GoToCartButton from "../GoToCartButton/GoToCartButton";
import ProductModal from "../ProductModal/ProductModal";
import { useQuickView } from "../../Context/QuickViewContext";
import CartDrawer from "../CartDrawer/CartDrawer";
import Footer from "../Footer/Footer";

const Layout = () => {
    const { quickViewProduct, setQuickViewProduct } = useQuickView();

    return(
        <>
        <Navbar />
        <GoToCartButton />
        <Outlet />
        {quickViewProduct && (
          <ProductModal
            product={quickViewProduct}
            onClose={() => setQuickViewProduct(null)}
          />
        )}
        <Footer/>
        <CartDrawer />
        </>
    )
}

export default Layout;