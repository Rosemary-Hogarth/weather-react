import React from "react";


export default function Search() {
  return (
    <form className="box-button" id="form">
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            className="form-control"
            placeholder="Find your city"
            id="city-search"
          />
        </div>
        <div className="col-4">
          <input type="submit" className="button" value="Search" />
        </div>
      </div>
    </form>
  );
}
