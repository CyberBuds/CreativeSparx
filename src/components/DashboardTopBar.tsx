'use client'

import { FiSearch, FiBell, FiUser, FiChevronDown, FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { useState, useRef, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'

export default function DashboardTopBar() {
  const { theme, setTheme } = useTheme()
  const { logout } = useAuth()
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSignOut = async () => {
    await logout()
    router.replace('/login')
  }

  const handleProfile = () => {
    console.log('Go to profile')
  }

  const handleSettings = () => {
    console.log('Go to settings')
  }

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="flex items-center justify-between h-16 px-4 bg-background border-b border-border">
      
      {/* SEARCH */}
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

      {/* RIGHT SIDE */}
      <div className="flex items-center space-x-4">

        <button className="btn-secondary">Upgrade</button>

        {/* THEME */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-text-secondary hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {theme === 'dark'
            ? <FiSun className="h-6 w-6" />
            : <FiMoon className="h-6 w-6" />}
        </button>

        {/* NOTIFICATIONS */}
        <FiBell className="h-6 w-6 text-text-secondary cursor-pointer" />

        {/* PROFILE DROPDOWN */}
        <div className="relative" ref={dropdownRef}>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1 rounded-lg"
          >
            <FiUser className="h-8 w-8 rounded-full bg-gray-200 p-1" />
            <FiChevronDown className="h-4 w-4 text-text-secondary" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50">

              <button
                onClick={handleProfile}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                My Profile
              </button>

              <button
                onClick={handleSettings}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Settings
              </button>

              <hr className="my-2 border-gray-200 dark:border-gray-700"/>

              <button
  onClick={handleSignOut}
  className="w-full px-4 py-2 text-left btn-primary"
>
  Logout
</button>

            </div>
          )}
        </div>

      </div>

    </header>
  )
}