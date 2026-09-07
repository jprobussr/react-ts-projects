const JobCard = ({ application, onStatusChange, onDeleteApplication }) => {
  return (
    <article>
      <h3>{application.company}</h3>
      <p>{application.location}</p>
      <p>{application.position}</p>
      <p>{application.isRemote ? 'Remote' : 'On-site'}</p>
      <p>{application.status}</p>
      <select
        value={application.status}
        onChange={(event) => onStatusChange(application.id, event.target.value)}
      >
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>

      <button type="button" onClick={() => onDeleteApplication(application.id)}>
        Delete
      </button>
    </article>
  );
};

export default JobCard;
