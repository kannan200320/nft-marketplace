import React, { useState } from 'react';
import { Link } from '../router/Router';
import { Search, Bell, Sun, Moon, X } from './Icons';
import { UserAvatar } from './UserAvatar';
import { INITIAL_NOTIFICATIONS } from './Constants.jsx';

export const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-primary/20 hover:text-primary cursor-pointer"
      aria-label="Toggle theme"
    >
      {darkMode ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
};

export const Header = ({ darkMode, setDarkMode, searchQuery, setSearchQuery }) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications] = useState(INITIAL_NOTIFICATIONS);

  return (
    <header className="relative flex h-16 items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery || ''}
            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
            placeholder="Search Here"
            className="h-10 w-48 rounded-lg border border-white/5 bg-dark-100 pl-10 pr-4 text-xs text-white outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-primary sm:w-64"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-white transition cursor-pointer"
            aria-label="Notifications"
          >
            <Bell size={15} />
            {notifications.length > 0 && (
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            )}
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 top-10 z-50 w-72 rounded-xl bg-dark-100 p-4 shadow-xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                <h4 className="text-xs font-semibold text-white">Notifications</h4>
                <button 
                  onClick={() => setNotificationsOpen(false)} 
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="space-y-2">
                {notifications.map((n) => (
                  <div key={n.id} className="rounded-lg bg-dark-300 p-2.5 text-[9px]">
                    <p className="text-gray-200">{n.text}</p>
                    <span className="mt-1 block text-[8px] text-gray-400">{n.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <Link to="/profile" title="View Profile">
          <UserAvatar size="h-8 w-8" />
        </Link>
      </div>
    </header>
  );
};
