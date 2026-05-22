import './Testimonials.css';

const testimonials = [
    {
        name: "Maya Rodriguez",
        social: "@mayaonchain",
        review: "This is the web2 UX that web3 has been desperately missing. Nexus makes my Metamask feel like 2015.",
        color: "#5B5CF6" 
    },
    {
        name: "Dan Kim",
        social: "@dankrypto",
        review: "Onboarded my mum onto crypto using Nexus. She set up her wallet in 4 minutes without asking me a single question.",
        color: "#0EA5E9"
    },
    {
        name: "Sofia Lee",
        social: "@sofiabuilds",
        review: "The micro-animations are on another level. I genuinely enjoy using this wallet just because it feels incredible to tap through.",
        color: "#059669"
    },
    {
        name: "Jake Williams",
        social: "@jakeweb3",
        review: "Best NFT viewing experience of any wallet. Full rich media, everything renders perfectly. My collection finally looks right.",
        color: "#F59E0B"
    }
];

const getInitials = (name) => {
    if (!name) return "TX";
    const parts = name.split(' ');
    if (parts.length > 1) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
};

function Testimonials() {
    return (
        <div className="testimonial-content">
            <div className="container">
                <div className="testimonial-top">
                    <span>FRIENDS OF NEXUS</span>
                    <h2>See what people are saying.</h2>
                </div>
            </div>
                <div className="testimonial-cards">
                    {testimonials.map((t, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="testimonial-header">
                                <div 
                                    className="icon-badge" 
                                    style={{ backgroundColor: t.color }}
                                >
                                    {getInitials(t.name)}
                                </div>
                                <div className="author-info">
                                    <h4>{t.name}</h4>
                                    <span className="social-handle">{t.social}</span>
                                </div>
                            </div>
                            <p className="review-text">{t.review}</p>
                        </div>
                    ))}
                    {testimonials.map((t, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="testimonial-header">
                                <div 
                                    className="icon-badge" 
                                    style={{ backgroundColor: t.color }}
                                >
                                    {getInitials(t.name)}
                                </div>
                                <div className="author-info">
                                    <h4>{t.name}</h4>
                                    <span className="social-handle">{t.social}</span>
                                </div>
                            </div>
                            <p className="review-text">{t.review}</p>
                        </div>
                    ))}
                    {testimonials.map((t, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="testimonial-header">
                                <div 
                                    className="icon-badge" 
                                    style={{ backgroundColor: t.color }}
                                >
                                    {getInitials(t.name)}
                                </div>
                                <div className="author-info">
                                    <h4>{t.name}</h4>
                                    <span className="social-handle">{t.social}</span>
                                </div>
                            </div>
                            <p className="review-text">{t.review}</p>
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default Testimonials;