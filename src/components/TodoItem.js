import React from "react";

const TodoItem = (props) => {
      // first, set up the local variables
    // that our JSX will use:
    const { id, title } = props.todo;
    const cssStyle = {
      textDecoration: props.todo.completed ? "line-through" : "none",
    };

    // Now generate the JSX (the HTML & JS)
    return (
      <div style={cssStyle}>
        <p>
          <input
            type="checkbox"
            onChange={
              // arrow function allows React to run our code later (when the checkbox changes)
              () =>
                // when React does run it, call markComplete with the id for this todo item:
              props.markComplete(id)
            }
          />{" "}
          {title}
        </p>
      </div>
    );

}

export default TodoItem;
