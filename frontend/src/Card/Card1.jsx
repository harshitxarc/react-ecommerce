import React from 'react';
import { Link } from 'react-router-dom';
import productdata from '../Data1.js'; 
import './Card.css';

const Card1 = () => {
    return (
        <>
        <div className="main-Card-Products">
            {productdata.map((product) => (
                <Link to={`/product1/${product.id}`} key={product.id} className="main-card-link">
                    <div className="main-card">
                        <img
                            src={product.image} // No process.env here
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

export default Card1;
