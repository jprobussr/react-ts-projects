import './App.css';
import ProfileCard from './components/ProfileCard';
import type { DeveloperProfile } from './types/profile';

const profile: DeveloperProfile = {
  name: 'John Probus',
  role: 'Front-End Developer',
  location: 'Murray, Kentucky',
  isAvailableForWork: true,
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
  favoriteLanguage: 'React'
};

const App = () => {
  return (
    <main className="app">
      <h1>Developer Profile Card</h1>

      <ProfileCard profile={profile} />
    </main>
  );
};

export default App;
