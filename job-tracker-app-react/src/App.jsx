import './App.css';
import { useState } from 'react';
import JobForm from './components/JobForm/JobForm.jsx';
import JobList from './components/JobList/JobList.jsx';

const App = () => {
  const [applications, setApplications] = useState([]);

  const handleAddApplication = (newApplication) => {
    setApplications((prevApplications) => {
      return [...prevApplications, newApplication];
    });
  };

  const handleStatusChanges = (id, newStatus) => {
    setApplications((prevApplications) => {
      return prevApplications.map((application) => {
        return application.id === id
          ? { ...application, status: newStatus }
          : application;
      });
    });
  };

  const handleDeleteApplication = (id) => {
    setApplications((prevApplications) => {
      return prevApplications.filter((application) => {
        return application.id !== id;
      });
    });
  };

  return (
    <main className="app">
      <h1>Job Tracker</h1>

      <JobForm onAddApplication={handleAddApplication} />

      <JobList
        applications={applications}
        onStatusChange={handleStatusChanges}
        onDeleteApplication={handleDeleteApplication}
      />
    </main>
  );
};

export default App;
