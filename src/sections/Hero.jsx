import React, { useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Button from '../components/Button'
import { words } from '../constants'
import HeroExperience from '../components/models/hero_models/HeroExperience'

const Hero = () => {
  const heroRef = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1 })

      tl.fromTo(
        '.hero-text h1',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'power2.inOut',
        }
      )
        .fromTo(
          '.hero-description',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.6' // starts slightly before heading animation ends
        )
        .fromTo(
          '.hero-button',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.5' // starts slightly before p tag animation ends
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={heroRef} className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="hero-description text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Ashish, a Full Stack Developer with a passion for code.
            </p>

            <Button
              text="See My Work"
              className="hero-button md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  )
}

export default React.memo(Hero)
