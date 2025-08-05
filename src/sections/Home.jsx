import Grid from './Grid'
import Hero from './Hero'

export default function Home() {
  return (
    <main className="relative flex justify-center flex-col items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
      </div>
    </main>
  )
}
