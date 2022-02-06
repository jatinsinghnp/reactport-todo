import React from "react";

const Todo = ({ todos }) => {
  return (
    <div>
      {todos.map((i) => (
        <section>
          <p>{i.inputs}</p>
          <hr />
        </section>
      ))}
    </div>
  );
};

export default Todo;
