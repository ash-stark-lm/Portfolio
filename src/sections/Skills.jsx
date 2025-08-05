import React from 'react'
import { motion } from 'motion/react'
import LogoShowcase from './LogoShowcase'

import { LampContainer } from '../components/ui/Lamp'

export function LampDemo() {
  return (
    <section id="skills">
      <LampContainer className={'mb-20'}>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: -20 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="mt-8 absolute bottom-40  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center  font-medium tracking-tight text-transparent md:text-7xl text-7xl sm:text-6xl lg:text-8xl"
        >
          Skills
        </motion.h1>
        <div className="absolute -top-20 ">
          <LogoShowcase />
        </div>
      </LampContainer>
    </section>
  )
}
