import React from 'react'
import { BentoGrid, BentoGridItem } from '../components/ui/BentoGrid'
import { gridItems } from '../constants'

const Grid = () => {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-5 sm:px-10 overflow-hidden py-10"
    >
      <h1 className="mb-10 text-4xl sm:text-5xl font-bold text-center text-white">
        About Me
      </h1>
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}
export default React.memo(Grid)
