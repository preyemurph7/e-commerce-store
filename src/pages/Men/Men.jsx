import { useState } from "react";
import SortDropdown from "../../components/SortDropdown/SortDropdown";
import { sortOptions } from "../../data/sortOptions";
import { products } from "../../data/productData";
import ProductCard from "../../components/ProductCard/ProductCard";
import './Men.css'

const Men = () => {
     const [currentSort, setCurrentSort] = useState(sortOptions[0]);
    
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
                   <p className="breadcrumb">Home / Men</p>
                   <h1>Men</h1>
                   <div className="results-sort-row">
                     <p>Showing all 5 results</p>
                     <SortDropdown currentSort={currentSort} onSortChange={setCurrentSort} />
                   </div>
            </div>
             <div className="product-grid">
                      {sortedProducts
                       .filter((product) => product.category === "MEN")
                       .map((product) => (
                        <ProductCard
                          key={product.id}
                          id={product.id}
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

export default Men