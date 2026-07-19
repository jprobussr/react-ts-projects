import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
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
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      });

      return todo;
    });
  };

  return (
    <main className="app">
      <section className="todo">
        <Header />
        <TodoForm onAddTodo={handleAddTodo} />

        <TodoList todos={todos} onToggleTodo={handleToggleTodo} />
      </section>
    </main>
  );
};

export default App;
