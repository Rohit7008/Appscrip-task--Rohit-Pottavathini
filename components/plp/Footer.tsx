import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__section">
            <h4 className="footer__title">Shop</h4>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">New Arrivals</a></li>
              <li><a href="#" className="footer__link">Best Sellers</a></li>
              <li><a href="#" className="footer__link">Sale</a></li>
              <li><a href="#" className="footer__link">Collections</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Help</h4>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Contact Us</a></li>
              <li><a href="#" className="footer__link">Shipping Info</a></li>
              <li><a href="#" className="footer__link">Returns</a></li>
              <li><a href="#" className="footer__link">FAQ</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">About</h4>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Our Story</a></li>
              <li><a href="#" className="footer__link">Sustainability</a></li>
              <li><a href="#" className="footer__link">Careers</a></li>
              <li><a href="#" className="footer__link">Press</a></li>
            </ul>
          </div>

          <div className="footer__section footer__newsletter">
            <h4 className="footer__title">Stay Connected</h4>
            <p className="footer__text">Subscribe to our newsletter for updates and exclusive offers.</p>
            <form className="footer__form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__input"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="footer__button">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 2024 Your Brand. All rights reserved.</p>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Facebook">FB</a>
            <a href="#" className="footer__social-link" aria-label="Instagram">IG</a>
            <a href="#" className="footer__social-link" aria-label="Twitter">TW</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 