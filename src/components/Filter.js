import React from 'react';

const Filter = ({ handleFilterChange, newFilter , persons}) => {
  
  return (
    <div>
      filter the name you are looking for here
      <input value={newFilter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;



