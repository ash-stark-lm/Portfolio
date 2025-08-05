import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { CanvasRevealEffect } from './ui/CanvasReveal'

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-cyan-300">Approach</span>
      </h1>
      {/* remove bg-white dark:bg-black */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full  gap-22 ">
        {/* add des prop */}
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            // add these classed for the border rounded overflowing -> rounded-3xl overflow-hidden
            containerClassName="bg-black rounded-3xl overflow-hidden"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            // change bg-black to bg-pink-900
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              // change the colors of the
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          {/* remove this one */}
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  )
}

export default Approach

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered((prev) => !prev)} // mobile toggle
      className="border card-border group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full p-4 relative h-[30rem]"
    >
      {/* Corner icons */}
      <Icon className="absolute h-10 w-10 -top-5 -left-5 dark:text-white text-black opacity-50" />
      <Icon className="absolute h-10 w-10 -bottom-5 -left-5 dark:text-white text-black opacity-50" />
      <Icon className="absolute h-10 w-10 -top-5 -right-5 dark:text-white text-black opacity-50" />
      <Icon className="absolute h-10 w-10 -bottom-5 -right-5 dark:text-white text-black opacity-50" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className={`text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-40 mx-auto flex items-center justify-center transition duration-200 ${
            hovered ? 'opacity-0 -translate-y-4' : 'opacity-100'
          }`}
        >
          {icon}
        </div>

        <h2
          className={`dark:text-white text-center text-3xl font-bold mt-4 relative z-10 text-black transition duration-200 ${
            hovered
              ? 'opacity-100 -translate-y-2 text-white'
              : 'opacity-0 translate-y-0'
          }`}
        >
          {title}
        </h2>

        <p
          className={`text-sm text-center mt-4 relative z-10 transition duration-200 ${
            hovered
              ? 'opacity-100 -translate-y-2 text-white'
              : 'opacity-0 translate-y-0'
          }`}
          style={{ color: '#E4ECFF' }}
        >
          {des}
        </p>
      </div>
    </div>
  )
}
// add order prop for the Phase number change
const AceternityIcon = ({ order }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  )
}

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
