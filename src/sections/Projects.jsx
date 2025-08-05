import { projects } from '../constants'
import { Navigation } from 'lucide-react'
import { PinContainer, PinPerspective } from '../components/ui/3dAnimatedPin'
import React from 'react'
const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading">
          A small selection of{' '}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-start justify-center p-4 gap-x-24 gap-y-2 mt-10">
          {projects.map(({ id, title, description, img, iconLists, link }) => (
            <div
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] sm:w-[570px] flex items-center justify-center w-[80vw]"
              key={id}
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh]  overflow-hidden  mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: '#13162D' }}
                  >
                    <img src="/images/bg2.png" alt="bgimg" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-[-0.5rem] sm:top-[4rem] md:bottom-[-2rem] drop-shadow-xl"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: '#BEC1DD',
                    margin: '1vh 0',
                  }}
                >
                  {description}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3 flex-wrap gap-y-3">
                  {/* ICONS */}
                  <div className="flex items-center flex-wrap lg:flex-nowrap max-w-full overflow-hidden">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center m-1 lg:m-0"
                        style={{
                          transform:
                            typeof window !== 'undefined' &&
                            window.innerWidth >= 1024
                              ? `translateX(${
                                  index === 0 ? '0' : `-${5 * index + 2}px`
                                })`
                              : 'none',
                        }}
                      >
                        <img src={icon} alt={`icon-${index}`} className="p-2" />
                      </div>
                    ))}
                  </div>

                  {/* VISIT BUTTON */}
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Visit
                    </p>
                    <Navigation className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(RecentProjects)
