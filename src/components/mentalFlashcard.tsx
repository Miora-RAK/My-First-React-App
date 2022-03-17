import React from "react";

const MentalFlashcard: React.FC = () => {
  const question: string = "";
  const [addFlashcard, setaddFlashcard] = React.useState<string>(question);
  const addSolution = (): void => {
    setaddFlashcard(() => {
      return "solution";
    });
  };
  return (
    <div>
      <h1>mentalFlashcard</h1>
      <button onClick={addSolution}>
        How do you call a function named "doSomething"?
      </button>
    </div>
  );
};

export default MentalFlashcard;
