import { useState } from "react"
import "./ProductCard.css"


const ProductCard = ({ id, image, category, title, price, colorAvailable, size }) => {


    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
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
        
        
          
        
        

    )
}

export default ProductCard