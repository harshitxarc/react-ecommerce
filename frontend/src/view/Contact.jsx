import React from 'react'
import './Contact.css'  
import FooterPage from '../component/FooterPage'

function Contact() {
  return (
    <>
      <section id="Contact-Page" className="Contact-Header"
      style={{
        backgroundImage: "url('Contact/Contact-Page-Header.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
    </section>
    <section id="contacts-details" className="section-1">
        <div className="detail-contact">
            <span>Get In Touch</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i className="fa-solid fa-map-location-dot"></i>
                    <p>857/22, Sector 24, Sonipat, Haryana</p>
                </li>
            </div>
            <div>
                <li>
                    <i className="fa-solid fa-envelope"></i>
                    <p>contact@Veyra.com</p>
                </li>
            </div>
            <div>
                <li>
                    <i className="fa-solid fa-phone"></i>
                    <p>0130 22 2365 /(+91) 9876543210</p>
                </li>
            </div>
            <div>
                <li>
                    <i className="fa-solid fa-clock"></i>
                    <p>Monday to Saturday: 10:00 AM - 6:00 PM</p>
                </li>
            </div>
        </div>
        <div className="Contact-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13961.424498444492!2d76.99375672814874!3d28.9768163293238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dbaa8d7f179f9%3A0x410d3ddbe32c132b!2sSector%2024%2C%20Sonipat%2C%20Haryana%20131001!5e0!3m2!1sen!2sin!4v1745985082501!5m2!1sen!2sin"
                style={{width:"600", height:"450", loading:"lazy", allowfullscreen:"", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
        </div>
    </section>
    <section id="Contact-form">
        <form action="">
            <span>LEAVE A MESSAGE HERE</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name"/>
            <input type="email" placeholder="E-mail"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <button className="normal">Submit</button>
        </form>
        <div className="people-working">
            <div>
                <img src="Contact/1.png" alt=""/>
                <p><span>John Doe</span>Founder & CEO <br/> Phone: (+91) 01 2345 7645 <br/> Email: contact@Veyra.com</p>
            </div>
            <div>
                <img src="Contact/2.png" alt=""/>
                <p><span>Jane Smith</span>Creative Director <br/> Phone: (+91) 01 2345 7645 <br/> Email: contact@Veyra.com</p>
            </div>
            <div>
                <img src="Contact/3.png" alt=""/>
                <p><span>Michael Lee</span>Operations Head <br/> Phone: (+91) 01 2345 7645 <br/> Email: contact@Veyra.com</p>
            </div>
        </div>
    </section>
    <FooterPage />

    </>
  )
}

export default Contact