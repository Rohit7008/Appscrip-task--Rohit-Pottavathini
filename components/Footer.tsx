import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topContainer}>
        <div className={styles.subscribeSection}>
          <h3 className={styles.title}>BE THE FIRST TO KNOW</h3>
          <p className={styles.subtitle}>Sign up for updates from mettā muse.</p>
          <form className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className={styles.emailInput}
              required
            />
            <button type="submit" className={styles.subscribeButton}>
              Subscribe
            </button>
          </form>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.contactSection}>
            <h3 className={styles.title}>CONTACT US</h3>
            <a href="tel:+442211335580" className={styles.contactLink}>
              +44 221 133 5580
            </a>
            <a href="mailto:customercare@mettamuse.com" className={styles.contactLink}>
              customercare@mettamuse.com
            </a>
          </div>

          <div className={styles.currencySection}>
            <h3 className={styles.title}>CURRENCY</h3>
            <div className={styles.currencySelector}>
              <Image
                src="/usa-flag.svg"
                alt="United States Dollar currency selection - USD"
                width={24}
                height={24}
                className={styles.flag}
                loading="lazy"
              />
              <span className={styles.currencyCode}>USD</span>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      {/* Bottom Section */}
      <div className={styles.bottomContainer}>
        <div className={styles.footerColumns}>
          {/* Brand Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.brandName}>mettā muse</h3>
            <nav className={styles.columnLinks}>
              <Link href="/about-us">About Us</Link>
              <Link href="/stories">Stories</Link>
              <Link href="/artisans">Artisans</Link>
              <Link href="/boutiques">Boutiques</Link>
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/eu-compliance">EU Compliances Docs</Link>
            </nav>
          </div>

          {/* Quick Links Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>QUICK LINKS</h3>
            <nav className={styles.columnLinks}>
              <Link href="/orders-shipping">Orders & Shipping</Link>
              <Link href="/join-as-seller">Join/Login as a Seller</Link>
              <Link href="/payment-pricing">Payment & Pricing</Link>
              <Link href="/return-refunds">Return & Refunds</Link>
              <Link href="/faqs">FAQs</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </nav>
          </div>

          {/* Follow Us Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>FOLLOW US</h3>
            <div className={styles.socialLinks}>
              <Link href="https://instagram.com" className={styles.socialLink} aria-label="Follow mettā muse on Instagram">
                <Image 
                  src="/instagram.svg" 
                  alt="mettā muse Instagram profile" 
                  width={24} 
                  height={24}
                  loading="lazy" 
                />
              </Link>
              <Link href="https://linkedin.com" className={styles.socialLink} aria-label="Follow mettā muse on LinkedIn">
                <Image 
                  src="/linkedin.svg" 
                  alt="mettā muse LinkedIn company page" 
                  width={24} 
                  height={24} 
                  loading="lazy"
                />
              </Link>
            </div>

            {/* Payment Methods */}
            <div className={styles.paymentSection}>
              <h4 className={styles.paymentTitle}>mettā muse Accepts</h4>
              <div className={styles.paymentMethods}>
                <Image 
                  src="/gpay.svg" 
                  alt="Pay with Google Pay" 
                  width={48} 
                  height={32} 
                  quality={100}
                  loading="lazy" 
                />
                <Image 
                  src="/mastercard.svg" 
                  alt="Pay with Mastercard" 
                  width={48} 
                  height={32} 
                  quality={100}
                  loading="lazy" 
                />
                <Image 
                  src="/paypal.svg" 
                  alt="Pay with PayPal" 
                  width={48} 
                  height={32} 
                  quality={100}
                  loading="lazy" 
                />
                <Image 
                  src="/apple-pay.svg" 
                  alt="Pay with Apple Pay" 
                  width={48} 
                  height={32} 
                  quality={100}
                  loading="lazy" 
                />
                <Image 
                  src="/shop-pay.svg" 
                  alt="Pay with Shop Pay" 
                  width={48} 
                  height={32} 
                  quality={100}
                  loading="lazy" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 