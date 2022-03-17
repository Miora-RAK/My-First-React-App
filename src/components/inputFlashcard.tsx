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
type InputFlashcardEvent = {
  target: {
    value: string;
  };
};
const InputFlashcard: React.FC<InputFlashcardProps> = (props) => {
  const [formText, setFormText] = React.useState("");
  const [wrong, setwrong] = React.useState("");
  const isItTrue = (text: string) => {};
  const handleInputText = (event: InputFlashcardEvent) => {
    console.log(typeof event);
    const value = event.target.value;
    setFormText(event.target.value);
    value ? setwrong("Wrong answer :(") : setwrong("You got it!!");
  };
  return (
    <div>
      <h1>inputFlashcard</h1>
      <form>
        <div className="form-group">
          <label htmlFor="question">{props.data[1].question}</label>
          <hr />
          <input
            onChange={handleInputText}
            type="text"
            className="form-control"
            id="question"
            placeholder="your answer"
            value={formText}
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
