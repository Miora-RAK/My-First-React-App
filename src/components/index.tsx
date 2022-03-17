import React from "react";
import InputFlashcard from "./inputFlashcard";
import MentalFlashcard from "./mentalFlashcard";
import MultipleChoicesFlashcard from "./multipleChoiceFlashcard";

const Flashcard: React.FC = () => {
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
          <MentalFlashcard />
        </div>
        <div className="col">
          <InputFlashcard />
        </div>
        <div className="col">
          <MultipleChoicesFlashcard />
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
