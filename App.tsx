import React, { useState, useEffect } from 'react';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { User } from './types';

const App: React.FC = () => {
  // Simple state-based routing for this specific requirement
  const [user, setUser] = useState<User | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on system preference or manual toggle could be added here
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-background dark:bg-navy-dark text-slate-900 dark:text-gray-100 transition-colors duration-300">
        {!user ? (
          <Login onLogin={handleLogin} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        ) : (
          <Dashboard user={user} onLogout={handleLogout} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        )}
      </div>
    </div>
  );
};

export default App;