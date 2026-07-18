import './App.css';
import Header from './components/Header.jsx';
import TodoForm from './components/TodoForm.jsx';

const App = () => {
  return (
    <main className="app">
      <section className="todo">
       <Header />
       <TodoForm />
      </section>
    </main>
  );
};

export default App;
