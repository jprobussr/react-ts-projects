import type { JobApplication } from '../../types/JobApplication';
import JobCard from '../JobCard/JobCard';

interface JobListProps {
  applications: JobApplication[];
}

const JobList = ({ applications }: JobListProps) => {
  return (
    <section>
      <h2>Applications</h2>
      {applications.map((application) => {
        return <JobCard key={application.id} application={application} />;
      })}
    </section>
  );
};

export default JobList;
