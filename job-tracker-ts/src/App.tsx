import './App.css';
import type { JobApplication, JobStatus } from './types/JobApplication';
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

  const handleStatusChange = (id: string, newStatus: JobStatus) => {
    setApplications((prevApplications) => {
      return prevApplications.map((application) => {
        if (application.id === id) {
          return {
            ...application,
            status: newStatus,
          };
        }

        return application;
      });
    });
  };

  return (
    <main className="app">
      <section>
        <h1>Job Tracker</h1>

        <JobForm onAddApplication={handleAddApplications} />
        <JobList
          applications={applications}
          onStatusChange={handleStatusChange}
        />
      </section>
    </main>
  );
};

export default App;
