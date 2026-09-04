import type { JobApplication, JobStatus } from '../../types/JobApplication';

interface JobCardProps {
  application: JobApplication;
  onStatusChange: (id: string, newStatus: JobStatus) => void;
}

const JobCard = ({ application, onStatusChange }: JobCardProps) => {
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(application.id, event.target.value as JobStatus);
  };

  return (
    <article>
      <h3>{application.position}</h3>
      <p>{application.company}</p>
      <p>{application.location}</p>
      <p>{application.isRemote ? 'Remote' : 'On-site'}</p>
      <select value={application.status} onChange={handleStatusChange}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </article>
  );
};

export default JobCard;
