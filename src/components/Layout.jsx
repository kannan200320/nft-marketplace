import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const Layout = ({ children, searchQuery, setSearchQuery }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("light", !darkMode);
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-dark-500 text-white" : "bg-gray-100 text-gray-900 light"
      }`}
    >
      <Sidebar />

      <div className="min-h-screen lg:pl-16">
        <main className="mx-auto min-h-screen max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <Header 
            darkMode={darkMode} 
            setDarkMode={setDarkMode}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="pb-24 lg:pb-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
