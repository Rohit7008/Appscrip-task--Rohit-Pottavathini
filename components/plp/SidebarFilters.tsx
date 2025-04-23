import React from 'react';
import styles from './SidebarFilters.module.css';

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface SidebarFiltersProps {
  onFilterChange: (filterType: string, value: string) => void;
  selectedFilters: Record<string, string[]>;
}

const SidebarFilters: React.FC<SidebarFiltersProps> = ({
  onFilterChange,
  selectedFilters
}) => {
  const categories: FilterOption[] = [
    { id: 'all', label: 'All Products', count: 150 },
    { id: 'clothing', label: 'Clothing', count: 50 },
    { id: 'accessories', label: 'Accessories', count: 30 },
    { id: 'footwear', label: 'Footwear', count: 40 },
  ];

  return (
    <div className={styles.filters}>
      <div className={styles.section}>
        <h3 className={styles.title}>Categories</h3>
        <ul className={styles.list}>
          {categories.map((category) => (
            <li key={category.id} className={styles.item}>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={selectedFilters.categories?.includes(category.id)}
                  onChange={() => onFilterChange('categories', category.id)}
                />
                <span className={styles.label}>{category.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h3 className={styles.title}>Price Range</h3>
        <div className={styles.priceRange}>
          <input
            type="number"
            className={styles.priceInput}
            placeholder="Min"
            onChange={(e) => onFilterChange('priceMin', e.target.value)}
          />
          <input
            type="number"
            className={styles.priceInput}
            placeholder="Max"
            onChange={(e) => onFilterChange('priceMax', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters; 