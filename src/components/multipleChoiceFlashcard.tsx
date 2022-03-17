import React from "react";

const MultipleChoicesFlashcard: React.FC = () => {
  return (
    <div>
      <h1>multipleChoicesFlashcard</h1>
      <p>Inside which HTML element do we put the Javascript ?</p>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          checked
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
      <button type="submit" className="btn btn-primary ">
        Submit
      </button>
    </div>
  );
};

export default MultipleChoicesFlashcard;
