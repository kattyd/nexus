import './Hero.css'
import phone from "../assets/PhoneFrame.png"
import IllusLeft from "../assets/Illusleft.png"
import IllusRight from "../assets/Illusright.png"

function Hero() {
  return (
    <section className="hero-section">
      <img src={IllusLeft} className="hero-illus left-side" alt="" />
      <img src={IllusRight} className="hero-illus right-side" alt="" />

      <div className="hero-content">
          <div className="hero-badge">
              <span>● Now live on Ethereum, Base & Solana</span>
          </div>
          <div className="hero-txt">
              <h1>Your favorite <text>multi-chain</text> wallet.</h1>
              <span>Explore Ethereum, Base, and Solana with one beautiful, self-custody app.
                  Powerful DeFi — made as simple as a banking app.</span>
          </div>
          <div className="hero-btns">
              <button className="download">
                  Download for iOS ↗
              </button>
              <button className="watch">
                  Watch the video
              </button>
          </div>
          <div className="trust">
              <span>No account required</span>
              <span>Self-custody</span>
              <span>Audited by Zellic</span>
          </div>
      </div>
    </section>
  )
}

export default Hero;
