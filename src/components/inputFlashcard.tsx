import React from "react";

const InputFlashcard: React.FC = () => {
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
