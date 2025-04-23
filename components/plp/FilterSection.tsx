import React from 'react';
import styles from './FilterSection.module.css';

const FilterSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filterSection}>
        <div className={styles.filters}>
          <label className={styles.checkboxGroup}>
            <input type="checkbox" className={styles.checkbox} />
            <span className={styles.checkboxLabel}>CUSTOMIZABLE</span>
          </label>

          <div className={styles.filterGroup}>
            <div className={styles.filterHeader}>
              <span>IDEAL FOR</span>
              <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.filterValue}>All</div>
          </div>

          {/* Repeat for other filter groups */}
          {['OCCASION', 'WORK', 'FABRIC', 'SEGMENT', 'SUITABLE FOR', 'RAW MATERIALS', 'PATTERN'].map((title) => (
            <div key={title} className={styles.filterGroup}>
              <div className={styles.filterHeader}>
                <span>{title}</span>
                <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.filterValue}>All</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection; 