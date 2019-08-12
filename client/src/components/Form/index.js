import React from "react";

//input form component that takes in 3 props.
function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      {/* The htmlFor property sets or returns the value of the for attribute of a labe */}
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        {/* text input form that takes the title of a book */}
        <input
          className="form-control"
          // unique id of input field
          id="Title"
          type="text"
          value={q}
          // default value of Ready Player One
          placeholder="Ready Player One"
          name="q"
          //listens for change by calling handleInputChange argurment which sets state to input value
          onChange={handleInputChange}
          //value required. no null
          required
        />
      </div>
      <div className="pull-right">
        <button
          //listens for submit click then calls handleFormSubmit which prevents default and grabs current state
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
