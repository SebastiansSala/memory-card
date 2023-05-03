import React from "react";
import Score from "./score";

const Header = ({ score, maxScore }) => {
  return (
    <header className="w-full bg-black h-36 flex justify-center items-center">
      <Score score={score} />
      <p className="text-white text-4xl ml-10">Best Score: {maxScore}</p>
    </header>
  );
};

export default Header;
