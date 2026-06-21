import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('aurora'); // 'aurora' or 'nebula'
  const [userProfile, setUserProfile] = useState({
    name: 'Alex Rivera',
    role: 'Creative Director',
    initials: 'AR',
    joined: 'June 2026'
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'aurora' ? 'nebula' : 'aurora'));
  };

  const updateProfileName = (newName) => {
    setUserProfile((prev) => ({
      ...prev,
      name: newName,
      initials: newName.split(' ').map(n => n[0]).join('').toUpperCase()
    }));
  };

  // Sync theme with document element attribute for styling
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, toggleTheme, userProfile, updateProfileName }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppProvider');
  }
  return context;
};
