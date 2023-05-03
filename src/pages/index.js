import Main from "./components/main";
import Header from "./components/header";
import { useState } from "react";

const Home = () => {
  const [score, setScore] = useState(0);
  const [cardClicked, setCardClicked] = useState([]);
  const [maxScore, setMaxScore] = useState(0);

  const handleScore = (id) => {
    if (cardClicked.includes(id)) {
      setScore(0);
      setCardClicked([]);
      setMaxScore((prevMaxScore) => {
        return score > prevMaxScore ? score : prevMaxScore;
      });
      return;
    }
    setCardClicked((prevState) => [...prevState, id]);
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <div className="container mx-auto gap-14 w-full h-auto bg-red-500">
      <Header score={score} maxScore={maxScore} />
      <Main handleScore={handleScore} score={score} />
    </div>
  );
};

export default Home;
