import React from "react";

const Image = ({ image }) => {
  return (
    <img src={image.img} className="w-full object-cover" alt={image.id}></img>
  );
};

export default Image;
