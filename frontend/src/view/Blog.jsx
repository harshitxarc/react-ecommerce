import React from 'react'
import { Link } from 'react-router-dom';  // Import the Link component
import './Blog.css'
import FooterPage from '../component/FooterPage';
 
function Blog() {
  return (
    <>
    <section id="Blog-Page-Header" className="blog-header"
          style={{
            backgroundImage: "url('Blog/Blog-Top-Banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
        <h2>Fashion Journal</h2>
        <p>Get inspired by the latest trends, stories, and insider tips from Veyra.</p>
    </section>
    <section id="Blog-Page">
        <div className="blog-box">
            <div className="blog-img">
                <img src="Blog/b1.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersey Zip-Up Hoodies</h4>
                <p>
                    It offers a comfortable and versatile layering piece, characterized
                    by its soft breathable jersey fabric.
                 </p>
                 <Link to="#">CONTINUE READING</Link>
            </div>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src="Blog/b2.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>How to Style a Quiff</h4>
                <p>
                    It offers a comfortable and versatile layering piece, characterized
                    by its soft breathable jersey fabric.
                 </p>
                 <Link to="#">CONTINUE READING</Link>
            </div>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src="Blog/b3.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>Must-Have Skater Girl Items</h4>
                <p>
                    It offers a comfortable and versatile layering piece, characterized
                    by its soft breathable jersey fabric.
                 </p>
                 <Link to="#">CONTINUE READING</Link>
            </div>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src="Blog/b4.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>Runaway-Inspired Trends</h4>
                <p>
                    It offers a comfortable and versatile layering piece, characterized
                    by its soft breathable jersey fabric.
                 </p>
                 <Link to="#">CONTINUE READING</Link>
            </div>
        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src="Blog/b5.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>AW20 Menswear Trends</h4>
                <p>
                    It offers a comfortable and versatile layering piece, characterized
                    by its soft breathable jersey fabric.
                 </p>
                 <Link to="#">CONTINUE READING</Link>
            </div>
        </div>
    </section>
    <FooterPage />
    </>
  )
}
export default Blog