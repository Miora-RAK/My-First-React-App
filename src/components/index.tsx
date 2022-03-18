import React from "react";
import InputFlashcard from "./inputFlashcard";
import MentalFlashcard from "./mentalFlashcard";
import MultipleChoicesFlashcard from "./multipleChoiceFlashcard";
import data from "../data/data";

const Flashcard: React.FC = () => {
  let randomData = data[Math.floor(Math.random() * data.length)];
  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="#">MentalFlashcard</a>
          </li>
          <li>
            <a href="#">InputFlashcard</a>
          </li>
          <li>
            <a href="#">MultipleChoicesFlashcard</a>
          </li>
        </ul>
      </div>
      <div className="row align-items-center">
        <div className="col">
          <MentalFlashcard data={data} />
        </div>
        <div className="col">
          <InputFlashcard data={data} />
        </div>
        <div className="col">
          <MultipleChoicesFlashcard data={data} />
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
