import React from 'react'
import Grid from './Grid'
import Hero from './Hero'

function Home() {
  return (
    <main className="relative flex justify-center flex-col items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
      </div>
    </main>
  )
}

export default React.memo(Home)
