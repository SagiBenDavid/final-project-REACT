import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Help from './pages/Help';
import Tasks from "./pages/Tasks"; 
import Summaries from "./pages/Summaries";



export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-800">
      {isAuthenticated && <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
      <main className="flex-1 px-4 py-6 md:px-8">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
          <Route path="/help" element={isAuthenticated ? <Help /> : <Navigate to="/login" replace />} />
         <Route path="/tasks" element={isAuthenticated ? <Tasks /> : <Navigate to="/login" replace />} />

          <Route path="/summaries" element={isAuthenticated ? <Summaries /> : <Navigate to="/login" replace />} />



          {!isAuthenticated && (
            <>
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/register" element={<Register />} />
            </>
          )}

          {isAuthenticated && (
            <>
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/register" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </main>
      {isAuthenticated && <Footer />}
    </div>
  );
}

