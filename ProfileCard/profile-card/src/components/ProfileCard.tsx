import './ProfileCard.css';
import type { DeveloperProfile } from '../types/profile';

type ProfileCardProps = {
  profile: DeveloperProfile;
};

const ProfileCard = ({ profile }: ProfileCardProps) => {
  const getAvailabilityStatus = (): string => {
    if (profile.isAvailableForWork) {
      return 'Available for work';
    }
    return 'Not currently available';
  };

  return (
    <section className="profile-card">
      <h2>{profile.name}</h2>
      <p>{profile.role}</p>
      <p>{profile.location}</p>
      <p>{profile.favoriteLanguage}</p>

      <p>{getAvailabilityStatus()}</p>

      <h3>Skills</h3>

      <ul>
        {profile.skills.map((skill) => {
            return <li key={skill}>{skill}</li>
        })}
      </ul>
    </section>
  );
};

export default ProfileCard;
