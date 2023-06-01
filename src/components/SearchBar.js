import React from "react";

function SearchBar({ sortBy, onChangeSort, filterBy, onChangeFilter }) {
  function handleSortChange(event) {
    onChangeSort(event.target.value);
  }

  function handleFilterChange(event) {
    onChangeFilter(event.target.value);
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy === "Alphabetically"}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy === "Price"}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange} value={filterBy}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;


// import React from "react";

// function Search() {
//   return (
//     <div className="ui large fluid icon input">
//       <input
//         type="text"
//         placeholder="Search your Recent Transactions"
//         onChange={() => console.log("Searching...")}
//       />
//       <i className="circular search link icon"></i>
//     </div>
//   );
// }

// export default Search;

// import React from "react";

// function Search({ handleSearch }) {
//   return (
//     <div className="ui large fluid icon input">
//       <input type="text" placeholder="Search your Recent Transactions" onChange={handleSearch} />
//       <i className="circular search link icon"></i>
//     </div>
//   );
// }

// export default Search;