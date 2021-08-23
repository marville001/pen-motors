import React from "react";

const FilterForm = () => {
  return (
    <div className="page-container filter-container">
      <div class="form-group mb-2">
        <select class="form-control">
          <option>Model</option>
          <option>Sedan </option>
          <option>Coupe</option>
          <option>Sports Car</option>
          <option>Hatch Back</option>
        </select>
      </div>
      <div class="form-group mb-2">
        <select class="form-control">
          <option>Make</option>
          <option>Ford</option>
          <option>Chevrolet</option>
          <option>Cadillac</option>
          <option>Jeep</option>
        </select>
      </div>
      <div class="form-group mb-2">
        <select class="form-control">
          <option>Year</option>
          <option value="2010">2010</option>
          <option value="2015">2015</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary mb-2">
        Filter
      </button>
    </div>
  );
};

export default FilterForm;
