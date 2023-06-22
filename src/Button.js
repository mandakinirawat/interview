import React from "react";

const Button = ({ handleSubmit }) => {
  return (
    <div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Button;
