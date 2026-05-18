import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Explore from './components/Explore';
import Pillars from './components/Pillars';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
      </div>
      <Marquee />
      <Explore />
      <div className="container">
        <Pillars />
      </div>
    </>
  )
}

export default App
