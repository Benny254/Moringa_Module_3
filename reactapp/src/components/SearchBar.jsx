import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search projects..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
         marginBottom: "20px", 
         borderRadius: "5px", 
         padding: "10px", 
         width: "100%",
         border: "1px solid #ccc",
        }}
    />  
  );
}

export default SearchBar;
