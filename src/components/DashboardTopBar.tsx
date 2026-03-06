'use client'

import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';

export default function DashboardTopBar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex-1 flex justify-between items-center px-4 md:px-6">
      <div>
        {/* Search bar can go here in the future */}
      </div>
      <div className="flex items-center space-x-4">
        <button className="btn-secondary">Upgrade</button>
        <button onClick={toggleTheme} className="p-2 rounded-full text-text-secondary hover:bg-gray-200 dark:hover:bg-gray-700">
          {theme === 'dark' ? <FiSun className="h-6 w-6" /> : <FiMoon className="h-6 w-6" />}
        </button>
        {/* Profile dropdown can go here */}
      </div>
    </div>
  );
}
