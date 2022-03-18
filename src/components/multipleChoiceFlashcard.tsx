import React from "react";

type Data = {
  id: number;
  question: string;
  answer: string;
  options: string[];
}[];
type MultipleChoicesFlashcardProps = {
  data: Data;
};
const MultipleChoicesFlashcard: React.FC<MultipleChoicesFlashcardProps> = (
  props
) => {
  const [answerSelected, setAnswerSelected] = React.useState(false);
  const handleAnswerSelected = () => {
    setAnswerSelected((event: any) => {
      console.log("multiple", event);
      return !answerSelected;
    });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = JSON.stringify(answerSelected);
    console.log(data);
  };
  return (
    <div>
      <h1>multipleChoicesFlashcard</h1>
      <p>Inside which HTML element do we put the Javascript ?</p>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          checked={answerSelected}
          onChange={handleAnswerSelected}
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          &lt;script&gt;
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          &lt;scripting&gt;
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          &lt;javascript&gt;
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios3"
          value="option3"
          disabled
        />
        <label className="form-check-label" htmlFor="exampleRadios3">
          Disabled
        </label>
      </div>
      <button
        onSubmit={handleSubmit}
        type="submit"
        className="btn btn-primary "
      >
        Submit
      </button>
    </div>
  );
};

export default MultipleChoicesFlashcard;
