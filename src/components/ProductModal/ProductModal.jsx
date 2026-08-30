import { useState, useEffect } from "react";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "../../Context/CartContext";
import "./ProductModal.css";

const ProductModal = ({ product, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, [product]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {isLoading ? (
          <div className="modal-loading">
            <span className="modal-spinner"></span>
          </div>
        ) : (
          <div className="modal-body">
            <img src={product.image} alt={product.title} className="modal-image" />

            <div className="modal-details">
              <p className="modal-category">{product.category}</p>
              <h2>{product.title}</h2>
              <p className="modal-price">₦{product.price.toLocaleString()}</p>

              <p className="modal-label">Color</p>
              <div className="color-swatches">
                {product.colorAvailable.map((color) => (
                  <div key={color} className="color-swatch" style={{ backgroundColor: color }}></div>
                ))}
              </div>

              <p className="modal-label">Size</p>
              <div className="size-options">
                {product.size.map((sizeText) => (
                  <div key={sizeText} className="size-box">{sizeText}</div>
                ))}
              </div>

              <div className="quantity-row">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                  <Minus size={16} />
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)}>
                  <Plus size={16} />
                </button>
              </div>

              <button className="modal-add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;