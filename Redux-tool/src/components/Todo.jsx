import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const newText = prompt("Enter new todo", todo.text);

                  if (newText && newText.trim() !== "") {
                    dispatch(
                      updateTodo({
                        id: todo.id,
                        text: newText,
                      }),
                    );
                  }
                }}
                className="text-white bg-blue-500 py-1 px-4 rounded hover:bg-blue-600"
              >
                ✏️
              </button>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-blue-500 py-1 px-4 rounded hover:bg-red-600"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
