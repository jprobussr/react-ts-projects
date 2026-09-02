import './App.css';
import type { JobApplication } from './types/JobApplication';
import { useState } from 'react';
import JobForm from './components/JobForm/JobForm';
import JobList from './components/JobList/JobList';

const App = () => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  console.log(`applications: ${applications.length}`);


  const handleAddApplications = (newApplication: JobApplication) => {
    setApplications((prevApplications) => {
      return [...prevApplications, newApplication];
    });
  };

  return (
    <main className="app">
      <section>
        <h1>Job Tracker</h1>

        <JobForm onAddApplication={handleAddApplications}/>
        <JobList applications={applications} />
      </section>
    </main>
  );
};

export default App;
