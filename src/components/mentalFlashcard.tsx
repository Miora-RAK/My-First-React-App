import React from "react";
type Data = {
  id: number;
  type: string;
  question: string;
  answer: string;
  options: string[];
}[];
type MentalFlashcardProps = {
  data: Data;
};
const MentalFlashcard: React.FC<MentalFlashcardProps> = (props) => {
  let randomData = props.data[Math.floor(Math.random() * props.data.length)];
  console.log("random", randomData);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const addSolution = (): void => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="card text-white bg-secondary p-5">
      <div className="card-header">
        <h1>Mental Flashcard</h1>
      </div>
      <div className="card-body" onClick={addSolution}>
        {showAnswer ? (
          <p className="card-text-center">{props.data[0].answer}</p>
        ) : (
          <p className="card-text-center">{props.data[0].question}</p>
        )}
        {/* <button  className="btn btn-light">
          Next
        </button> */}
      </div>
    </div>
  );
};

export default MentalFlashcard;
