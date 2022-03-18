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
// type InputFlashcardEvent = {
//   target: {
//     value: string;
//   };
// };
const InputFlashcard: React.FC<InputFlashcardProps> = (props) => {
  const [formText, setFormText] = React.useState("");
  const [wrong, setwrong] = React.useState("");
  const [addQuestion, setAddQuestion] = React.useState(props.data[1].question);
  const [backgroundColor, setBackgroundColor] = React.useState("");

  const handleInputText = (event: any) => {
    console.log(event);
    const value = event.target.value;
    setFormText(value);
  };

  const handleSubmit = (event: any) => {
    // event.preventDefault();
    console.log("ma data", formText);
    formText === props.data[1].answer
      ? setBackgroundColor("bg bg-success")
      : setBackgroundColor("bg bg-danger");

    formText === props.data[1].answer
      ? setwrong("You got it!!")
      : setwrong("Wrong answer :( ");
    setFormText("");
    return addQuestion === formText || props.data[1].answer
      ? setAddQuestion("")
      : null;
  };
  const reset = () => {
    setFormText("");
    setBackgroundColor("");
    setwrong("");
    setAddQuestion(props.data[1].question);
  };

  return (
    <div className={`rounded ${backgroundColor}`}>
      <h1 onClick={reset}>inputFlashcard </h1>
      <p>{wrong}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="question">{addQuestion}</label>

          <hr />
          {formText === addQuestion ? null : (
            <input
              onChange={handleInputText}
              type="text"
              className="form-control"
              id="question"
              placeholder="your answer"
            />
          )}
        </div>
        <br />
        {formText === addQuestion ? null : (
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default InputFlashcard;
