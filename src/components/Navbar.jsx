import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 text-transparent bg-clip-text">
              AB.
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-lg transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-lg transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-lg transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-lg transition-colors"
              >
                Contact
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-lg transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-lg transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-lg transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-lg transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

