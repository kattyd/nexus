import { useState } from 'react';
import './Faqs.css';

const faqData = [
    {
        question: "Is Nexus safe to use?",
        answer: "Yes. Nexus is fully self-custodial — only you have access to your private keys and wallet. We never store or transmit your credentials. The app has been independently audited by Zellic, a leading blockchain security firm, and requires biometric authentication for all sensitive actions."
    },
    {
        question: "Which blockchains does Nexus support?",
        answer: "Nexus currently supports Ethereum mainnet, Base, Solana, Optimism, Arbitrum, Polygon, and zkSync. We're continuously adding more chains — expect several new networks in the coming months."
    },
    {
        question: "Can I import my existing wallet?",
        answer: "Absolutely. You can import any existing non-custodial wallet using your Secret Recovery Phrase or Private Key. We have step-by-step guides for importing from MetaMask, Phantom, Rainbow, and other popular wallets."
    },
    {
        question: "Do I need to create an account?",
        answer: "No. Nexus works without any email address, phone number, or personal information. You can choose to add a recovery email for convenience, but it's entirely optional. Your on-chain identity stays yours alone."
    },
    {
        question: "How does the transaction simulation work?",
        answer: "Before you sign any transaction, Nexus simulates it against the current blockchain state and shows you exactly what will happen — including token flows, approvals, and any potential risks. This prevents accidental signatures on harmful contracts."
    },
    {
        question: "Is Nexus available on Android?",
        answer: "Nexus is currently available on iOS only. Android is in active development and is expected later this year. Sign up to our mailing list to be notified when it launches."
    }
];

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-section">
            <div className="container">
                <div className="faq-header">
                    <span className="faq-tag">FAQ</span>
                    <h2>Frequently asked questions.</h2>
                </div>
                <div className="faqs">
                {faqData.map((faq, index) => {
                    const isOpen = activeIndex === index;
                    
                    return (
                        <div 
                            className={`faq-item ${isOpen ? 'active' : ''}`} 
                            key={index}
                        >
                            <button 
                                className="faq-question" 
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={isOpen}
                            >
                                <h3>{faq.question}</h3>
                                <div className="faq-icon">
                                    <span className="icon-line horizontal"></span>
                                    <span className="icon-line vertical"></span>
                                </div>
                            </button>
                            
                            <div className="faq-answer-wrapper">
                                <p className="faq-answer">{faq.answer}</p>
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        </div>
    );
}

export default FAQ;