import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Explore from './components/Explore';
import Pillars from './components/Pillars';
import Nfts from './components/Nfts';
import Portfolio from './components/Portfolio';
import Activity from './components/Activity';
import Security from './components/Security';

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
      <hr />
      <Nfts />
      <Portfolio />
      <div className="container">
        <Activity />
      </div>
      <Security />
    </>
  )
}

export default App
