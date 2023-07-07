import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export const TodoParent = () => {
  const startingState = [
    
      { id: 1, title: "go out", completed: false },
      { id: 2, title: "Go home", completed: false },
      { id: 3, title: "Apple sauce", completed: false },
    
  ].sort((a, b) => a.title.localeCompare(b.title));


 const [todoArray, setTodoArray] = useState(startingState); 


 const markComplete = (id) => {
    console.log("Toggling item " + id);
    // This may sound weird, but it may be easier to start at the end
    // and read this in reverse
    // (i.e., start at this.setState(newState); and work your way back up )

    // First, define a function that will be given a specific todo item
    // and toggle it's 'completed' status
    // only if that item's id is the same as the (id) parameter above
    const newArrayOfTodoItems = todoArray.map((todo) => {

      if (todo.id === id) {
        // Only make a copy for the one object that has changed
        todo = { ...todo, completed: !todo.completed };
        // The above line says
        // ..todo           "Copy all the parts of the todo object"
        // completed:       "Go back and replace the completed field with..."
        // !todo.completed  "...the opposite of it's current value"
      }

      // We'll reuse objects that haven't changed,
      // (this wilal also return the new version of the 1 object we want to toggle)
      return todo;
    });

    setTodoArray(newArrayOfTodoItems)

    };
    // create a new 'state' object literal here
    // 'todo' field should be set to a new array of todo items
    // (map produced this new array for us)

    // this.setState(newState);
    
    

    // We could also do all of the above steps in a single statement:
    // this.setState(
    //   // create a new 'state' object literal here
    //   {
    //     // 'todo' field should be set to a new array of todo items
    //     // (map will produce this new array for us)
    //     todo: this.state.todo.map((todo, index) => {
    //       if (todo.id === id) {
    //         // Only make a copy for the one object that has changed
    //         todo = { ...todo, completed: !todo.completed };
    //       }

    //       // We'll reuse objects that haven't changed,
    //       // (this wilal also return the new version of the 1 object we want to toggle)
    //       return todo;
    //     }),
    //   }
    // );

    

    const addTodo = (newTitle) => {
    console.log("addTodo: " + newTitle);

    let hasDuplicate = false;

    todoArray.map((todo) => { 

      if (todo.title === newTitle){
        alert("Duplicate Input");
        hasDuplicate = true;
          
      }
    });

    if(newTitle !== null && newTitle !== " " && !hasDuplicate) {
      console.log("hello");
      const nextIdNumber = todoArray.length + 1;
      const newTodo = { id: nextIdNumber, title: newTitle, completed: false };
      const newTodoArray = [...todoArray, newTodo]; 
  
      newTodoArray.sort((a, b) => a.title.localeCompare(b.title));
      
      // add to the end
      // JavaScript is ok with us changing a const array because
      // the array itself isn't changing ("just" the contents)
      // so it technically doesn't violate const
  
       setTodoArray(newTodoArray);
  

      
   }else{ 
      //  if (newTitle === todoArray.title) {
      //     alert("Duplicate Input");
      alert("Stop");
    };
    
    // This is (hopefully) more clear because it separates out individual steps
   

     
     
  //    //IF ELSE FUNCTION
  //     onClick={() => {
  // if (input.current.value.trim() !== ""){
  //   props.addTodoItem(input.current.value);
  //   input.current.value="";
  // } 
  // else {
  //   alert("Input field can't be empty or only contain spaces.")
  // }
}

    

  

    // const newState = { todo: newTodoArray };
    // this.setState(newState);

    // You can also do this all in a single statement.
    // It actually does all the same steps, just all smooshed together :)
    // this.setState({
    //   todo: [
    //     ...this.state.todo,
    //     { id: this.state.todo.length + 1, title: newTitle, completed: false },
    //   ],
    // })


  // produce a block of HTML/JS (JSX, technically)
  // that will show a single todo item:
  
  const makeOneTodoItem = (prop) => (
    <TodoItem
      key={prop.id} // React wants a unique 'key' for each item
      todo={prop} // This is passed to the TodoItem component
      markComplete={markComplete} // This is passed to the TodoItem component
    />
  );

  
  return ( 
      <div>
        {
          // Run this function once for each item in the todo array:
          todoArray.map(makeOneTodoItem)
        }

        <AddTodo addTodoItem={addTodo} />
      </div>
    )
};

export default TodoParent;
