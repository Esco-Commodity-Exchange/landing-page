import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";


const Privacy = () => {
    const policyItems = [
        {
            title: "1. Information We Collect",
            icon: "person-fill",
            bg: "#eff6ff",
            color: "#2563eb",
            desc: "We collect personal information that you provide to us, such as your name, email address, phone number, and payment details when you register or use our services."
        },
        {
            title: "2. How We Use Your Information",
            icon: "gear-fill",
            bg: "#ecfdf5",
            color: "#10b981",
            desc: "We use your information to:",
            list: [
                "Provide and maintain our services",
                "Process transactions and manage your account",
                "Communicate with you about important updates",
                "Improve our platform and user experience",
                "Comply with legal obligations"
            ]
        },
        {
            title: "3. Information Sharing",
            icon: "share-fill",
            bg: "#faf5ff",
            color: "#8b5cf6",
            desc: "We do not sell or rent your personal information. We may share your information with trusted third-party service providers who assist in operating our platform, subject to strict confidentiality agreements."
        },
        {
            title: "4. Data Security",
            icon: "shield-lock-fill",
            bg: "#fffbeb",
            color: "#f59e0b",
            desc: "We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction."
        },
        {
            title: "5. Your Rights",
            icon: "person-check-fill",
            bg: "#eff6ff",
            color: "#3b82f6",
            desc: "You have the right to access, update, or delete your personal information. You can contact us anytime for assistance."
        },
        {
            title: "6. Changes to This Policy",
            icon: "file-earmark-text-fill",
            bg: "#ecfdf5",
            color: "#059669",
            desc: "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page."
        }
    ];

    const handleBack = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = '/';
        }
    };

    return (
        <>
            <Header title={"Privacy"}/>
            <main className="container py-4" style={{ maxWidth: '1200px' }}>
                {/* Header */}
                <div className="d-flex align-items-center gap-3 mb-4">
                    <button
                        onClick={handleBack}
                        className="btn border-0 p-0 text-slate-700 d-inline-flex align-items-center justify-content-center"
                        style={{ background: 'none', width: '44px', height: '44px', borderRadius: '50%' }}
                        title="Back"
                    >
                        <i className="bi bi-arrow-left fs-3"></i>
                    </button>
                    <div>
                        <h2 className="font-display fw-bold text-esco-primary m-0" style={{ fontSize: '2.15rem' }}>Privacy Policy</h2>
                        <p className="text-muted small m-0 mt-1">Last updated: May 17, 2024</p>
                    </div>
                </div>

                {/* Welcome Banner */}
                <div className="border-0 p-4 rounded-4 mb-4 d-flex align-items-start gap-3" style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                    <div className="privacy-icon-wrapper" style={{ backgroundColor: '#d1fae5', color: '#04432c', padding: '10px', borderRadius: '8px' }}>
                        <i className="bi bi-lock-fill fs-5"></i>
                    </div>
                    <p className="m-0 fw-medium" style={{ fontSize: '0.95rem', color: '#04432c' }}>
                        At ESCO Commodity Exchange, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information.
                    </p>
                </div>

                {/* Grid Content */}
                <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
                    {policyItems.map((item, index) => (
                        <div className="col" key={index}>
                            <div className="privacy-card-row border shadow-sm d-flex align-items-start gap-3 h-100 p-3 rounded-3">
                                <div className="privacy-icon-wrapper" style={{ backgroundColor: item.bg, color: item.color, padding: '10px', borderRadius: '8px' }}>
                                    <i className={`bi bi-${item.icon} fs-5`}></i>
                                </div>
                                <div>
                                    <h3 className="font-display fw-bold text-esco-primary h5 mb-2" style={{ fontSize: '1.1rem' }}>{item.title}</h3>
                                    <p className="text-esco-muted small mb-0 lh-relaxed" style={{ fontSize: '0.92rem' }}>{item.desc}</p>
                                    {item.list && (
                                        <div className="mt-2">
                                            {item.list.map((li, i) => (
                                                <div key={i} className="d-flex align-items-start gap-2 mb-1" style={{ fontSize: '0.88rem', color: '#666' }}>
                                                    <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '0.85rem', marginTop: '0.2rem' }}></i>
                                                    <span>{li}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Info Banner */}
                <div className="border-0 p-4 rounded-4 mb-4 d-flex align-items-center gap-3" style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}>
                    <div className="privacy-icon-wrapper" style={{ backgroundColor: '#dbeafe', color: '#2563eb', padding: '10px', borderRadius: '8px' }}>
                        <i className="bi bi-shield-fill-check fs-5"></i>
                    </div>
                    <p className="m-0 fw-semibold" style={{ fontSize: '0.92rem', color: '#1e3a8a' }}>
                        If you have any questions about this Privacy Policy, please contact our support team.
                    </p>
                </div>
            </main>

            <Footer/>

        </>

    );
};

export default Privacy;