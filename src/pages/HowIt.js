import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

class HowIt extends Component {
    render() {
        return (
            <>
                <Header title={"How it works"}/>

                <main className="container py-4" style={{ maxWidth: '1200px' }}>
                    {/* BACK BUTTON AND HEADER ROW */}
                    <div className="d-flex align-items-center gap-3 mb-4">
                        <button
                            onClick={() => window.history.length > 1 ? window.history.back() : window.location.href = '/'}
                            className="btn border-0 p-0 text-slate-700 d-inline-flex align-items-center justify-content-center shadow-none transition"
                            style={{ background: 'none', width: '44px', height: '44px', borderRadius: '50%', minWidth: '44px' }}
                            title="Back"
                        >
                            <i className="bi bi-arrow-left fs-3"></i>
                        </button>
                        <div>
                            <h2 className="font-display fw-bold text-esco-primary m-0" style={{ fontSize: '2.15rem' }}>How It Works</h2>
                            <p className="text-muted small m-0 mt-1">Simple steps to start your journey with ESCO Commodity Exchange</p>
                        </div>
                    </div>

                    {/* FIVE STEPPING CARDS PIPELINE */}
                    <div className="position-relative mb-5">
                        <div className="steps-connector-line"></div>
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-stretch gap-4 position-relative">

                            {[
                                { icon: 'person-plus', title: 'Create Account', desc: 'Sign up and complete your profile to create your account securely.', color: '#2563eb', bg: '#eff6ff' },
                                { icon: 'wallet2', title: 'Deposit Funds', desc: 'Add funds to your wallet using your preferred payment method.', color: '#10b981', bg: '#ecfdf5' },
                                { icon: 'graph-up-arrow', title: 'Trade Commodities', desc: 'Explore markets and trade your favorite commodities easily.', color: '#f59e0b', bg: '#fffbeb' },
                                { icon: 'pie-chart', title: 'Track & Manage', desc: 'Monitor your positions, balances, and transactions in real-time.', color: '#8b5cf6', bg: '#faf5ff' },
                                { icon: 'cash-stack', title: 'Withdraw Earnings', desc: 'Withdraw your earnings to your preferred account anytime.', color: '#059669', bg: '#ecfdf5' }
                            ].map((step, index) => (
                                <div key={index} className="step-card shadow-sm d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="step-circle" style={{ backgroundColor: step.bg, color: step.color }}>
                                            <i className={`bi bi-${step.icon} fs-3`}></i>
                                            <div className="step-number-badge" style={{ backgroundColor: step.color }}>{index + 1}</div>
                                        </div>
                                        <h4 className="font-display fw-bold text-esco-primary h5 mb-2" style={{ fontSize: '1.15rem' }}>{step.title}</h4>
                                        <p className="text-muted small mb-0 px-1" style={{ lineHeight: '1.5', fontSize: '0.88rem' }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* SECURITY BLUE BANNER */}
                    <div className="border-0 p-4 rounded-4 mb-5 d-flex align-items-center gap-3" style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}>
                        <div className="privacy-icon-wrapper" style={{ backgroundColor: '#dbeafe', color: '#2563eb' }}>
                            <i className="bi bi-shield-fill-check fs-4"></i>
                        </div>
                        <div style={{ color: '#1e3a8a' }}>
                            <h5 className="fw-bold m-0" style={{ fontSize: '1rem' }}>Your security is our priority</h5>
                            <p className="m-0 mt-1 text-muted small" style={{ fontSize: '0.88rem', color: '#1e3a8a', fontWeight: 500 }}>
                                We use advanced encryption and secure systems to protect your data and funds.
                            </p>
                        </div>
                    </div>

                    {/* WHY CHOOSE SECTION */}
                    <section className="mb-5">
                        <h3 className="font-display fw-bold text-esco-primary text-center mb-4" style={{ fontSize: '1.75rem' }}>Why Choose ESCO Commodity Exchange?</h3>
                        <div className="row g-4">
                            {[
                                { icon: 'shield-check', title: 'Secure & Trusted', desc: 'Bank-level security and encryption to keep your funds and data safe.', color: '#10b981', bg: '#ecfdf5' },
                                { icon: 'lightning-charge', title: 'Fast & Efficient', desc: 'Instant deposits, quick trades, and real-time transaction updates.', color: '#3b82f6', bg: '#eff6ff' },
                                { icon: 'diagram-3', title: 'Wide Range of Markets', desc: 'Trade a variety of commodities with highly competitive market-maker pricing.', color: '#8b5cf6', bg: '#faf5ff' },
                                { icon: 'headset', title: '24/7 Support', desc: 'Our support team is always here to help you whenever and wherever you need.', color: '#f59e0b', bg: '#fffbeb' }
                            ].map((benefit, i) => (
                                <div key={i} className="col-12 col-md-6 col-lg-3">
                                    <div className="benefit-card shadow-sm h-100">
                                        <div className="benefit-icon-box" style={{ backgroundColor: benefit.bg, color: benefit.color }}>
                                            <i className={`bi bi-${benefit.icon} fs-4`}></i>
                                        </div>
                                        <h4 className="font-display fw-bold text-esco-primary h5 mb-2" style={{ fontSize: '1.05rem' }}>{benefit.title}</h4>
                                        <p className="text-muted small mb-0" style={{ lineHeight: '1.5', fontSize: '0.88rem' }}>{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA BOX (BOTTOM) */}
                    <div className="border-0 p-4 rounded-4 mt-5 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-4 shadow-sm text-white" style={{ backgroundColor: '#022c1e', border: '1px solid #04432c' }}>
                        <div className="d-flex align-items-center gap-3">
                            <div className="terms-icon-wrapper bg-white bg-opacity-10 text-white">
                                <i className="bi bi-gift fs-4"></i>
                            </div>
                            <div>
                                <h5 className="font-display fw-bold m-0" style={{ fontSize: '1.15rem', color: '#ffffff' }}>Ready to get started?</h5>
                                <p className="text-white text-opacity-75 small m-0 mt-1" style={{ fontSize: '0.88rem' }}>Create your account today and experience seamless commodity trading.</p>
                            </div>
                        </div>
                        <div>
                            <Link to="/signup" className="btn text-white px-4 py-2 text-decoration-none d-inline-flex align-items-center gap-2" style={{ backgroundColor: '#108d5c', fontSize: '0.9rem', fontWeight: 600 }}>
                                Create Account <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </main>

                <Footer/>
            </>
        );
    }
}

export default HowIt;