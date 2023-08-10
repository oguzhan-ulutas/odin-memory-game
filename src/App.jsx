import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/01-Footer/01-Footer";
import Header from "./components/02-Header/01-Header";
import GameBoard from "./components/03-GameBoard/01-GameBoard";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardNumber, setCardNumber] = useState(3);
  const [imgData, setImgData] = useState([]);

  //gets imgs from giphy and returns an img array
  const getImgs = async () => {
    const apiKey = "PZ26p8eWS4ZGIZnpoc8eQg7IizuV9qJV";
    const apiUrl = "https://api.giphy.com/v1/gifs/search";

    try {
      const response = await fetch(
        `${apiUrl}?api_key=${apiKey}&limit=${cardNumber}&q=sailboat`
      );
      const data = await response.json();

      setImgData(data.data);

      return;
    } catch {
      alert("Server is busy, please try again later");
    }
  };

  useEffect(() => {
    getImgs();
  }, [cardNumber]);

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      <GameBoard imgData={imgData} />
      <Footer />
    </div>
  );
}

export default App;
