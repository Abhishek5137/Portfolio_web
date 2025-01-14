import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import './App.css'


function App() {
  return (
    
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className=" random min-h-screen bg-background text-foreground">
        
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
    
  )
}

export default App