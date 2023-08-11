import React, { useEffect } from "react";

const Header = (props) => {
  const { score, bestScore, level, loadBestScore } = props;

  useEffect(() => {
    loadBestScore();
  }, []);

  return (
    <div className="header">
      <h1>Memory Game</h1>
      <div className="rule">Never choose the same image twice!!!</div>
      <div className="score">
        <div>Score : {score}</div>
        <div>Best Score : {bestScore}</div>
        <div>Level : {level}</div>
      </div>
    </div>
  );
};

export default Header;
