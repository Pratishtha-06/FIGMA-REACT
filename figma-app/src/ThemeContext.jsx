import React, { createContext, useState, useEffect } from 'react';

// Create the Theme Context
export const ThemeContext = createContext();

// ThemeProvider component to wrap your app
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Retrieve theme from localStorage
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme === 'true'; // if it's "true" in localStorage, dark mode is on
  });

  // Toggle the theme and store it in localStorage
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', newMode); // Save the theme in localStorage
      return newMode;
    });
  };

  // Apply the theme to the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
