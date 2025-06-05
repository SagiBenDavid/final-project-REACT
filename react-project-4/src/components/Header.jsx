import { Link, useNavigate } from 'react-router-dom';

export default function Header({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold tracking-tight">StudentTasks</Link>
        <nav className="space-x-4 text-sm md:text-base">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/help" className="hover:underline">Help</Link>
          <Link to="/tasks" className="hover:underline">Tasks</Link>
<Link to="/summaries" className="hover:underline">Summaries</Link>

          <button onClick={handleLogout} className="hover:underline bg-transparent text-white border-none cursor-pointer">Logout</button>
        </nav>
      </div>
    </header>
  );
}