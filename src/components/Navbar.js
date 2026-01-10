import { useEffect, useState } from 'react'
import NavbarLink from './NavbarLink';

function Navbar() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(window.scrollY)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setShow(true)
      } else if (window.scrollY < lastScrollY) {
        setShow(true)
      } else {
        setShow(false)
      }
      setLastScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  function scrollToSection(e, id) {
    e.preventDefault();
    setMenuOpen(false);
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`bg-white pb-5 pt-5 font-quicksand w-full font-medium fixed top-0 left-0 z-50 flex items-center text-center mx-auto text-md 2xl:text-lg text-gray-950 transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Hamburger menu for mobile */}
      <div className="flex md:hidden w-full justify-end pr-6">
        <button
          className="p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="material-symbols-rounded">menu</span>
        </button>
      </div>
      {/* Links for desktop */}
      <div className="hidden md:flex items-center gap-10 mx-auto">
        <NavbarLink href="#about" sectionId="about" onClick={scrollToSection}>About Me</NavbarLink>
        <NavbarLink href="#skills" sectionId="skills" onClick={scrollToSection}>Skills</NavbarLink>
        <NavbarLink href="#projects" sectionId="projects" onClick={scrollToSection}>My Projects</NavbarLink>
      </div>
      {/* Mobile menu */}
      <div
        className={`absolute top-full left-0 w-full gap-3 bg-white shadow-md flex flex-col items-center py-4 md:hidden transition-all duration-500 ease-in-out ${
          menuOpen
            ? 'opacity-100 scale-y-100 pointer-events-auto'
            : 'opacity-0 scale-y-0 pointer-events-none'
        } origin-top`}
        style={{ willChange: 'transform, opacity' }}
      >
        <NavbarLink href="#about" sectionId="about" onClick={scrollToSection}>About Me</NavbarLink>
        <NavbarLink href="#skills" sectionId="skills" onClick={scrollToSection}>Skills</NavbarLink>
        <NavbarLink href="#projects" sectionId="projects" onClick={scrollToSection}>My Projects</NavbarLink>
      </div>
    </nav>
  )
}

export default Navbar;