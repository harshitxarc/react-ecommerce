import React from 'react';
import { Link } from 'react-router-dom';
import products from '../Data.js';
import './Card.css';

const Card = () => { 
    return (
        <>
        <div className="main-Card-Products">
            {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="main-card-link">
                    <div className="main-card">
                        <img
                            src={product.image || "path/to/placeholder-image.jpg"}
                            alt={product.title}
                            className="main-card-image"
                        />
                        <div className="main-card-information">
                            <h3>{product.title}</h3>
                            <p>{product.company}</p>
                            <p className="main-Card-price">{product.price}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        </>
    );
};

export default Card;
