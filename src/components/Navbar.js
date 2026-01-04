import { useEffect, useState } from 'react'
import NavbarLink from './NavbarLink';

function Navbar() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(window.scrollY)

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
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`bg-white pb-5 pt-5 font-quicksand w-full font-medium fixed top-0 left-0 z-50 flex items-center text-center mx-auto text-md text-gray-950 transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="hidden md:flex items-center gap-10 mx-auto">
        <NavbarLink href="#about" sectionId="about" onClick={scrollToSection}>About Me</NavbarLink>
        <NavbarLink href="#skills" sectionId="skills" onClick={scrollToSection}>Skills</NavbarLink>
        <NavbarLink href="#projects" sectionId="projects" onClick={scrollToSection}>My Projects</NavbarLink>
      </div>
    </nav>
  )
}

export default Navbar;