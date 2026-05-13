import { useState } from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"
import SocialDock from "./SocialDock"


function Layout({ children }) {

  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <div
      className={`min-h-screen text-sm transition-colors duration-300 relative overflow-x-hidden ${
        darkMode
          ? "bg-[#111111] text-[#e5e5e5]"
          : "bg-[#ededeb] text-[#2f2f2f]"
      }`}
    >

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <SocialDock darkMode={darkMode} />

      {typeof children === "function"
        ? children(darkMode)
        : children}

      <Footer darkMode={darkMode} />

    </div>

  )
}

export default Layout