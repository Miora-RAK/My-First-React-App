import React from "react";
import InputFlashcard from "./inputFlashcard";
import MentalFlashcard from "./mentalFlashcard";
import MultipleChoicesFlashcard from "./multipleChoiceFlashcard";
import data from "../data/data";

const Flashcard: React.FC = () => {
  const [onClick, setOnClick] = React.useState(false);
  const [clickValue, setclickValue] = React.useState("");

  const handleOnClick = (event: any) => {
    console.log("click", onClick);
    const value = event.target.value;
    console.log("click", value);
    setclickValue(value);
    setOnClick(!onClick);
  };
  return (
    <div>
      <div>
        <button onClick={handleOnClick} value={data[0].type}>
          MentalFlashcard
        </button>
        <button onClick={handleOnClick} value={data[1].type}>
          InputFlashcard
        </button>
        <button onClick={handleOnClick} value={data[2].type}>
          MultipleChoicesFlashcard
        </button>
      </div>
      {onClick && clickValue === data[0].type ? (
        <div className="position-absolute top-50 start-50 translate-middle">
          <MentalFlashcard data={data} />
        </div>
      ) : null}
      {onClick && clickValue === data[1].type ? (
        <div className="position-absolute top-50 start-50 translate-middle">
          <InputFlashcard data={data} />
        </div>
      ) : null}
      {onClick && clickValue === data[2].type ? (
        <div className="position-absolute top-50 start-50 translate-middle">
          <MultipleChoicesFlashcard data={data} />
        </div>
      ) : null}
    </div>
  );
};

export default Flashcard;
