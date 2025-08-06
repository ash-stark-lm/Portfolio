import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger) // register the hook to avoid React version discrepancies

const Collaborate = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add(
      {
        // Mobile (max-width: 639px)
        isMobile: '(max-width: 639px)',
        // Tablet and up
        isDesktop: '(min-width: 640px)',
      },
      (context) => {
        const { isMobile, isDesktop } = context.conditions

        gsap.to('.container h1', {
          transform: isMobile ? 'translatex(-80%)' : 'translatex(-70%)',
          scrollTrigger: {
            trigger: '.container',
            scroller: 'body',
            start: 'top 0%',
            end: 'top -100%',
            scrub: '2',

            pin: true,
          },
        })
      }
    )
    return () => mm.revert() // cleanup
  }, [])
  return (
    <div className="container   flex items-center  h-[100vh] bg-amber-400 mt-20 rounded-2xl overflow-hidden">
      <h1 className=" text-black uppercase  text-[60vw] sm:text-[40vw] md:text-[40vw] lg:text-[40vw] xl:text-[40vw] leading-none">
        Collaborate
      </h1>
    </div>
  )
}
export default Collaborate
