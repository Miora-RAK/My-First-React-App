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
  const [addQuestion, setAddQuestion] = React.useState(props.data[2].question);
  const [answerSelected, setAnswerSelected] = React.useState("");
  const [backgroundColor, setBackgroundColor] = React.useState("");
  const [wrong, setwrong] = React.useState("");

  // const handleAnswerSelected = () => {
  //   setAnswerSelected((event: any) => {
  //     console.log("multiple", event);
  //     return answerSelected === props.data[2].answer ? "false" : "true";
  //   });
  // };
  // const handleSubmit = (event: any) => {
  //   // event.preventDefault();
  //   const data = JSON.stringify(answerSelected);
  //   console.log(data);
  // };
  const handleInputText = (event: any) => {
    console.log("mon event", event);

    const checked = event.target.value;
    setAnswerSelected(checked);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("madata", answerSelected);
    console.log("wrong", wrong);
    answerSelected === "<script>"
      ? setBackgroundColor("bg bg-success")
      : setBackgroundColor("bg bg-danger");

    answerSelected === "<script>"
      ? setwrong("You got it!!")
      : setwrong("Wrong answer :( ");
    // setAnswerSelected();
    return addQuestion === props.data[2].question || props.data[2].answer
      ? setAddQuestion("")
      : null;
  };
  const reset = () => {
    setAnswerSelected("");
    setBackgroundColor("");
    setwrong("");
    setAddQuestion(props.data[2].question);
  };
  return (
    <div className={`rounded ${backgroundColor}`}>
      <h1 onClick={reset}>multipleChoicesFlashcard</h1>
      <p>{wrong}</p>
      <p>{addQuestion}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-check" id="1">
          <input
            className="form-check-input"
            type="radio"
            name="answer"
            id="<script>"
            onChange={handleInputText}
            value="<script>"
          />

          <label className="form-check-label" htmlFor="script">
            {/* {props.data[2].options.map((e) => e)} &lt;script&gt; */}
            {props.data[2].options[2]}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="answer"
            id="<scripting>"
            onChange={handleInputText}
            value="<scripting>"
          />
          <label className="form-check-label" htmlFor="scripting">
            {props.data[2].options[1]}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="answer"
            id="<javascript>"
            onChange={handleInputText}
            value="<javascript>"
          />
          <label className="form-check-label" htmlFor="javascript">
            {props.data[2].options[0]}
          </label>
        </div>
        <br />
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MultipleChoicesFlashcard;
