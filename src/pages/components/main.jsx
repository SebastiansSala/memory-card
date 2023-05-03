import React from "react";
import Card from "./cards";

const Main = ({ handleScore, score }) => {
  return (
    <div className="h-auto w-full flex flex-wrap p-10 gap-16 justify-center">
      <Card
        handleScore={handleScore}
        score={score}
      ></Card>
    </div>
  );
};

export default Main;
