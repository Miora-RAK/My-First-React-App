import React from "react";

const MentalFlashcard: React.FC = () => {
  const question: string[] = [];
  const [addFlashcard, setaddFlashcard] = React.useState<string[]>(question);
  const addSolution = (): void => {
    setaddFlashcard(() => {
      return question.map(() => "solution");
    });
  };
  return (
    <div>
      <h1>mentalFlashcard</h1>
      <button onClick={addSolution}>
        How do you call a function named "doSomething"?
      </button>
      {addFlashcard.map((timerList) => {
        return "solution";
      })}
    </div>
  );
};

export default MentalFlashcard;
