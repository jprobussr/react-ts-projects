import './App.css';
import type { JobApplication } from './types/JobApplication';
import { useState } from 'react';
import JobForm from './components/JobForm/JobForm';

const App = () => {
  const [application, setApplication] = useState<JobApplication[]>([]);

  return (
    <main className="app">
      <section>
        <h1>Job Tracker</h1>

        <JobForm />
      </section>
    </main>
  );
};

export default App;
