import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import ProfileCard from './components/ProfileCard';
import type { DeveloperProfile } from './types/profile';
import type { Product } from './types/Product';

const profile: DeveloperProfile = {
  name: 'John Probus',
  role: 'Front-End Developer',
  location: 'Murray, Kentucky',
  isAvailableForWork: true,
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
  favoriteLanguage: 'React',
};

const product: Product = {
  name: 'Mechanical Keyboard',
  price: 89.99,
  category: 'Electronics',
  inStock: false,
};

const App = () => {
  return (
    <main className="app">
      <h1>React TypeScript Cards</h1>

      <ProfileCard profile={profile} />
      <ProductCard product={product} />
    </main>
  );
};

export default App;
