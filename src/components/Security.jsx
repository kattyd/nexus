import './Security.css';

const stags = [
    "Self-Custody",
    "Own Your Keys",
    "No Name Required"
]

const securityFeatures = [
    {
        title: "Your keys, your crypto",
        desc: "Private keys are genrated on-device and never transmitted. We cannot access them. Ever."
    },
    {
        title: "Biometric protection",
        desc: "Face ID or fingerprint required for every transaction. Youur assets stay locked even if your device is lost."
    },
    {
        title: "Transaction simulation",
        desc: "Every transaction is simulated before signing. You see exactly what happens - including any potential risks or approvals."
    },
    {
        title: "No account, no exposure",
        desc: "Use Nexus with no email, no phone number. Your on-chain footprint stays yours alone."
    }
]

function Security () {
    return (
        <div className="security">
            <div className="container">
                <div className="security-content">
                    <div className="security-left">
                        <span className="security-tag">SECURE</span>
                        <h2>Relentless protection. Restful ease.</h2>
                        <p>Nexus is fully self-custodial. Only you have access to your
                            wallet and private keys. We have no control over your 
                            crypto — nor would we want any.</p>
                        <div className="s-tags">
                            {stags.map((tag, index) => (
                                <div key={index} className="s-tag">
                                    <span>●</span>
                                    <li>{tag}</li>
                                </div>
                            ))}
                        </div>
                        <div className="light-tag">
                            <span>✓ Audited by Zellic Security — 2025</span>
                        </div>
                    </div>
                    <div className="security-right">
                        {securityFeatures.map((feature, index) => (
                            <div key={index} className="feature">
                                <div className="f-title">{feature.title}</div>
                                <div className="f-desc">{feature.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Security