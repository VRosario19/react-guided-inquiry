import React from "react";

const person = (props) => {
  return (
    <div className="Cards">
      <p>
        {" "}
        Hello, I am {props.name}. I am {props.age} years old . I was born on{" "}
        {props.dob}{" "}
      </p>
    </div>
  );
};

export default person;
