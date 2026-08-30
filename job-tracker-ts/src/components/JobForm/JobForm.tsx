import { useState } from 'react';

const JobForm = () => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
  };

  const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(event.target.value);
  };

  return (
    <form>
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
    </form>
  );
};

export default JobForm;
