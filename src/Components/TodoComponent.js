import { useState } from "react";

/**
 * TODO APPLICATION
 * PUSH TASK INTO ARRAY
 * ['GETUP AT 4AM', 'BRUSH MY TEETH', 'STUDY REACT']
 * CREATE A STATE CALLED TODOS
 */

export default function TodoComponent() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleTodo() {
    let todosCopy = [...todos];
    todosCopy.push(todo);
    setTodos(todosCopy);
  }

  return (
    <div id="todo-form-container">
      <div id="form-header">
        <input
          id="todo"
          placeholder="Enter your task"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleTodo}>Add Task</button>
      </div>
      <div id="form-body">
        <ul>
          {todos.map((t, index) => (
            <li key={`todo-list-item-${index}`}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// TASK1: CREATING FUNCTIONAL COMPONENT
// TASK2: IMPORTING AND USING THE COMPONENTT
// TASK3: SENDING PROPS TO COKMPONENT
// TASK4: USING THE PROPS REVEIVED AND SHOING IT TO USER
// TASK5: CREATING TODO COMPONENT , ADD TODOS , SHOW ALL TODODS IN THE UI
// TASK 4: LIST ALL THE TODS IN THE <ul><li></li>><li></li>><li></li></ul>
