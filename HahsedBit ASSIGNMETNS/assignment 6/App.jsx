import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "task 1", completed: false },
    { id: 2, text: "task 2", completed: false },
    { id: 3, text: "task 3", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="page">
      <div className="todo-card">
        <h1>Todo List</h1>
        <p className="subtitle">A simple React Todo List App</p>

        <div className="list">
          {todos.map((todo) => (
            <div key={todo.id} className="item">
              <span
                className={todo.completed ? "done" : ""}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>🗑</button>
            </div>
          ))}
        </div>

        <div className="add">
          <input
            type="text"
            placeholder="New Todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={addTodo}>ADD TODO</button>
        </div>
      </div>
    </div>
  );
}

export default App;
