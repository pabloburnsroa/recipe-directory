import { Routes, Route } from 'react-router-dom';

// import components
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Create from './components/create/Create';
import Search from './components/search/Search';
import Recipe from './components/recipe/Recipe';
import ThemeSelector from './components/themeSelector/ThemeSelector';

import './App.css';
import { useTheme } from './hooks/useTheme';

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <Navbar />
      <ThemeSelector />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipes/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
