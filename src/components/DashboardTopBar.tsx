'use client'

import { FiMenu,FiSearch, FiBell, FiUser, FiChevronDown,FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export default function DashboardTopBar() {
    const { theme, setTheme } = useTheme();
    const [search, setSearch] = useState('');
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log("Search:", e.target.value);
      };
    return (
        <header className="flex items-center justify-between h-16 px-4 bg-background border-b border-border">
            <div className="flex items-center">
            <div className="relative w-full max-w-md">
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
      </div>
            </div>
            <div className="flex items-center space-x-4">
        <button className="btn-secondary">Upgrade</button>
        <button onClick={toggleTheme} className="p-2 rounded-full text-text-secondary hover:bg-gray-200 dark:hover:bg-gray-700">
          {theme === 'dark' ? <FiSun className="h-6 w-6" /> : <FiMoon className="h-6 w-6" />}
        </button>
        {/* Profile dropdown can go here */}
      </div>
            <div className="flex items-center space-x-4">
                <FiBell className="h-6 w-6 text-text-secondary" />
                <div className="flex items-center">
                    <FiUser className="h-8 w-8 rounded-full bg-gray-200" />
                    <FiChevronDown className="h-5 w-5 text-text-secondary" />
                </div>
            </div>
        </header>
    );
}
