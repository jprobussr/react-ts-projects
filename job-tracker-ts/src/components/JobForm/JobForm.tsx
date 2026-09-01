import React, { useState } from 'react';
import type { JobApplication, JobStatus } from '../../types/JobApplication';

interface JobFormProps {
  onAddApplication: (application: JobApplication) => void;
}

const JobForm = ({onAddApplication}: JobFormProps) => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');
  const [isRemote, setIsRemote] = useState(false);
  const [status, setStatus] = useState<JobStatus>('Applied');

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
  };

  const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleRemoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRemote(event.target.checked);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value as JobStatus);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newApplication = {
      id: crypto.randomUUID(),
      company,
      position,
      location,
      isRemote,
      status,
    };

    console.log(newApplication);
    onAddApplication(newApplication);

    setCompany('');
    setPosition('');
    setLocation('');
    setIsRemote(false);
    setStatus('Applied');

  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Job Application</h2>

      <label htmlFor="company">Company</label>
      <input
        type="text"
        id="company"
        value={company}
        onChange={handleCompanyChange}
      />

      <label htmlFor="position">Position</label>
      <input
        type="text"
        id="position"
        value={position}
        onChange={handlePositionChange}
      />

      <label htmlFor="location">Location</label>
      <input
        id="location"
        type="text"
        value={location}
        onChange={handleLocationChange}
      />

      <label htmlFor="isRemote">
        <input
          type="checkbox"
          id="isRemote"
          checked={isRemote}
          onChange={handleRemoteChange}
        />
        Remote
      </label>

      <label htmlFor="status">Status</label>

      <select id="status" value={status} onChange={handleStatusChange}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>

      <button type='submit'>Add Application</button>
    </form>
  );
};

export default JobForm;
