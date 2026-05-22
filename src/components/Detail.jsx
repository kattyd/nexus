import './Detail.css'
import Mini1 from "../assets/Mini1.png"
import Mini2 from "../assets/Mini2.png"
import Mini3 from "../assets/Mini3.png"
import Mini4 from "../assets/Mini4.png"
import { div, title } from 'framer-motion/client'

const details = [
    {
        tag: "LIVE",
        title: "Monitor in real-time.",
        desc: "Track all your transactions live with animated status updates, detailed breakdowns, and instant push notifications when they confirm.",
        img: Mini1
    },
    {
        tag: "PROTECTION",
        title: "Protect your assets.",
        desc: "Understand every transaction before you sign. Receive warnings on risky approvals, suspicious contracts, and wallet-draining interactions.",
        img: Mini2
    },
    {
        tag: "ORGANISE",
        title: "Organise your wallet.",
        desc: "Full control over your asset layout. Drag, reorder, star favourites, and archive anything you don't want cluttering your view.",
        img: Mini3
    },
    {
        tag: "CLARITY",
        title: "See everything clearly.",
        desc: "Crystal-clear breakdowns across all chains and wallets. Whether you have two or two hundred, the full picture is always one tap away.",
        img: Mini4
    }
]

function Detail () {
    return (
        <div className="container">
            <div className="detail-content">
                <div className="detail-header">
                    <span className="detail-tag">DETAILS THAT MATTER</span>
                    <h2>We sweat every detail, no matter how small.</h2>
                    <p>The small things make the big difference. Every screen, every animation, every number has been refined until it's right.</p>
                </div>
                <div className="detail-cards">
                    {details.map((detail, index) => (
                        <div key={index} className="detail-card">
                            <div className="detail-top">
                                <span className="d-tag">{detail.tag}</span>
                                <h3>{detail.title}</h3>
                                <p>{detail.desc}</p>
                            </div>
                            <div className="detail-img">
                                <img src={detail.img} alt={detail.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Detail