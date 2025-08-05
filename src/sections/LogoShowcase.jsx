import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { logoIconsList } from '../constants'

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  )
}

const LogoShowcase = () => {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const marquee = marqueeRef.current

    if (!marquee) return

    const totalWidth = marquee.scrollWidth / 2 // Half because it's duplicated
    const duration = 30 // Adjust for speed (larger = slower)

    gsap.fromTo(
      marquee,
      { x: 0 },
      {
        x: -totalWidth,
        duration: duration,
        ease: 'none',
        repeat: -1,
      }
    )
  }, [])

  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div ref={marqueeRef} className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`first-${index}`} icon={icon} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`second-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default React.memo(LogoShowcase)
