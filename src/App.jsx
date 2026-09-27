import { Ambient } from './components/Ambient.jsx'
import { Nav } from './components/Nav.jsx'
import { Hero } from './components/Hero.jsx'
import { FeaturedProject } from './components/FeaturedProject.jsx'
import { Impact } from './components/Impact.jsx'
import { Skills } from './components/Skills.jsx'
import { Experience } from './components/Experience.jsx'
import { Education } from './components/Education.jsx'
import { About } from './components/About.jsx'
import { Resume } from './components/Resume.jsx'
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

      <a className="skip" href="#work">
        Skip to content
      </a>

      <Nav theme={theme} onToggleTheme={toggle} />

      <main id="main">
        <Hero />
        <FeaturedProject theme={theme} />
        <Impact />
        <Skills />
        <Experience />
        <Education />
        <About />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
