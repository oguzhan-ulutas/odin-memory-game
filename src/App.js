import React from "react";

import Footer from "./components/01-footer/01-Footer";
import Header from "./components/02-Header/01-Header";
import GameBoard from "./components/03-GameBoard/01-GameBoard";

function App() {
  return (
    <div className="app">
      <Header />
      <GameBoard />
      <Footer />
    </div>
  );
}

export default App;
