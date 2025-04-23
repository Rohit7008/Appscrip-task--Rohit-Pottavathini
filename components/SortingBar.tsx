import '../styles/SortingBar.css';

const SortingBar = () => {
  return (
    <div className="sorting-bar">
      <div className="sorting-bar__left">
        <span className="sorting-bar__results">Showing 1-12 of 36 results</span>
      </div>
      
      <div className="sorting-bar__right">
        <label className="sorting-bar__label">Sort by:</label>
        <select className="sorting-bar__select">
          <option value="newest">Newest First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SortingBar; 