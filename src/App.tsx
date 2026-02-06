import './css/App.css';
import Favorites from './pages/Favorites.tsx';
import Home from './pages/Home.tsx';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.tsx';

function App() {
  return (
    <>
      <div>
        <NavBar />
        <main className="main-content">
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
