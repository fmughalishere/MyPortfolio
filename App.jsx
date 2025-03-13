import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/NavBar'
import Projects from './Components/Projects'
import Service from './Components/Service'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App