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
import Testimonials from './components/Testimonials';
import Detail from './components/Detail';
import FAQ from './components/Faqs';
import Download from './components/Download';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
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
      <Testimonials />
      <Detail />
      <FAQ />
      <Download />
      <Footer />
    </>
  )
}

export default App
