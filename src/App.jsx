import { Ambient } from './components/Ambient.jsx'
import { Nav } from './components/Nav.jsx'
import { Hero } from './components/Hero.jsx'
import { Resume } from './components/Resume.jsx'
import { FeaturedProject } from './components/FeaturedProject.jsx'
import { Capabilities } from './components/Capabilities.jsx'
import { About } from './components/About.jsx'
import { Vision } from './components/Vision.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { useTheme } from './hooks/useTheme.js'
import { useReveal } from './hooks/useReveal.js'

export default function App() {
  const { theme, toggle } = useTheme()
  useReveal()

  return (
    <>
      <Ambient />

      <a className="skip" href="#resume">
        Skip to content
      </a>

      <Nav theme={theme} onToggleTheme={toggle} />

      <main id="main">
        <Hero />
        <Resume />
        <FeaturedProject theme={theme} />
        <Capabilities />
        <About />
        <Vision />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
