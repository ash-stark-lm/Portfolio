import { useState, useEffect, useRef } from 'react'

import { navLinks } from '../constants'
import { Download } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const NavBar = () => {
  const navRef = useRef(null)
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    // add the event listener to the window
    window.addEventListener('scroll', handleScroll)

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.8, delay: 0.5 },
      })

      tl.from('.logo', {
        opacity: 0,
        y: -20,
      })
        .from(
          '.nav-item',
          {
            opacity: 0,
            y: -20,
            stagger: 0.1,
          },
          '-=0.4' // overlaps slightly with logo animation
        )
        .from(
          '.resume-link',
          {
            opacity: 0,
            y: -20,
          },
          '-=0.3' // overlaps slightly with nav
        )
    }, navRef)

    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}
    >
      <div className="inner flex justify-between items-center">
        {/* 1. Logo */}
        <a href="#hero" className="logo">
          Ashish
        </a>

        {/* 2. Nav Links */}
        <nav className="desktop">
          <ul className="flex gap-6">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group nav-item">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3. Resume Button */}
        <a
          href="/resume/Ashish-Resume.pdf"
          download
          className="contact-btn group resume-link"
        >
          <div className="inner flex items-center">
            <span>Resume</span>
            <Download className="pl-2 text-[#aaa] group-hover:text-white transition-colors duration-200" />
          </div>
        </a>
      </div>
    </header>
  )
}

export default NavBar
