import React from "react";
import "./App.css";
import Flashcard from "./components/index";

const App: React.FC = () => {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <Flashcard />
    </div>
  );
};

export default App;
