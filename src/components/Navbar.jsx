// components/Navbar.jsx

import {
  NavLink,
  Link,
  useLocation
} from "react-router-dom"

function Navbar({
  darkMode,
  setDarkMode,
  menuOpen,
  setMenuOpen
}) {

  const location = useLocation()

  return (

    <nav
      className={`border-b fixed top-0 left-0 w-full z-50 backdrop-blur-sm transition-colors duration-300 ${
        darkMode
          ? "border-[#262626]"
          : "border-[#d8d8d8]"
      }`}
    >

      <div className="relative z-20 max-w-3xl mx-auto px-5 md:px-6 py-5 flex items-center justify-between">

        <div className="relative">

          <Link to="/">

            <img
              src="/assets/logo.png"
              alt=""
              className="w-[100px] md:w-[140px] object-contain"
            />

          </Link>

          {location.pathname === "/" && (

            <div className="flex justify-center mt-1">

              <span
                className={`w-1 h-1 rounded-full ${
                  darkMode
                    ? "bg-white"
                    : "bg-[#2f2f2f]"
                }`}
              />

            </div>

          )}

        </div>

        <div className="hidden md:flex items-center gap-8">

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[2px] text-[#8a8a8a]">

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative pb-3 transition ${
                  isActive
                    ? darkMode
                      ? "text-white"
                      : "text-[#4a4a4a]"
                    : darkMode
                      ? "hover:text-white"
                      : "hover:text-[#4a4a4a]"
                }`
              }
            >

              {({ isActive }) => (

                <>

                  about

                  {isActive && (

                    <span
                      className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-1 h-1 rounded-full transition-all duration-300 ${
                        darkMode
                          ? "bg-white"
                          : "bg-[#2f2f2f]"
                      }`}
                    />

                  )}

                </>

              )}

            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `relative pb-3 transition ${
                  isActive
                    ? darkMode
                      ? "text-white"
                      : "text-[#4a4a4a]"
                    : darkMode
                      ? "hover:text-white"
                      : "hover:text-[#4a4a4a]"
                }`
              }
            >

              {({ isActive }) => (

                <>

                  projects

                  {isActive && (

                    <span
                      className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-1 h-1 rounded-full transition-all duration-300 ${
                        darkMode
                          ? "bg-white"
                          : "bg-[#2f2f2f]"
                      }`}
                    />

                  )}

                </>

              )}

            </NavLink>

            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `relative pb-3 transition ${
                  isActive
                    ? darkMode
                      ? "text-white"
                      : "text-[#4a4a4a]"
                    : darkMode
                      ? "hover:text-white"
                      : "hover:text-[#4a4a4a]"
                }`
              }
            >

              {({ isActive }) => (

                <>

                  skills

                  {isActive && (

                    <span
                      className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-1 h-1 rounded-full transition-all duration-300 ${
                        darkMode
                          ? "bg-white"
                          : "bg-[#2f2f2f]"
                      }`}
                    />

                  )}

                </>

              )}

            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative pb-3 transition ${
                  isActive
                    ? darkMode
                      ? "text-white"
                      : "text-[#4a4a4a]"
                    : darkMode
                      ? "hover:text-white"
                      : "hover:text-[#4a4a4a]"
                }`
              }
            >

              {({ isActive }) => (

                <>

                  contact

                  {isActive && (

                    <span
                      className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-1 h-1 rounded-full transition-all duration-300 ${
                        darkMode
                          ? "bg-white"
                          : "bg-[#2f2f2f]"
                      }`}
                    />

                  )}

                </>

              )}

            </NavLink>

          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-14 h-7 rounded-full flex items-center px-1 transition duration-300 ${
              darkMode
                ? "bg-[#2a2a2a] justify-end"
                : "bg-[#d0d0d0] justify-start"
            }`}
          >

            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center transition duration-300 ${
                darkMode
                  ? "bg-white"
                  : "bg-[#2f2f2f]"
              }`}
            >

              <img
                src={darkMode ? "/assets/moon.png" : "/assets/sun.png"}
                alt=""
                className={`w-3 h-3 object-contain ${
                  darkMode
                    ? ""
                    : "invert"
                }`}
              />

            </div>

          </button>

        </div>

        <div className="md:hidden flex items-center gap-4">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 rounded-full flex items-center px-1 transition duration-300 ${
              darkMode
                ? "bg-[#2a2a2a] justify-end"
                : "bg-[#d0d0d0] justify-start"
            }`}
          >

            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center transition duration-300 ${
                darkMode
                  ? "bg-white"
                  : "bg-[#2f2f2f]"
              }`}
            >

              <img
                src={darkMode ? "/assets/moon.png" : "/assets/sun.png"}
                alt=""
                className={`w-2 h-2 object-contain ${
                  darkMode
                    ? ""
                    : "invert"
                }`}
              />

            </div>

          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[4px]"
          >

            <div className={`w-5 h-[1.5px] ${darkMode ? "bg-white" : "bg-black"}`} />

            <div className={`w-5 h-[1.5px] ${darkMode ? "bg-white" : "bg-black"}`} />

            <div className={`w-5 h-[1.5px] ${darkMode ? "bg-white" : "bg-black"}`} />

          </button>

        </div>

      </div>

      {menuOpen && (

        <div
          className={`md:hidden border-t px-5 py-5 flex flex-col gap-5 text-[11px] uppercase tracking-[2px] relative z-20 ${
            darkMode
              ? "border-[#262626] bg-[#161616]/95 text-[#8a8a8a]"
              : "border-[#d8d8d8] bg-[#e7e7e5]/95 text-[#8a8a8a]"
          }`}
        >

          <Link to="/about">about</Link>

          <Link to="/projects">projects</Link>

          <Link to="/skills">skills</Link>

          <Link to="/contact">contact</Link>

        </div>

      )}

    </nav>

  )
}

export default Navbar