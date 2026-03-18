import './css/App.css';
import Favorites from './pages/Favorites.tsx';
import Home from './pages/Home.tsx';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.tsx';

function App() {
  return (
    <>
      <div>
        <div className="sticky top-0 bg-neutral-800 z-50 w-full">
          <NavBar />
        </div>
        <main className="main-content max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
