import './Portfolio.css';
import PortfolioCard from '../assets/PortfolioCard.png';

const ptags = [
    "Watch Any Wallet",
    "Rich Notifications",
    "Multi-chain"
]

function Portfolio () {
    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolio-content">
                    <div className="portfolio-left">
                        <img src={PortfolioCard} alt="Portfolio Card" />
                    </div>
                    <div className="portfolio-right">
                        <span className="portfolio-tag">SIMPLE</span>
                        <h2>Watch every wallet you care about.</h2>
                        <p>Track unlimited wallets in view-only mode by entering any address or ENS name. Get real-time notifications on any activity — yours or anyone else's.</p>
                        <div className="port-tags">
                            {ptags.map((tag, index) => (
                                <span key={index} className="port-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio