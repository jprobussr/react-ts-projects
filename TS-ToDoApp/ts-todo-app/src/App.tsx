import { useState } from 'react';
import './App.css';
import type { Todo } from './types/Todo';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem/TodoItem';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: 'Practice React and TypeScript',
      isCompleted: true,
    },
    {
      id: 2,
      text: 'Go to the gym',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Cook Dinner',
      isCompleted: false,
    },
  ]);

  const [newTodoText, setNewTodoText] = useState('');

  const handleToggleTodo = (id: number): void => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }

        return todo;
      });
    });
  };

  const handleTodoTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setNewTodoText(event.target.value);
  };

  const handleAddTodo = (event: React.SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const trimmedTodo = newTodoText.trim();

    if (trimmedTodo === '') {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: trimmedTodo,
      isCompleted: false,
    };

    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });

    setNewTodoText('');
  };

  return (
    <main className="app">
      <section className="todo">
        <header className="todo__header">
          <p className="todo__eyebrow">Stay Organized</p>
          <h1 className="todo__title">My Tasks</h1>
          <p className="todo__description">
            Add your tasks and keep track of what needs to be done.
          </p>
        </header>

        <TodoForm
          newTodoText={newTodoText}
          onTodoTextChange={handleTodoTextChange}
          onAddTodo={handleAddTodo}
        />

        <TodoList todos={todos} onToggleTodo={handleToggleTodo} />
      </section>
    </main>
  );
};

export default App;
