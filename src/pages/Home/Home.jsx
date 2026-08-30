import { useState } from "react";
import "./Home.css";
import ProductModal from "../../components/ProductModal/ProductModal";
import ProductCard from "../../components/ProductCard/ProductCard";
import SortDropdown from "../../components/SortDropdown/SortDropdown";
import { products } from "../../data/productData";
import { sortOptions } from "../../data/sortOptions";

const Home = () => {
  const [currentSort, setCurrentSort] = useState(sortOptions[0]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const getSortedProducts = () => {
    const sorted = [...products];

    if (currentSort === "Sort by price: low to high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (currentSort === "Sort by price: high to low") {
      sorted.sort((a, b) => b.price - a.price);
    }

    return sorted;
  };

  const sortedProducts = getSortedProducts();

  return (
    <>
      <div className="home-container">
        <div className="home-text">
          <p className="breadcrumb">Home / Shop</p>
          <h1>Shop</h1>
          <div className="results-sort-row">
            <p>Showing 1-8 of 10 results</p>
            <SortDropdown currentSort={currentSort} onSortChange={setCurrentSort} />
          </div>
        </div>
        <div className="product-grid">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              category={product.category}
              title={product.title}
              price={product.price}
              colorAvailable={product.colorAvailable}
              size={product.size}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>

        <div className="no-products">
          <p>No more products to show.</p>
        </div>
      </div>

      {quickViewProduct && (
        <ProductModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </>
  );
};

export default Home;

//there will be a product listing page with grid layout, product filtering (category, price range, size), 
// product detail page (images, description, size/color selector, reviews), search functionality, 
// shopping cart (add/remove/update quantity, persisted with Context + localStorage), 
// checkout flow (shipping info → payment → confirmation), user authentication (sign up / login / logout), 
// order history (past orders tied to logged-in user), wishlist / save for later, and fully responsive design (mobile menu, responsive grid).

//there will be 10 product images. 5 for men and 5 for women. the images will have plain grey/white backgrounds with models wearing the tshirts.
