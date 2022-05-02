import { useState } from 'react'
import About from './About';
//import logo from './logo.svg'
import './App.css'
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Project from './Project';
import Service from './Service';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Project />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
