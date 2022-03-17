import React from "react";
type Data = {
  id: number;
  question: string;
  answer: string;
  options: string[];
}[];
type InputFlashcardProps = {
  data: Data;
};
const InputFlashcard: React.FC<InputFlashcardProps> = (props) => {
  return (
    <div>
      <h1>inputFlashcard</h1>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">
            Which operator is used to assign a value to a variable ?
          </label>
          <hr />
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="your answer"
          />
        </div>
        <p></p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputFlashcard;
