import React from 'react';
import './SidebarFilters.css';

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
    <aside className="sidebar-filters">
      <div className="sidebar-filters__header">
        <h2 className="sidebar-filters__title">Filters</h2>
        <button className="sidebar-filters__clear">Clear All</button>
      </div>

      <div className="sidebar-filters__section">
        <h3 className="sidebar-filters__section-title">Categories</h3>
        <ul className="sidebar-filters__list">
          {categories.map((category) => (
            <li key={category.id} className="sidebar-filters__item">
              <label className="sidebar-filters__label">
                <input
                  type="checkbox"
                  className="sidebar-filters__checkbox"
                  checked={selectedFilters.categories?.includes(category.id)}
                  onChange={() => onFilterChange('categories', category.id)}
                />
                <span className="sidebar-filters__text">{category.label}</span>
                <span className="sidebar-filters__count">({category.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-filters__section">
        <h3 className="sidebar-filters__section-title">Price Range</h3>
        <div className="sidebar-filters__price">
          <div className="sidebar-filters__price-inputs">
            <input
              type="number"
              placeholder="Min"
              className="sidebar-filters__price-input"
              onChange={(e) => onFilterChange('priceMin', e.target.value)}
            />
            <span className="sidebar-filters__price-separator">-</span>
            <input
              type="number"
              placeholder="Max"
              className="sidebar-filters__price-input"
              onChange={(e) => onFilterChange('priceMax', e.target.value)}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarFilters; 