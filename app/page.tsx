import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Roadmaps from '@/components/Roadmaps'
import Notes from '@/components/Notes'
import Courses from '@/components/Courses'
import YouTube from '@/components/YouTube'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Roadmaps />
      <Notes />
      <Courses />
      <YouTube />
      <Contact />
      <Footer />
    </main>
  )
}

