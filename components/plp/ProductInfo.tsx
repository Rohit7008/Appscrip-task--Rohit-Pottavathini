import { FC, useState } from 'react';
import styles from './ProductInfo.module.css';

interface ProductInfoProps {
  itemCount: number;
  onToggleFilter: () => void;
  isFilterVisible: boolean;
}

type SortOption = 'RECOMMENDED' | 'NEWEST FIRST' | 'POPULAR' | 'PRICE : HIGH TO LOW' | 'PRICE : LOW TO HIGH';

const ProductInfo: FC<ProductInfoProps> = ({ itemCount, onToggleFilter, isFilterVisible }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<SortOption>('RECOMMENDED');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortSelect = (sort: SortOption) => {
    setSelectedSort(sort);
    setIsDropdownOpen(false);
  };

  const sortOptions: SortOption[] = [
    'RECOMMENDED',
    'NEWEST FIRST',
    'POPULAR',
    'PRICE : HIGH TO LOW',
    'PRICE : LOW TO HIGH'
  ];

  return (
    <section className={styles.productInfo}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <span className={styles.itemCount}>{itemCount} ITEMS</span>
          <button onClick={onToggleFilter} className={styles.filterButton}>
            {isFilterVisible ? (
              <>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.backArrow}
                >
                  <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                HIDE FILTER
              </>
            ) : (
              <>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.forwardArrow}
                >
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                SHOW FILTER
              </>
            )}
          </button>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.dropdownContainer}>
            <button onClick={toggleDropdown} className={styles.dropdownButton}>
              {selectedSort}
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={`${styles.chevron} ${isDropdownOpen ? styles.chevronUp : ''}`}
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className={styles.dropdown}>
                {sortOptions.map((option) => (
                  <div 
                    key={option}
                    className={`${styles.dropdownItem} ${selectedSort === option ? styles.selected : ''}`}
                    onClick={() => handleSortSelect(option)}
                  >
                    {selectedSort === option && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo; 