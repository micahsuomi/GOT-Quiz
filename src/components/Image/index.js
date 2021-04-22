import React from "react";

import "./style.css";

const Image = ({ img, character }) => {
  return (
    <div className="image">
      <img src={img} alt={character} />
    </div>
  );
};

export default Image;
