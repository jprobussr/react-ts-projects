import { useState } from 'react';

const JobForm = ({ onAddApplication }) => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');
  const [isRemote, setIsRemote] = useState(false);

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleIsRemoteChange = (event) => {
    setIsRemote(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newApplication = {
      id: crypto.randomUUID(),
      company,
      location,
      position,
      isRemote,
      status: 'Applied',
    };

    onAddApplication(newApplication);

    setCompany('');
    setPosition('');
    setLocation('');
    setIsRemote(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Application</h2>
      <label htmlFor="company">Company:</label>
      <input
        type="text"
        id="company"
        value={company}
        onChange={handleCompanyChange}
        required
      />

      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        value={position}
        onChange={handlePositionChange}
        required
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={handleLocationChange}
      />

      <label htmlFor="isRemote">Remote</label>
      <input
        type="checkbox"
        id="isRemote"
        checked={isRemote}
        onChange={handleIsRemoteChange}
      />

      <button type="submit">Add Application</button>
    </form>
  );
};

export default JobForm;
