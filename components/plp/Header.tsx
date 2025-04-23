import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.announcementBar}>
        <div className={styles.announcementContainer}>
          <div className={styles.announcement}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M14.6667 8.00016C14.6667 11.6802 11.6801 14.6668 8.00004 14.6668C4.32004 14.6668 1.33337 11.6802 1.33337 8.00016C1.33337 4.32016 4.32004 1.3335 8.00004 1.3335C11.6801 1.3335 14.6667 4.32016 14.6667 8.00016Z" stroke="#E6007E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.4733 10.1202L8.40663 8.88684C8.04663 8.6735 7.75329 8.16017 7.75329 7.74017V5.00684" stroke="#E6007E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Learn about SALE</span>
          </div>
          <div className={styles.announcement}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M14.6667 8.00016C14.6667 11.6802 11.6801 14.6668 8.00004 14.6668C4.32004 14.6668 1.33337 11.6802 1.33337 8.00016C1.33337 4.32016 4.32004 1.3335 8.00004 1.3335C11.6801 1.3335 14.6667 4.32016 14.6667 8.00016Z" stroke="#E6007E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.4733 10.1202L8.40663 8.88684C8.04663 8.6735 7.75329 8.16017 7.75329 7.74017V5.00684" stroke="#E6007E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Learn about SALE</span>
          </div>
          <div className={styles.announcement}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M14.6667 8.00016C14.6667 11.6802 11.6801 14.6668 8.00004 14.6668C4.32004 14.6668 1.33337 11.6802 1.33337 8.00016C1.33337 4.32016 4.32004 1.3335 8.00004 1.3335C11.6801 1.3335 14.6667 4.32016 14.6667 8.00016Z" stroke="#E6007E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.4733 10.1202L8.40663 8.88684C8.04663 8.6735 7.75329 8.16017 7.75329 7.74017V5.00684" stroke="#E6007E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Learn about SALE</span>
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.mainHeader}>
          <Link href="/" className={styles.logoWrapper} aria-label="mettā muse home page">
            <Image 
              src="/PLP/Logo.png"
              alt="mettā muse official brand logo"
              width={36.00003}
              height={36}
              className={styles.logoImage}
              priority={true}
            />
          </Link>

          <div className={styles.centerContent}>
            <h1 className={styles.logoText}>mettā&nbsp;muse</h1>
            <nav className={styles.mainNav}>
              <Link href="/shop" className={styles.navLink}>SHOP</Link>
              <Link href="/skills" className={styles.navLink}>SKILLS</Link>
              <Link href="/stories" className={styles.navLink}>STORIES</Link>
              <Link href="/about" className={styles.navLink}>ABOUT</Link>
              <Link href="/contact" className={styles.navLink}>CONTACT&nbsp;US</Link>
            </nav>
          </div>

          <div className={styles.headerActions}>
            <button className={styles.actionButton} aria-label="Search for products">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 17.5L13.875 13.875" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.actionButton} aria-label="View your wishlist">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10.5167 17.3417C10.2333 17.4417 9.76666 17.4417 9.48332 17.3417C7.06666 16.5167 1.66666 13.075 1.66666 7.24167C1.66666 4.66667 3.74166 2.58334 6.29999 2.58334C7.81666 2.58334 9.15832 3.31667 9.99999 4.45C10.8417 3.31667 12.1917 2.58334 13.7 2.58334C16.2583 2.58334 18.3333 4.66667 18.3333 7.24167C18.3333 13.075 12.9333 16.5167 10.5167 17.3417Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.actionButton} aria-label="View your shopping cart">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2.5 2.5H3.99167C4.82501 2.5 5.48334 3.24167 5.41667 4.06667L4.76667 11.8333C4.65834 13.1167 5.68334 14.2333 6.97501 14.2333H15.1583C16.275 14.2333 17.2417 13.3333 17.325 12.225L17.75 6.56667C17.8417 5.25834 16.8333 4.19167 15.5167 4.19167H5.16667" stroke="black" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.5417 18.3333C14.0733 18.3333 14.5 17.9067 14.5 17.375C14.5 16.8433 14.0733 16.4167 13.5417 16.4167C13.01 16.4167 12.5833 16.8433 12.5833 17.375C12.5833 17.9067 13.01 18.3333 13.5417 18.3333Z" stroke="black" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.87501 18.3333C7.40668 18.3333 7.83334 17.9067 7.83334 17.375C7.83334 16.8433 7.40668 16.4167 6.87501 16.4167C6.34334 16.4167 5.91667 16.8433 5.91667 17.375C5.91667 17.9067 6.34334 18.3333 6.87501 18.3333Z" stroke="black" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.actionButton} aria-label="Access your account">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10 10C12.3012 10 14.1667 8.13452 14.1667 5.83333C14.1667 3.53214 12.3012 1.66667 10 1.66667C7.69881 1.66667 5.83334 3.53214 5.83334 5.83333C5.83334 8.13452 7.69881 10 10 10Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.1583 18.3333C17.1583 15.1083 13.95 12.5 10 12.5C6.05001 12.5 2.84167 15.1083 2.84167 18.3333" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.langButton} aria-label="Change language">
              ENG
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header; 