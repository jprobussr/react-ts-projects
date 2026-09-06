import JobCard from '../JobCard/JobCard.jsx';

const JobList = ({ applications, onStatusChange }) => {
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
