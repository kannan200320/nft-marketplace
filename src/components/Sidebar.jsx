import React from 'react';
import { NavLink } from '../router/Router';
import { 
  Hexagon, 
  LayoutGrid, 
  ClipboardList, 
  Heart, 
  Star, 
  CircleUser, 
  Settings, 
  LogOut 
} from './Icons';

const navItems = [
  { path: "/", icon: LayoutGrid, title: "Dashboard" },
  { path: "/bids", icon: ClipboardList, title: "Bids" },
  { path: "/saved", icon: Heart, title: "Saved Items" },
  { path: "/profile", icon: CircleUser, title: "Profile" },
  { path: "/collections", icon: Star, title: "Collections" },
  { path: "/settings", icon: Settings, title: "Settings" },
];

export const Sidebar = () => {
  return (
    <>
      <aside className="hidden lg:flex fixed left-0 top-0 z-50 h-screen w-16 flex-col items-center border-r border-white/5 bg-dark-200">
        <div className="flex h-16 w-full items-center justify-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Hexagon size={18} className="fill-white text-primary" />
          </div>
        </div>

        <nav className="mt-4 flex flex-1 flex-col items-center gap-3">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={`${item.path}-${index}`}
                to={item.path}
                className={({ isActive }) => `
                  flex h-9 w-9 items-center justify-center
                  rounded-lg transition
                  ${isActive ? "bg-primary text-white" : "text-gray-500 hover:bg-primary/10 hover:text-primary"}
                `}
                title={item.title}
              >
                <Icon size={16} />
              </NavLink>
            );
          })}
        </nav>

        <button 
          className="mb-6 text-gray-500 transition hover:text-primary cursor-pointer"
          title="Logout"
        >
          <LogOut size={17} />
        </button>
      </aside>

      <nav className="bottom-navbar fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-white/10 bg-dark-200 px-2 lg:hidden">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={`bottom-${item.path}-${index}`}
              to={item.path}
              className={({ isActive }) => `
                flex h-10 w-10 items-center justify-center rounded-lg transition-colors cursor-pointer
                ${isActive ? "text-primary" : "text-gray-400 hover:text-white"}
              `}
              title={item.title}
            >
              <Icon size={20} />
            </NavLink>
          );
        })}
        <button
          className="flex h-10 w-10 items-center justify-center text-gray-400 transition hover:text-primary cursor-pointer"
          title="Logout"
        >
          <LogOut size={20} />
        </button>
      </nav>
    </>
  );
};
