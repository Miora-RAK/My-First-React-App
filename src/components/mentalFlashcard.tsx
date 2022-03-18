import React from "react";
type Data = {
  id: number;
  question: string;
  answer: string;
  options: string[];
}[];
type MentalFlashcardProps = {
  data: Data;
};
const MentalFlashcard: React.FC<MentalFlashcardProps> = (props) => {
  const [showAnswer, setShowAnswer] = React.useState(false);
  const addSolution = (): void => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div>
      <h1>mentalFlashcard</h1>
      <div
        className="bg bg-secondary text-white rounded "
        onClick={addSolution}
      >
        {showAnswer ? props.data[0].answer : props.data[0].question}
      </div>
    </div>
  );
};

export default MentalFlashcard;
