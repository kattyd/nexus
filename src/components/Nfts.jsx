import './Nfts.css';
import NftCard from '../assets/NFTCard.png';

const tags = [
    "Images",
    "Video",
    "3D Models",
    "Audio",
    "Interactive",
    "AR Models"
];

function Nfts () {
    return (
        <div className="container">
            <div className="nfts">
                <div className="nfts-left">
                    <span className="nfts-tag">SEAMLESS</span>
                    <h2>The best way to experience NFTs.</h2>
                    <p>View your collectibles in their true intended format. Full rich media support for 
                    video, audio, images, 3D models, and interactive content. Your collection has 
                    never looked this good.</p>
                <div className="nfts-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="n-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="nfts-right">
                <img src={NftCard} alt="NFT Gallery" />
            </div>
        </div>
    </div>   
    );
}

export default Nfts