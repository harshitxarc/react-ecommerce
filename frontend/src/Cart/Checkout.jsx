import React, { useEffect, useState } from 'react';
import './Checkout.css';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const [discount, setDiscount] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        phone: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(items);

        const storedDiscount = localStorage.getItem('coupon') === 'summer5' ? 0.05 : 0;
        setDiscount(storedDiscount);
    }, []);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const getTotal = () => {
        const subtotal = cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
            return total + price * item.quantity;
        }, 0);
        return (subtotal * (1 - discount)).toFixed(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Order placed successfully!');
        localStorage.removeItem('cartItems');
        localStorage.removeItem('coupon');
        navigate('/Shop');
    };

    if (cartItems.length === 0) {
        return (
            <div className="checkout-empty">
                <p>Your cart is empty.</p>
                <Link to="/Shop" className="checkout-back">← Back to Shop</Link>
            </div>
        );
    }

    return (
        <>
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="checkout-content">
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <h3>Shipping Information</h3>
                    <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
                    <input type="text" name="address" placeholder="Address" required value={formData.address} onChange={handleChange} />
                    <input type="text" name="city" placeholder="City" required value={formData.city} onChange={handleChange} />
                    <input type="text" name="postalCode" placeholder="Postal Code" required value={formData.postalCode} onChange={handleChange} />
                    <input type="text" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
                    <button type="submit">Place Order</button>
                </form>

                <div className="checkout-summary">
                    <h3>Order Summary</h3>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                <div className="checkout-summary-item">
                                    <img src={item.image || 'path/to/placeholder.jpg'} alt={item.name} className="checkout-summary-img" />
                                    <div>
                                        <p>{item.name}</p>
                                        <p>Qty: {item.quantity}</p>
                                        <p>₹{(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p><strong>Shipping:</strong> Free</p>
                    {discount > 0 && <p><strong>Discount:</strong> 5% applied</p>}
                    <h4>Total: ₹{getTotal()}</h4>
                    <Link to="/Cart" className="checkout-back">← Back to Cart</Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Checkout;
