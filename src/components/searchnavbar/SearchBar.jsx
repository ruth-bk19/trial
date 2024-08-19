import React from "react";
import "./searchbar.css";

const SearchBar = () => {
  return (
    <div class="containerSecond">
      <img src="assets/images/img4.png" alt="images for container"></img>
      <div class="search">
        <div class="btn-group">
          <button class="button">Find care</button>
          <button class="button">Find a job</button>
        </div>
        <div class=" containerSearchBar">
          <input type="text" placeholder="Zip Code" />
          <button type="submit"> Search</button>
        </div>
        <p>services We provide</p>
        <div class="button-group">
          <button>senior care</button>
          <button>child care</button>
          <button>pet care</button>
          <button>housekeeping</button>
          <button>turtoring</button>
        </div>
      </div>
      <img src="assets/images/img5.png" alt="an-icon-x" />
    </div>
  );
};

export default SearchBar;
