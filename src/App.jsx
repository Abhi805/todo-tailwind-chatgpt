import React, { useState } from "react";
import TodoInput from "./components/TodoInput";

const TodoApp = () => {
  const [todos, setTodos] = useState([]); // State for storing todo items
  const [editId, setEditId] = useState(null); // State for handling edit operations
  const [editText, setEditText] = useState(""); // State for the text of the todo being edited

  // Function to handle adding a new todo
  const handleAddTodo = (newTodo) => {
    if (!newTodo) return; // Prevent adding empty todos
    const newTodos = [...todos, { id: Date.now(), text: newTodo }];
    setTodos(newTodos);
  };

  // Function to handle deleting a todo
  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // Function to handle editing a todo
  const handleEditTodo = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  // Function to update the edited todo
  const handleUpdateTodo = () => {
    if (!editText) return; // Prevent empty updates
    const newTodos = todos.map((todo) =>
      todo.id === editId ? { ...todo, text: editText } : todo
    );
    setTodos(newTodos);
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-200">
      <TodoInput onAddTodo={handleAddTodo} />
      <div className="mt-6 w-96">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center bg-white p-2 rounded shadow mb-2"
          >
            {editId === todo.id ? (
              <input
                type="text"
                className="border-2 p-1"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span>{todo.text}</span>
            )}
            <div>
              {editId === todo.id ? (
                <button
                  onClick={handleUpdateTodo}
                  className="ml-2 bg-blue-500 text-white p-1 rounded"
                >
                  Update
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleEditTodo(todo.id, todo.text)}
                    className="ml-2 bg-green-500 text-white p-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="ml-2 bg-red-500 text-white p-1 rounded"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
