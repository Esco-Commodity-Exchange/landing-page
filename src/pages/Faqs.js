import Header from "../components/Header"
import Footer from "../components/Footer"


import React, { useState, useEffect } from 'react';

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('esco_logged_in') === 'true');
    }, []);

    const faqData = [
        { id: 'collapseOne', cat: 'general', q: 'What is ESCO Commodity Exchange?', a: 'ESCO Commodity Exchange is a secure, real-time platform designed for trading physical agricultural and commercial commodities...' },
        { id: 'collapseTwo', cat: 'account', q: 'How do I create an account?', a: 'Click the "Sign Up" button on the homepage...' },
        { id: 'collapseThree', cat: 'deposits', q: 'How can I deposit funds?', a: 'Navigate to your Dashboard or Wallet page...' },
        { id: 'collapseFour', cat: 'trading', q: 'How do I start trading?', a: 'Go to the "Trades" page or your main Dashboard...' },
        { id: 'collapseFive', cat: 'withdrawals', q: 'How do I withdraw my earnings?', a: 'Go to the Wallet page, click "Withdraw"...' },
        { id: 'collapseSix', cat: 'fees', q: 'Are there any fees for deposits or withdrawals?', a: 'Depositing funds is 100% free...' },
        { id: 'collapseSeven', cat: 'security', q: 'Is my personal information secure?', a: 'Absolutely. We deploy industry-standard multi-factor authentication...' },
        { id: 'collapseEight', cat: 'general', q: 'How can I contact customer support?', a: 'Our team is available round-the-clock...' },
    ];

    const filteredFaqs = activeCategory === 'all'
        ? faqData
        : faqData.filter(item => item.cat === activeCategory);

    return (
        <>
            <Header title={"FAQs - Esco Commodity Exchange"}/>
            <main className="container py-4" style={{ maxWidth: '1100px' }}>
                <div className="d-flex align-items-center gap-3 mb-4">
                    <button onClick={() => window.history.back()} className="btn border-0 p-0 shadow-none">
                        <i className="bi bi-arrow-left fs-3"></i>
                    </button>
                    <div>
                        <h2 className="font-display fw-bold text-esco-primary m-0" style={{ fontSize: '2.15rem' }}>FAQs</h2>
                        <p className="text-muted small m-0 mt-1">Find answers to common questions about ESCO Commodity Exchange</p>
                    </div>
                </div>

                <div className="row g-4 mt-1 mb-5">
                    {/* Categories Sidebar */}
                    <div className="d-none d-md-block col-md-4 col-lg-3">
                        <div className="bg-white border rounded-4 p-3 shadow-sm">
                            <h4 className="font-display fw-bold text-esco-primary mb-3 px-2" style={{ fontSize: '1.1rem' }}>Categories</h4>
                            <div className="d-flex flex-column gap-1">
                                {['all', 'account', 'deposits', 'trading', 'withdrawals', 'fees', 'security', 'general'].map(cat => (
                                    <button
                                        key={cat}
                                        className={`faq-category-btn ${activeCategory === cat ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(cat)}
                                    >
                                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="col-12 col-md-8 col-lg-9">
                        <div className="accordion" id="faqAccordion">
                            {filteredFaqs.map((item) => (
                                <div key={item.id} className="accordion-item shadow-sm mb-3">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.id}`}>
                                            {item.q}
                                        </button>
                                    </h2>
                                    <div id={item.id} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">{item.a}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact Panel */}
                        <div className="border-0 p-4 rounded-4 mt-4 bg-white border shadow-sm d-flex justify-content-between align-items-center">
                            <div>
                                <h5 className="fw-bold">Still have questions?</h5>
                                <p className="text-muted small">Our support team is here to help you anytime.</p>
                            </div>
                            <a href="mailto:escotradecoltd@gmail.com" className="btn btn-esco-outline">Contact Support <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default FAQ;