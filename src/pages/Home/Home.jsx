import "./Home.css"
import ProductCard from "../../components/ProductCard/ProductCard"
import Navbar from "./../../components/Navbar/Navbar"
import manInBlackTshirt from "../../assets/products/men/man-in-black-tshirt.jpg";
import { products } from "../../data/productData";
import Subscribe from "../../components/Footer/Footer";
const Home = () => {
    return(
        <>
        <div className="home-container">
            <div className="home-text">
                <p>Home / Shop</p>
                <h1>Shop</h1>
                <p>Showing 1-8 of 10 results</p>
            </div>
            <div className="product-grid">
                {products.map((product) => (
                  <ProductCard
                   key={product.id}
                   image={product.image}
                   category={product.category}
                   title={product.title}
                   price={product.price}
                   colorAvailable={product.colorAvailable}
                   size={product.size}
            />
            ))}
            </div>    

            <div className="no-products">
                <p>No more products to show.</p>
            </div>
        </div>
        </>
    )
}

export default Home

//there will be a product listing page with grid layout, product filtering (category, price range, size), 
// product detail page (images, description, size/color selector, reviews), search functionality, 
// shopping cart (add/remove/update quantity, persisted with Context + localStorage), 
// checkout flow (shipping info → payment → confirmation), user authentication (sign up / login / logout), 
// order history (past orders tied to logged-in user), wishlist / save for later, and fully responsive design (mobile menu, responsive grid).

//there will be 10 product images. 5 for men and 5 for women. the images will have plain grey/white backgrounds with models wearing the tshirts.
