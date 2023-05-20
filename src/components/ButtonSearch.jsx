import React from "react";

const ButtonSearch = ({ title, link, handleCLick }) => {
  return (
    <button onClick={handleCLick} href={link} className="btn">
      {title}
    </button>
  );
};

export default ButtonSearch;
