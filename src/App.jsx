import Testimonials from './sections/Testimonials'
import Footer from './sections/Footer'
import Contact from './sections/Contact'
import TechStack from './sections/TechStack'
import Experience from './sections/Experience'
import Hero from './sections/Hero'

import LogoShowcase from './sections/LogoShowcase'
import FeatureCards from './sections/FeatureCards'
import Navbar from './components/NavBar'
import Grid from './sections/Grid'
import Projects from './sections/Projects'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Approach from './components/Approach'
import { LampDemo } from './sections/Skills'
import Lenis from 'lenis'
import { useEffect } from 'react'
import Collaborate from './sections/Collaborate'

const App = () => {
  // 💨 Lenis Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <Navbar />

      <Hero />
      {/**add new bento grid */}
      <Grid />
      <Projects />
      <LampDemo />
      <Approach />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Collaborate />
      <Contact />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
