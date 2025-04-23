import Image from 'next/image';
import { FC, useState } from 'react';
import styles from './ProductCard.module.css';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { title, image, category, price, description } = product;
  const [imageError, setImageError] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const isOutOfStock = title === "Mens Cotton Jacket";
  const isNewProduct = title === "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops";

  // Generate an optimized alt text that includes product details
  const generateAltText = () => {
    // Take first 10 words of description for alt text if available
    const shortDesc = description ? description.split(' ').slice(0, 10).join(' ') + '...' : '';
    return `${title} - ${category} - $${price} - ${shortDesc}`;
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <article className={styles.productCard}>
      <div className={styles.imageContainer}>
        {isNewProduct && (
          <div className={styles.newProduct}>
            NEW PRODUCT
          </div>
        )}
        {!imageError ? (
          <Image
            src={image}
            alt={generateAltText()}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            className={styles.image}
            loading="lazy"
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg=="
            onError={handleImageError}
          />
        ) : (
          <div className={styles.imageFallback}>
            <span>Image not available</span>
          </div>
        )}
        {isOutOfStock && (
          <div className={styles.outOfStock}>
            OUT OF STOCK
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.productName}>{title}</h3>
        <div className={styles.signInRow}>
          <p className={styles.signInText}>
            Sign in or Create an account to see pricing
          </p>
          <button 
            className={`${styles.wishlistButton} ${isWishlisted ? styles.wishlisted : ''}`} 
            aria-label={isWishlisted ? `Remove ${title} from wishlist` : `Add ${title} to wishlist`}
            onClick={toggleWishlist}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 17.5L9.10749 16.6883C4.75749 12.7475 1.875 10.1142 1.875 6.875C1.875 4.24167 3.99167 2.125 6.625 2.125C8.15083 2.125 9.61417 2.84583 10 3.96417C10.3858 2.84583 11.8492 2.125 13.375 2.125C16.0083 2.125 18.125 4.24167 18.125 6.875C18.125 10.1142 15.2425 12.7475 10.8925 16.6883L10 17.5Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard; 