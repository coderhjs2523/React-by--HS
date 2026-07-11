import { Provider } from "react-redux";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { store } from "./app/Store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-slate-900 py-10">
        <div className="w-full max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            📝 Todo App
          </h1>

          <AddTodo />

          <div className="mt-8">
            <Todo />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;