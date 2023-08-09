import { useState } from "react";
import "./App.css";
import Footer from "./components/01-Footer/01-Footer";
import Header from "./components/02-Header/01-Header";
import GameBoard from "./components/03-GameBoard/01-GameBoard";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardNumber, setCardNumber] = useState(3);

  const getImgs = async () => {
    const apiKey = "PZ26p8eWS4ZGIZnpoc8eQg7IizuV9qJVY";
    const apiUrl = "https://api.giphy.com/v1/gifs/search";
    try {
      const response = await fetch(
        `${apiUrl}?api_key${apiKey}&limit=${cardNumber}&q=sailboat`,
        {
          mode: "cors",
        }
      );
      const imgData = await response.data;

      return imgData;
    } catch {
      alert("Server is busy, please try again later");
    }
  };
  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      <GameBoard getImgs={getImgs} />
      <Footer />
    </div>
  );
}

export default App;
