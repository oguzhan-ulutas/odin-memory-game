import React from "react";

const Header = (props) => {
  const { score, bestScore } = props;
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <div className="score">
        <div>Score : {score}</div>
        <div>Best Score : {bestScore}</div>
      </div>
    </div>
  );
};

export default Header;
