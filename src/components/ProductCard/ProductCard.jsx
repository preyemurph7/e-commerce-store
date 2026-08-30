import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ id, image, category, title, price, colorAvailable, size, onQuickView }) => {
    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <Link to={`/product/${id}`}>
                    <img src={image} alt={title} className="product-image" />
                </Link>
                <button
                    className="quick-view-btn"
                    onClick={() => onQuickView({ id, image, category, title, price, colorAvailable, size })}
                    aria-label="Quick view"
                >
                    <Eye size={18} />
                </button>
            </div>
            <div className="product-info">
                <p>{category}</p>
                <h2>{title}</h2>
                <p className="pricetag">₦{price.toLocaleString()}</p>
                <div className="color-swatches">
                    {colorAvailable.map((color) => (
                        <div key={color} className="color-swatch" style={{ backgroundColor: color }}></div>
                    ))}
                </div>
                <div className="size-options">
                    {size.map((sizeText) => (
                        <div key={sizeText} className="size-box">
                            {sizeText}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;