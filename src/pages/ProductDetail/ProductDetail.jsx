import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Minus, Plus, Star } from "lucide-react";
import { products } from "../../data/productData";
import { useCart } from "../../Context/CartContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colorAvailable[0]);
  const [selectedSize, setSelectedSize] = useState(product?.size[0]);
  const [showDescription, setShowDescription] = useState(true);
  const [showReviews, setShowReviews] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  if (!product) {
    return <div className="product-detail-container"><p>Product not found.</p></div>;
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, selectedColor, selectedSize });
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-main">
        <img src={product.image} alt={product.title} className="detail-image" />

        <div className="detail-info">
          <p className="detail-category">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="detail-price">₦{product.price.toLocaleString()}</p>
          <p className="detail-description-snippet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros.
          </p>

          <p className="detail-label">Color</p>
          <div className="color-swatches">
            {product.colorAvailable.map((color) => (
              <div
                key={color}
                className={`color-swatch ${selectedColor === color ? "selected" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>

          <p className="detail-label">Size</p>
          <div className="size-options">
            {product.size.map((sizeText) => (
              <div
                key={sizeText}
                className={`size-box ${selectedSize === sizeText ? "selected" : ""}`}
                onClick={() => setSelectedSize(sizeText)}
              >
                {sizeText}
              </div>
            ))}
          </div>

          <div className="quantity-cart-row">
            <div className="quantity-row">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                <Minus size={16} />
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>
                <Plus size={16} />
              </button>
            </div>
            <button className="detail-add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          <p className="detail-meta">
            SKU: N/A &nbsp; Category: <span>{product.category}</span>
          </p>
        </div>
      </div>

      <div className="accordion">
        <button className="accordion-header" onClick={() => setShowDescription((s) => !s)}>
          Description <span>{showDescription ? "−" : "+"}</span>
        </button>
        {showDescription && (
          <div className="accordion-body">
            <h4>About the product</h4>
            <p>Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <ul>
              <li>100% Cotton</li>
              <li>260gsm</li>
              <li>Breathable Fabric</li>
            </ul>
          </div>
        )}
      </div>

      <div className="accordion">
        <button className="accordion-header" onClick={() => setShowReviews((s) => !s)}>
          Reviews (0) <span>{showReviews ? "−" : "+"}</span>
        </button>
        {showReviews && (
          <div className="accordion-body">
            <p>There are no reviews yet.</p>
            <form
             className="review-form"
             onSubmit={(e) => 
               e.preventDefault()}
             >
              <h4>Be the first to review "{product.title}"</h4>
              <p className="review-note">Your email address will not be published. Required fields are marked *</p>

              <p>Your rating *</p>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    fill={(hoverRating || rating) >= star ? "black" : "none"}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>

              <label>Your review *</label>
              <textarea rows="4" required></textarea>

              <div className="review-name-email">
                <div>
                  <label>Name *</label>
                  <input type="text" required />
                </div>
                <div>
                  <label>Email *</label>
                  <input type="email" required />
                </div>
              </div>

              <button className="review-submit" type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h2>Related products</h2>
          <div className="product-grid">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} {...p} onQuickView={() => {}} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;