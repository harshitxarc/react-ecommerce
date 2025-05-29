import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index, value) => {
    const updatedCart = [...cartItems];
    const updatedItem = { ...updatedCart[index] };
    const newQuantity = Math.max(1, parseInt(value, 10)); // Ensures quantity is at least 1
    updatedItem.quantity = newQuantity;
    updatedCart[index] = updatedItem;
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const handleCouponApply = () => {
    if (coupon.toLowerCase() === 'summer5') {
      setDiscount(0.05);
      alert('5% discount applied!');
    } else {
      alert('Invalid coupon code');
    }
  };

  const getTotal = () => {
    const subtotal = cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
      return total + price * item.quantity;
    }, 0);
    return (subtotal * (1 - discount)).toFixed(2);
  };

  return (
    <>
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button className='back-to-shop-empty'>
          <Link to="/Shop" className="back-to-shop-empty">← Back to Shop</Link></button>
        </div>
      ) : (
        <>
        <div className="cart-table-header">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Remove</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => {
                const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
                return (
                  <tr key={index}>
                    <td data-label="Remove">
                      <button className="product-remove-btn" onClick={() => handleRemove(index)}><i className="fa-solid fa-circle-xmark"></i> </button>
                    </td>
                    <td data-label="Image">
                      <img src={item.image || 'path/to/placeholder.jpg'} alt={item.name} className="cart-img" />
                    </td>
                    <td data-label="Product">{item.name}</td>
                    <td data-label="Price">₹{price.toFixed(2)}</td>
                    <td data-label="Quantity">
                      <input
                        type="number"
                        value={item.quantity || 1}
                        min="1"
                        onChange={(e) => handleQuantityChange(index, e.target.value)}
                      />
                    </td>
                    <td data-label="Total">₹{(price * item.quantity).toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
          <br /><br />

          <div className="cart-footer">
            <div className="coupon-section">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
              />
              <button onClick={handleCouponApply}>Apply Coupon</button>
            </div>

            <div className="checkout-section">
              <h3>Cart Total</h3>
              <table border={1} cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td>₹{getTotal()}</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td><strong>Total</strong></td>
                    <td><h3>₹{getTotal()}</h3></td>
                  </tr>
                </tbody>
              </table>
              <button className="checkout-btn">
                <Link to="/Checkout" className="checkout-btn-link">Proceed to Checkout</Link>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default Cart;
