import JobCard from '../JobCard/JobCard.jsx';

const JobList = ({ applications, onStatusChange, onDeleteApplication }) => {
  return (
    <section>
      <h2>Applications</h2>

      {applications.map((application) => {
        return (
          <JobCard
            key={application.id}
            application={application}
            onStatusChange={onStatusChange}
            onDeleteApplication={onDeleteApplication}
          />
        );
      })}
    </section>
  );
};

export default JobList;
