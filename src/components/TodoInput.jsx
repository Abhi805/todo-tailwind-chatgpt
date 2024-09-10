import React, { useState } from "react";

const TodoInput = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  // Function to handle input submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue(""); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-96">
      <input
        className="border-2 min-w-72 min-h-9 border-slate-700 rounded-md flex-1 p-2"
        type="text"
        placeholder="Enter new todo item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold ml-2 py-1.5 px-3 rounded-lg"
      >
        +
      </button>
    </form>
  );
};

export default TodoInput;
