import React, { useEffect } from "react";

const GameBoard = (props) => {
  const { imgData, handleScore, loading, level } = props;

  const renderedImgData = imgData.map((item) => {
    return (
      <div key={item.id} className={item.id} onClick={handleScore}>
        <img
          className={item.id}
          src={item.images.original.url}
          alt={item.title}
        />
        <p className={item.id}>{item.title}</p>
      </div>
    );
  });

  return (
    <div className="game-board">
      {loading ? (
        <div className="loading">Loading... Level : {level}</div>
      ) : (
        <div className="cards">{renderedImgData}</div>
      )}
    </div>
  );
};

export default GameBoard;
