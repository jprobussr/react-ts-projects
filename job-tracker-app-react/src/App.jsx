import './App.css';
import { useState } from 'react';
import JobForm from './components/JobForm/JobForm.jsx';

const App = () => {
  const [applications, setApplications] = useState([]);

  const handleAddApplication = (newApplication) => {
    setApplications((prevApplications) => {
      return [...prevApplications, newApplication];
    });
  };

  return (
    <main className="app">
      <h1>Job Tracker</h1>

      <JobForm onAddApplication={handleAddApplication} />

      <pre>{JSON.stringify(applications, null, 2)}</pre>
    </main>
  );
};

export default App;
