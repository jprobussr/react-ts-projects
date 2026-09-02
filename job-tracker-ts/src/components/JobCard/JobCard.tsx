import type { JobApplication } from '../../types/JobApplication';

interface JobCardProps {
  application: JobApplication;
}

const JobCard = ({ application }: JobCardProps) => {
  return (
    <article>
      <h3>{application.position}</h3>
      <p>{application.company}</p>
      <p>{application.location}</p>
      <p>{application.isRemote ? 'Remote' : 'On-site'}</p>
      <p>{application.status}</p>
    </article>
  );
};

export default JobCard;
