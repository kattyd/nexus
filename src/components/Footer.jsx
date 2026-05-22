import './Footer.css'
import { FaXTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa6'


const footerData = [
    {
    title: "DEVELOPERS",
    links: [
    "Documentation",
    "ConnectKit",
    "GitHub",
    "API Reference"
        ]
    },
    {
        title: "RESOURCES",
        links: [
            "Audit report",
            "Changelog",
            "Blog",
            "FAQs",
            "Support"
        ]
    },
    {
        title: "COMPANY",
        links: [
            "About",
            "Contact",
            "X (Twitter)",
            "Legal",
            "Press Kit"
        ]
    }
]

function Footer () {
    return (
        <div className="footer-content">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <h2>Nexus</h2>
                        <p>A beautiful self-custody wallet for Ethereum, Base, and Solana. Designed to make crypto easy for everyone.</p>
                    </div>
                    <div className="footer-columns">
                         {footerData.map((coulmn, colIndex) => (
                             <div className="footer-column" key={colIndex}>
                                 <h4 className='footer-header'>{coulmn.title}</h4>
                                 <ul className='footer-links'>
                                     {coulmn.links.map((link, linkIndex) => (
                                         <li key={linkIndex}>
                                             <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className='footer-link'>
                                             {link}
                                             </a>
                                         </li>
                                     ))}
                                 </ul>
                            </div>
                       ))}
                     </div>
                </div>
                <div className="footer-bottom">
                    <hr />
                    <div className="bottom-content">
                        <span className='copyright'>© 2025 Nexus. All rights reserved.</span>
                        <ul>
                            <li><a href="#"><FaXTwitter /></a></li>
                            <li><a href="#"><FaGithub /></a></li>
                            <li><a href="#"><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer