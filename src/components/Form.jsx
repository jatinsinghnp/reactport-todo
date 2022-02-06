import React, { useState } from "react";
import Todo from "./Todo";
const Form = () => {
  // hooks
  const [inputs, setInputs] = useState(() => "");
  const [todos, setTodos] = useState(() => []);
  //function
  const setTiteInput = (e) => {
    setInputs(e.target.value);
  };
  const todoHandel = (e) => {
    e.preventDefault();
    let data = { inputs };
    if (inputs) {
      setTodos((values) => [...values, data]);
    }
  };
  //returns

  return (
    <div className="wrapper-form">
      <form action="" onSubmit={todoHandel}>
        <input type="text" onChange={setTiteInput} />
        <button>Add</button>
      </form>

      <Todo todos={todos}/>
    </div>
  );
};

export default Form;
