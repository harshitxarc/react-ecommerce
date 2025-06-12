import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../Data.js';
import './CardDetails.css';

const CardDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [quantity, setQuantity] = useState(1);
    const [confirmation, setConfirmation] = useState('');

    if (!product) return <div>Product not found.</div>;

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        const itemToAdd = {
            id: product.id,
            name: product.title,
            image: product.image,
            price: product.price,
            quantity,
            color: selectedColor,
            size: selectedSize,
        };

        const existingIndex = cartItems.findIndex(
            (item) =>
                item.id === itemToAdd.id &&
                item.color === itemToAdd.color &&
                item.size === itemToAdd.size
        );

        if (existingIndex !== -1) {
            cartItems[existingIndex].quantity += quantity;
        } else {
            cartItems.push(itemToAdd);
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Show browser alert
        alert('Item added to cart!');

        // Optionally show in-page confirmation message too
        setConfirmation('Item added to cart!');
        setTimeout(() => setConfirmation(''), 2000);
    };

    return (
        <>
        <div className="Card-Details-Page">
            <img src={product.image} alt={product.title} className="Card-details-image" />

            <div className="Card-details-info">
                <h2>{product.title}</h2>
                <p className="card-details-company">By {product.company}</p>
                <p className="card-deatils-price">₹{product.price}</p>

                <div className="Card-Details-coloroption">
                    <label>Color:</label>
                    <div className="color-options">
                        {product.colors.map((color) => (
                            <button
                                key={color}
                                className={`color-btn ${selectedColor === color ? 'selected' : ''}`}
                                style={{ backgroundColor: color }}
                                onClick={() => setSelectedColor(color)}
                            />
                        ))}
                    </div>
                </div>

                <div className="Card-Details-Size-Selection">
                    <label>Size: </label>
                    <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                        {product.sizes.map((size) => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                </div>

                <div className="Card-Details-Quantity-Selection">
                    <label>Quantity: </label>
                    <input
                        type="number"
                        value={quantity}
                        min={1}
                        max={10}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                </div>

                <div className="Card-Details-Desc">
                    <label>Description:</label>
                    <p>{product.description}</p>
                </div>

                <div className="Card-Details-special-offers">
                    <label>Offers:</label>
                    <ul>
                        {product.offers.map((offer, index) => (
                            <li key={index}>{offer}</li>
                        ))}
                    </ul>
                </div>

                <button className="Card-add-to-cart-btn" onClick={handleAddToCart}>
                    Add to Cart
                </button>

                <Link to="/Shop" className="Card-back-link">← Back to Products</Link>
            </div>
        </div>
        </>
    );
};

export default CardDetails;
