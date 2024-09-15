import { useState } from "react";


const App = () => {
  const [todos, setTodos] = useState([]);
const [inputValue, setInputValue] = useState('');
const [isEditing, setIsEditing] = useState(false);
const [currentTodoIndex, setCurrentTodoIndex] = useState(null);

const addTodo = () => {
  if (inputValue.trim()) {
    setTodos([...todos, inputValue]);
    setInputValue('');
  }
};

const deleteTodo = (index) => {
  const newTodos = todos.filter((todo, i) => i !== index);
  setTodos(newTodos);
};

const startEditing = (index) => {
  setIsEditing(true);
  setCurrentTodoIndex(index);
  setInputValue(todos[index]);
};

const editTodo = () => {
  const newTodos = [...todos];
  newTodos[currentTodoIndex] = inputValue;
  setTodos(newTodos);
  setIsEditing(false);
  setInputValue('');
  setCurrentTodoIndex(null);
};

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Add a new todo"
        />
        <button
          onClick={isEditing ? editTodo : addTodo}
          className={`w-full ${isEditing ? 'bg-green-500' : 'bg-blue-500'} text-white p-2 rounded mb-4`}
        >
          {isEditing ? 'Update Todo' : 'Add Todo'}
        </button>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2"
            >
              {todo}

              <div>
                <button
                  onClick={() => startEditing(index)}
                  className="text-blue-500 mr-36"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
}

export default App
