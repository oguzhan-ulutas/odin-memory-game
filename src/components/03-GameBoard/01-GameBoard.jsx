import React, { useEffect } from "react";

const GameBoard = (props) => {
  const { imgData } = props;

  const renderedImgData = imgData.map((item) => {
    return (
      <div key={item.id} className={item.id}>
        <img src={item.images.original.url} alt={item.title} />
        <p>{item.title}</p>
      </div>
    );
  });

  return (
    <div className="game-board">
      <div className="cards">{renderedImgData}</div>
    </div>
  );
};

export default GameBoard;
