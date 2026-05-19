import './Hero.css'
import phone from "../assets/PhoneFrame.png"

function Hero() {
  return (
    <>
      <section>
        <div className="hero-content">
            <div className="hero-badge">
                <span> ● Now live on Ethereum, Base & Solana</span>
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
                <li>No account required</li>
                <li>Self-custody</li>
                <li>Audited by Zellic</li>
            </div>
        </div>
        <div className="hero-img">
            <img  src={phone}/>
        </div>
      </section>
    </>
  )
}

export default Hero
