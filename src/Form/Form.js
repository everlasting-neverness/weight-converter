import React from "react";

function Form(props) {
  return (
    <form>
      <input
        type="number"
        onInput={props.handleUserInput}
        placeholder="Pounds"
      />
    </form>
  );
}

export default Form;
