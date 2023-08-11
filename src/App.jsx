import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/01-Footer/01-Footer";
import Header from "./components/02-Header/01-Header";
import GameBoard from "./components/03-GameBoard/01-GameBoard";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);
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

  // Keeping score
  const [scoreArr, setScoreArr] = useState([]);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleScore = (e) => {
    const cardID = e.target.className;
    if (scoreArr.includes(cardID)) {
      alert("Game over. Please start again.");
      setTimeout(location.reload(), 1000);
    } else if (score <= 3) {
      // Adding card to array.
      setScoreArr([...scoreArr, cardID]);
      // setting Score and shuffling images
      setScore(score + 1);
      // Setting up next level if sroce reachs 3.
      if (score === 2) {
        setScoreArr([]);
        setLevel(2);
        setCardNumber(5);
      }
      setImgData(shuffle(imgData));
    } else if (score >= 3 && score < 8) {
      setScoreArr([...scoreArr, cardID]);
      setScore(score + 1);
      setImgData(shuffle(imgData));
      console.log(score);

      if (score === 7) {
        setScoreArr([]);
        setLevel(3);
        setCardNumber(7);
      }
    } else if (score >= 8 && score < 15) {
      setScoreArr([...scoreArr, cardID]);
      setScore(score + 1);
      setImgData(shuffle(imgData));

      if (score === 14) {
        setScoreArr([]);
        setLevel(4);
        setCardNumber(9);
      }
    } else if (score >= 15 && score < 24) {
      setScoreArr([...scoreArr, cardID]);
      setScore(score + 1);
      setImgData(shuffle(imgData));

      if (score === 23) {
        setScoreArr([]);
        setLevel(5);
        setCardNumber(11);
      }
    } else if (score >= 24 && score < 35) {
      setScoreArr([...scoreArr, cardID]);
      setScore(score + 1);
      setImgData(shuffle(imgData));

      if (score === 34) {
        setScoreArr([]);
        setLevel(6);
        setCardNumber(13);
      }
    } else if (score >= 35 && score < 48) {
      setScoreArr([...scoreArr, cardID]);
      setScore(score + 1);
      setImgData(shuffle(imgData));

      if (score === 47) {
        setScoreArr([]);
        setLevel(7);
        setCardNumber(15);
      }
    } else if (score >= 48 && score < 63) {
      setScoreArr([...scoreArr, cardID]);
      setScore(score + 1);
      setImgData(shuffle(imgData));

      if (score === 62) {
        setScoreArr([]);
        setLevel(8);
        setCardNumber(17);
      }
    } else if (score >= 63 && score < 80) {
      setScoreArr([...scoreArr, cardID]);
      setScore(score + 1);
      setImgData(shuffle(imgData));

      if (score === 79) {
        setScoreArr([]);
        setLevel(9);
        setCardNumber(19);
      }
    } else if (score >= 80 && score < 99) {
      setScoreArr([...scoreArr, cardID]);
      setScore(score + 1);
      setImgData(shuffle(imgData));

      if (score === 98) {
        alert("Congrats You finnished the game");
      }
    }
  };

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} level={level} />
      <GameBoard imgData={imgData} handleScore={handleScore} />
      <Footer />
    </div>
  );
}

export default App;
