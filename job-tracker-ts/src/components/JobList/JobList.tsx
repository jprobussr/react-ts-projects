import type { JobApplication, JobStatus } from '../../types/JobApplication';
import JobCard from '../JobCard/JobCard';

interface JobListProps {
  applications: JobApplication[];
  onStatusChange: (id: string, newStatus: JobStatus) => void;
}

const JobList = ({ applications, onStatusChange }: JobListProps) => {
  return (
    <section>
      <h2>Applications</h2>
      {applications.map((application) => {
        return (
          <JobCard
            key={application.id}
            application={application}
            onStatusChange={onStatusChange}
          />
        );
      })}
    </section>
  );
};

export default JobList;
