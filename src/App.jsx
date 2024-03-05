
import styles from "./App.Module.css"
import About from "./Component/About/About"
import Contact from "./Component/Contact/Contact"
import Experience from "./Component/Experience/Experience"
import Hero from "./Component/Hero/Hero"
import Navbar from "./Component/Navbar/Navbar"
import Project from "./Component/Projects/Project"

function App() {

  return (
    <div className={styles.App}>
     <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Project/>
    <Contact/>
    </div>
  )
}

export default App
