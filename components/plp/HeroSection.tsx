import React from 'react';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  pageTitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ pageTitle }) => {
  return (
    <section className={styles.heroSection}>
      <h2 className={styles.heading}>Discover our products</h2>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
    </section>
  );
};

export default HeroSection; 