import Credentials from './components/Credentials'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function App() {
  return (
    <main className="mx-auto max-w-[1280px] overflow-hidden bg-[#080808] text-zinc-100 shadow-2xl">
      <Hero />
      <Projects />
      <Credentials />
      <Footer />
    </main>
  )
}
