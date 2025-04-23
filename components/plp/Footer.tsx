import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.title}>About Us</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="#" className={styles.link}>Our Story</a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>Careers</a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>Press</a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Customer Service</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="#" className={styles.link}>Contact Us</a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>Shipping</a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>Returns</a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Legal</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="#" className={styles.link}>Privacy Policy</a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>Terms of Service</a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>Follow Us</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="#" className={styles.link}>Instagram</a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>Twitter</a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.link}>Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2024 Your Brand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 