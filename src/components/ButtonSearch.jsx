import React from "react";

const ButtonSearch = ({ title, handleCLick }) => {
  return (
    <button onClick={handleCLick} className="btn">
      {title}
    </button>
  );
};

export default ButtonSearch;
