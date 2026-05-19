import './Activity.css';
import ActivityCard from '../assets/ActivityCard.png';

const atags = [
    "Human Readable",
    "Real-Time",
    "Custom Filters"
]

function Activity () {
    return (
        <div className="activity">
            <div className="activity-left">
                <span className="activity-tag">UNDERSTANDABLE</span>
                <h2>Wallet activity you can actually understand.</h2>
                <p>Your transaction history is readable at a glance. No more deciphering cryptic 
                    event names or confusing contract calls. Nexus translates everything into plain English.</p>
                <div className="a-tags">
                    {atags.map((tag, index) => (
                        <span key={index} className="a-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="activity-right">
                <img src={ActivityCard} alt="Activity Card" />
            </div>
        </div>
    )   
}

export default Activity