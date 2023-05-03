import React from "react";
import Score from "./score";

const Header = ({ score }) => {
  return (
    <header className="w-full bg-black h-36 flex justify-center items-center">
      <Score score={score} />
    </header>
  );
};

export default Header;
