import React from "react";

const loading = () => {
  return (
    <div className="grid">
      <img
        className="h-96 place-self-center"
        src="spinner.svg"
        alt="Loading..."
      />
    </div>
  );
};

export default loading;
