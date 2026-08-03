import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";




const Terms = () => {
    const termsData = [
        {
            title: "1. Acceptance of Terms",
            icon: "person-fill",
            bg: "#eff6ff",
            color: "#2563eb",
            desc: "By creating an account or using any part of the ESCO Commodity Exchange platform, you agree to comply with and be bound by these Terms of Service and all applicable laws and regulations."
        },
        {
            title: "2. Eligibility",
            icon: "shield-fill-check",
            bg: "#ecfdf5",
            color: "#10b981",
            desc: "You must be at least 18 years old and legally capable of entering into binding contracts to use our services. By using our platform, you represent and warrant that you meet these eligibility requirements."
        },
        {
            title: "3. Account Registration",
            icon: "file-earmark-lock-fill",
            bg: "#faf5ff",
            color: "#8b5cf6",
            items: [
                "Provide accurate, current, and complete information during registration.",
                "Maintain the confidentiality of your account credentials.",
                "Responsible for all activities that occur under your account."
            ]
        },
        {
            title: "4. Use of Platform",
            icon: "exclamation-triangle-fill",
            bg: "#fffbeb",
            color: "#f59e0b",
            subDesc: "You agree to use the platform only for lawful purposes. You must not:",
            items: [
                "Violate any applicable laws or regulations.",
                "Attempt to gain unauthorized access to our systems.",
                "Use the platform to engage in fraudulent or harmful activities."
            ]
        },
        {
            title: "5. Wallet and Transactions",
            icon: "bank2",
            bg: "#ecfeff",
            color: "#06b6d4",
            items: [
                "All transactions are final and may not be reversed.",
                "Ensure the accuracy of transaction details before submitting.",
                "ESCO is not responsible for third-party payment delay or failure."
            ]
        }
    ];

    return (
        <>
            <Header title={"Terms"}/>
            <main className="container py-4" style={{ maxWidth: '1200px' }}>
                {/* HEADER */}
                <div className="d-flex align-items-center gap-3 mb-4">
                    <button
                        onClick={() => window.history.length > 1 ? window.history.back() : window.location.href = '/'}
                        className="btn border-0 p-0 text-slate-700 d-inline-flex align-items-center justify-content-center"
                        style={{ background: 'none', width: '44px', height: '44px', borderRadius: '50%' }}
                    >
                        <i className="bi bi-arrow-left fs-3"></i>
                    </button>
                    <div>
                        <h2 className="font-display fw-bold text-esco-primary m-0" style={{ fontSize: '2.15rem' }}>Terms of Service</h2>
                        <p className="text-muted small m-0 mt-1">Last updated: August 17, 2026</p>
                    </div>
                </div>

                {/* WELCOME BANNER */}
                <div className="border-0 p-4 rounded-4 mb-4 d-flex align-items-start gap-3" style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                    <div className="terms-icon-wrapper" style={{ backgroundColor: '#d1fae5', color: '#04432c' }}>
                        <i className="bi bi-file-earmark-text-fill fs-5"></i>
                    </div>
                    <p className="m-0 fw-medium" style={{ fontSize: '0.95rem', color: '#04432c' }}>
                        Welcome to ESCO Commodity Exchange. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully.
                    </p>
                </div>

                {/* TERMS GRID */}
                <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
                    {termsData.map((term, index) => (
                        <div className="col" key={index}>
                            <div className="terms-card-row border shadow-sm d-flex align-items-start gap-3 h-100 p-3 rounded-3">
                                <div className="terms-icon-wrapper" style={{ backgroundColor: term.bg, color: term.color }}>
                                    <i className={`bi bi-${term.icon} fs-5`}></i>
                                </div>
                                <div>
                                    <h3 className="font-display fw-bold text-esco-primary h5 mb-2" style={{ fontSize: '1.1rem' }}>{term.title}</h3>
                                    {term.desc && <p className="text-esco-muted small mb-0 lh-relaxed" style={{ fontSize: '0.92rem' }}>{term.desc}</p>}
                                    {term.subDesc && <p className="text-esco-muted small mb-2 lh-relaxed" style={{ fontSize: '0.92rem' }}>{term.subDesc}</p>}
                                    {term.items && (
                                        <div className="mt-2">
                                            {term.items.map((item, i) => (
                                                <div key={i} className="d-flex align-items-start gap-2 mb-1" style={{ fontSize: '0.88rem' }}>
                                                    <i className={`bi ${term.title.includes('Use of') ? 'bi-x-circle-fill text-danger' : 'bi-check-circle-fill text-success'}`} style={{ fontSize: '0.85rem', marginTop: '0.1rem' }}></i>
                                                    <span className="text-esco-muted">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTTOM BANNER */}
                <div className="border-0 p-4 rounded-4 mb-4 d-flex align-items-center gap-3" style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}>
                    <div className="terms-icon-wrapper" style={{ backgroundColor: '#dbeafe', color: '#2563eb' }}>
                        <i className="bi bi-shield-fill-check fs-5"></i>
                    </div>
                    <p className="m-0 fw-semibold" style={{ fontSize: '0.92rem', color: '#1e3a8a' }}>
                        ESCO Commodity Exchange reserves the right to modify these Terms of Service at any time. Your continued use of the platform constitutes acceptance of the updated terms.
                    </p>
                </div>
            </main>

            <Footer/>
        </>

    );
};

export default Terms;