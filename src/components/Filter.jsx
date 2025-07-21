import React, { useState } from "react";

function Filter() {
  const [filters, setFilters] = useState({
    veg: false,
    nonveg: false,
    cafe: false,
    offers: false,
    price: 500,
    rating: "",
  });

  const handleCheckboxChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.checked });
  };

  const handlePriceChange = (e) => {
    setFilters({ ...filters, price: parseInt(e.target.value) });
  };

  const handleRatingChange = (e) => {
    setFilters({ ...filters, rating: e.target.value });
  };

  return (
    <div className="bg-white p-4 rounded shadow w-full max-w-xs">
      <h2 className="text-lg font-bold mb-3">Filters</h2>

      {/* Checkbox filters */}
      <div className="flex flex-col gap-2 mb-4">
        <label>
          <input type="checkbox" name="veg" onChange={handleCheckboxChange} />{" "}
          Veg
        </label>
        <label>
          <input
            type="checkbox"
            name="nonveg"
            onChange={handleCheckboxChange}
          />{" "}
          Non-Veg
        </label>
        <label>
          <input type="checkbox" name="cafe" onChange={handleCheckboxChange} />{" "}
          Cafe Items
        </label>
        <label>
          <input
            type="checkbox"
            name="offers"
            onChange={handleCheckboxChange}
          />{" "}
          Offers
        </label>
      </div>

      {/* Price range filter */}
      <div className="mb-4">
        <label className="font-medium">Price: ₹0 - ₹{filters.price}</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={filters.price}
          onChange={handlePriceChange}
          className="w-full"
        />
      </div>

      {/* Rating dropdown (optional) */}
      <div>
        <label className="font-medium">Rating:</label>
        <select
          name="rating"
          onChange={handleRatingChange}
          className="block w-full mt-1 border rounded p-1"
        >
          <option value="">All</option>
          <option value="4">4★ & above</option>
          <option value="3">3★ & above</option>
          <option value="2">2★ & above</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
