import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todoText) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: todoText,
      isCompleted: false,
    };

    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const handleToggleTodo = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
    });
  };

  return (
    <main className="app">
      <section className="todo-app">
        <h1>Todo List</h1>

        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList todos={todos} onToggleTodo={handleToggleTodo} />
      </section>
    </main>
  );
};

export default App;
