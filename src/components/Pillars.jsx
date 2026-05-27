import './Pillars.css'

const pills = [
    {
        tag: "EASY",
        title: "Simple from day one.",
        desc: "Onboard in under 3 minutes. No seed phrases to write down. No confusing jargon. Just your wallet, ready to go."
    },
    {
        tag: "FAST",
        title: "Uncompromising speed",
        desc: "Optimized for performance at every layer. Real-time balances, instant transaction feedback, and zero lag across all chains."
    },
    {
        tag: "SECURE",
        title: "Your keys, your crypto.",
        desc: "Fully self-custodial. Biometric authentication on every sensitive action. Independently audited by Zellic security firm."
    },
    {
        tag: "POWERFUL",
        title: "The full power of Web3.",
        desc: "NFTs, DeFi, WalletConnect, advanced portfolio management. Everything you need to go deep into the on-chain world."
    }
]
function Pillars () {
    return (
        <>
            <div className="pillars-top">
                <div className="pillars-tag">
                    <span>WHY NEXUS</span>
                </div>
                <div className="pillars-header">
                    <h2>Built for everyone. <br /> Powerful enough for pros.</h2>
                </div>
                <div className="pillars-desc">
                    <p> Whether you're buying your first ETH or managing a multi-chain DeFi portfolio - Nexus meets you where you are.</p>
                </div>
            </div>
            <div className="pillars">
                {pills.map((pill, index) => (
                    <div key={index} className="pill">
                        <div className="p-tag">{pill.tag}</div>
                        <div className="p-title"><span>{pill.title}</span></div>
                        <div className="p-desc">{pill.desc}</div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Pillars