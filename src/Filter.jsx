import React from 'react';

const Filter = ({ searchTitle, setSearchTitle, searchRating, setSearchRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Search by rating..."
        value={searchRating}
        onChange={(e) => setSearchRating(e.target.value)}
        min="0"
        max="5"
      />
    </div>
  );
};

export default Filter;
