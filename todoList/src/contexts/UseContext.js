import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoMsg: "Learn React",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todoMsg) => {},
    removeTodo: (id) => {},
    toggleTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodoContext = () => {
    return useContext(TodoContext);
}