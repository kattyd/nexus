import './Explore.css'
import sendCard from '../assets/SendFeatCard.png'

function Explore() {
    return (
        <div className="explore">
            <div className="container">
                <div className="explore-header">
                    <p className="header-text">Send, swap, receive. All in one place.</p>
                    <h1 className="header-title">Explore crypto in a whole new way.</h1>
                    <ul className="header-list">
                        <li>Send</li>
                        <li>Swap</li>
                        <li>Receive</li>
                        <li>Buy</li>
                    </ul>
                </div>
                <div className="send-content">
                    <div className="send">
                        <p className="send-tag">
                            SEND
                        </p>
                        <h2 className="send-title">Send to anyone, anywhere.</h2>
                        <span className="send-description">
                            Transfer tokens or collectibles to any wallet address or ENS username in just a few taps. Nexus handles the complexity so you don't have to.
                        </span>
                        <div className="send-list">
                            <li>Send to any address or ENS name</li>
                            <li>Multi-chain in a single flow</li>
                            <li>Transaction simulation before signing</li>
                            <li>Real-time fee estimates</li>
                        </div>
                        <button className="send-button">Download Nexus →</button>
                    </div>
                    <div className="send-card">
                        <img src={sendCard} alt="Send Feature Card" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;