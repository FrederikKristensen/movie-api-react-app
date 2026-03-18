import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar text-red-600 flex justify-between items-center  ">
      <div className="navbar-brand text-2xl font-extrabold hover:text-red-800 p-8">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-link flex space-x-4 text-lg">
        <Link to="/" className="nav-link hover:text-red-800 p-8">
          Home
        </Link>
        <Link to="/favorites" className="nav-link hover:text-red-800 p-8">
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
