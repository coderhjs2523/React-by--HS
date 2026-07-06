import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";

function App() {
  //const [todos, setTodos] = useState([]);

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const addTodo = (todo) => {
    console.log(todo);
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((currTodo) =>
        currTodo.id === id ? updatedTodo : currTodo,
      ),
    );
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((currTodo) => currTodo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((currTodo) =>
        currTodo.id === id
          ? { ...currTodo, completed: !currTodo.completed }
          : currTodo,
      ),
    );
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos && storedTodos.length > 0) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, removeTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((Currtodo) => (
              <div key={Currtodo.id} className="w-full">
                <TodoItem todo={Currtodo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
