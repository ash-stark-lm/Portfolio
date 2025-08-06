import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger) // register the hook to avoid React version discrepancies

const Collaborate = () => {
  useGSAP(() => {
    gsap.to('.container h1', {
      transform: 'translatex(-70%)',
      scrollTrigger: {
        trigger: '.container',
        scroller: 'body',
        start: 'top 0%',
        end: 'top -100%',
        scrub: '2',

        pin: true,
      },
    })
  })

  return (
    <div className="container flex items-center  h-screen w-full bg-amber-400 mt-20 rounded-2xl mx-5">
      <h1 className=" text-black text-[600px] uppercase">Collaborate</h1>
    </div>
  )
}
export default Collaborate
