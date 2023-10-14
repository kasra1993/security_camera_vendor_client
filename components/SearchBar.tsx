"use client";
import React from "react";
// import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";

const SearchBar = () => {
  const [manuFacturer, setmanuFacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar-item">
        {/* <SearchManufacturer
          manufacturer={manuFacturer}
          setManufacturer={setmanuFacturer}
        /> */}
      </div>
    </form>
  );
};

export default SearchBar;
