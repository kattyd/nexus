import './Marquee.css'

function Marquee() {
   const chains = [
    { name: "Ethereum", color: "#627eea" },
    { name: "Base", color: "#0052ff" },
    { name: "Solana", color: "#9945ff" },
    { name: "Optimism", color: "#ff0420" },
    { name: "Arbitrum", color: "#2d374b" },
    { name: "Polygon", color: "#8247e5" },
    { name: "zkSync", color: "#1c1c1c" },
    { name: "Blast", color: "#fbcc5c" },
    { name: "DeFi", color: "#17b978" },
    { name: "NFTs", color: "#5b5cf6" },
    { name: "WalletConnect", color: "#f59e0b" }
   ];

  return (
    <div className="marquee">
        <div className="chains">
        {[...chains, ...chains, ...chains, ...chains].map((chain, index) => (
            <div key={`${chain.name}-${index}`} className="chain-pill">
                <span className="chain-dot" style={{ backgroundColor: chain.color}} />
                <span className="chain-text">{chain.name}</span>
            </div>
        ))}
        </div>
    </div>
  );
}

export default Marquee;