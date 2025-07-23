// src/components/Sidebar.jsx
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = () => setCollapsed(prev => !prev)

  const linkBase       = 'block px-3 py-2 rounded-none'
  const activeStyles   = 'bg-[#302c2c] text-white'
  const inactiveStyles = 'text-black hover:bg-gray-200 border-t border-gray-300'

  const arrowStyles = `
    bg-[#f8f4f4]
    border border-gray-300
    p-1
    focus:outline-none
    transition-all duration-300
    rounded
    hover:bg-gray-200
  `

  return (
    <>
      <aside
        className={`
          relative flex-shrink-0 h-screen
          bg-[#f8f4f4] text-black
          border-r border-gray-300
          transition-all duration-300 overflow-hidden
          ${collapsed ? 'w-0' : 'w-60'}
        `}
      >
        {!collapsed && (
          <button
            onClick={toggleCollapsed}
            className={`
              absolute right-0 top-1/2 -translate-y-1/2
              border-l border-gray-300
              ${arrowStyles}
            `}
          >
            {/* “<” collapse icon */}
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div className={`${collapsed ? 'hidden' : 'flex flex-col h-full'}`}>
          {/* HEADER */}
          <header className="px-4 py-6 flex-shrink-0">
            <div className="flex flex-col items-center gap-3">
              <img src="/logo.png" alt="Crack News Logo" className="h-10" />
              <div className="flex gap-2">
                <img src="/google-play.png" alt="Google Play" className="h-6" />
                <img src="/app-store.png" alt="App Store" className="h-6" />
              </div>
            </div>
          </header>

          <div className="flex-1 flex flex-col justify-center">
            <nav className="grid auto-rows-min pr-7">
              <NavLink
                to="/for-you"
                end
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeStyles : inactiveStyles}`
                }
              >
                For You
              </NavLink>
              <NavLink
                to="/channels"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeStyles : inactiveStyles}`
                }
              >
                Channels
              </NavLink>
              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeStyles : inactiveStyles}`
                }
              >
                Explore
              </NavLink>
              <NavLink
                to="/languages"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeStyles : inactiveStyles} border-b`
                }
              >
                Languages
              </NavLink>
            </nav>
          </div>

          {/* FOOTER */}
          <footer className="px-4 py-4 text-xs text-gray-500 border-t border-gray-300 flex-shrink-0">
            Reach Us Anytime:
            <br />
            <a
              href="mailto:codeanchorteam@google.com"
              className="text-gray-500 underline"
            >
              codeanchorteam@google.com
            </a>
            <br />
            CrackNews©2025
          </footer>
        </div>
      </aside>

      {collapsed && (
        <button
          onClick={toggleCollapsed}
          className={`
            fixed top-1/2 left-0 -translate-y-1/2
            ${arrowStyles}
          `}
        >
          <svg xmlns="http://www.w3.org/2000/svg"
               className="h-4 w-4" fill="none" viewBox="0 0 24 24"
               stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </>
  )
}

export default Sidebar
