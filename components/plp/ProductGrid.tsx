import React from 'react';
import styles from './ProductGrid.module.css';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  onAddToCart: (product: Product) => void;
  isFilterVisible?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  isLoading = false, 
  onAddToCart,
  isFilterVisible = true 
}) => {
  const gridClassName = `${styles.productGrid} ${!isFilterVisible ? styles.productGridExpanded : ''}`;

  if (isLoading) {
    return (
      <div className={gridClassName}>
        {[...Array(8)].map((_, index) => (
          <div key={index} className={styles.skeleton} />
        ))}
      </div>
    );
  }

  if (!products?.length) {
    return (
      <div className={gridClassName}>
        <div className={styles.empty}>No products found</div>
      </div>
    );
  }

  return (
    <div className={gridClassName}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid; 