import './css/App.css';
import Home from './pages/Home.tsx';
import MovieCard from './components/MovieCard.tsx';

function App() {
  return (
    <>
      <Home />
      <MovieCard movie={{ title: 'The good movie', release_date: '2026' }} />
    </>
  );
}

export default App;
