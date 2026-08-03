import React, {Component} from 'react';
import Axios from "axios";
import ApiUrl from "../AppUrl/ApiUrl";
import moment from "moment";
import {Link} from "react-router-dom";
import Loading from "../components/Loading";
import Header from "../components/Header"
import Footer from "../components/Footer"

export function TimeAgo(date){
    var localTime  = moment.utc(date).toDate();
    return localTime
}

class Home extends Component {


    render() {
        return (
            <>
                <div className="esco-wrapper position-relative">

                    <Header title="Esco Commodity Exchange"/>

                    <main>
                        {/* HERO SEGMENT */}
                        <div className="container py-5 my-md-4">
                            <div className="row align-items-center">
                                <article className="col-lg-5">
            <span className="esco-trust-pill mb-4" id="trust-indicator">
              <i className="bi bi-patch-check-fill text-success"></i> Secured Escrow System
            </span>
                                    <h1 className="font-display fw-bold display-4 text-esco-primary mb-3">
                                        Connecting Farms to Factories directly.
                                    </h1>
                                    <p className="text-esco-muted fs-5 mb-4 opacity-90">
                                        Trade agricultural products and metals in a secure, transparent, and efficient marketplace. Get real-time prices, secure payments, and reliable delivery – all in one platform.
                                    </p>
                                    <div className="d-flex flex-wrap gap-3 mb-5">
                                        <a id="btn-start-trading" className="btn btn-esco-solid esco-hero-btn" href="signup.html">
                                            Start Trading Now <i className="bi bi-arrow-right ms-2 fs-6"></i>
                                        </a>
                                        <a id="btn-how-it-works" href="how-it-works.html" className="btn btn-esco-outline esco-hero-btn">
                                            <i className="bi bi-info-circle me-2 fs-5"></i> How It Works
                                        </a>
                                    </div>
                                    <dl className="row g-3 border-top pt-4">
                                        <div className="col-4">
                                            <dt className="font-mono-numbers fw-bold text-esco-primary fs-4 m-0">৳45B+</dt>
                                            <dd className="text-esco-muted small m-0 uppercase-tracking">Volume Traded</dd>
                                        </div>
                                        <div className="col-4">
                                            <dt className="font-mono-numbers fw-bold text-esco-primary fs-4 m-0">99.8%</dt>
                                            <dd className="text-esco-muted small m-0 uppercase-tracking">SLA Clearance</dd>
                                        </div>
                                        <div className="col-4">
                                            <dt className="font-mono-numbers fw-bold text-esco-primary fs-4 m-0">20K+</dt>
                                            <dd className="text-esco-muted small m-0 uppercase-tracking">Verified Users</dd>
                                        </div>
                                    </dl>
                                </article>
                                <div className="col-lg-7 mt-5 mt-lg-0">
                                    <img
                                        id="hero-custom-image"
                                        className="img-fluid rounded-4 d-block mx-auto"
                                        src="/hero image buy sell.png"
                                        alt="Esco Commodity Exchange"
                                        style={{ maxWidth: "80%", height: "auto", objectFit: "contain", objectPosition: "center" }}
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* LIVE MARKET PRICES TICKER SECTION */}
                        <section className="container-fluid bg-esco-ticker py-2 esco-ticker-banner border-bottom" id="markets">
                            <div className="d-flex align-items-center w-100">
          <span className="esco-ticker-badge">
            <i className="bi bi-broadcast text-danger small me-1"></i> LIVE MARKET PRICES
          </span>
                                <div className="esco-ticker-scroll-wrapper">
                                    <div className="esco-ticker-scroll-content" id="live-prices-container">
                                        {[...Array(2)].map((_, setIndex) => (
                                            <React.Fragment key={setIndex}>
                                                <time className="esco-ticker-item"><span className="opacity-50">🌾 Rice (Premium):</span> <span className="font-mono-numbers fw-semibold">৳ 42,800 / Ton</span> <span className="text-success small fw-bold"><i className="bi bi-caret-up-fill me-1"></i>+1.2%</span></time>
                                                <time className="esco-ticker-item"><span className="opacity-50">🥔 Potato (Holland):</span> <span className="font-mono-numbers fw-semibold">৳ 25,600 / Ton</span> <span className="text-danger small fw-bold"><i className="bi bi-caret-down-fill me-1"></i>-0.5%</span></time>
                                                <time className="esco-ticker-item"><span className="opacity-50">🌾 Wheat:</span> <span className="font-mono-numbers fw-semibold">৳ 24,600 / Ton</span> <span className="text-success small fw-bold"><i className="bi bi-caret-up-fill me-1"></i>+2.4%</span></time>
                                                <time className="esco-ticker-item"><span className="opacity-50">🧅 Onion:</span> <span className="font-mono-numbers fw-semibold">৳ 18,400 / Ton</span> <span className="text-muted small fw-bold">0.0%</span></time>
                                                <time className="esco-ticker-item"><span className="opacity-50">🪙 Gold:</span> <span className="font-mono-numbers fw-semibold">৳ 8,340.00 / KG</span> <span className="text-success small fw-bold"><i className="bi bi-caret-up-fill me-1"></i>+1.5%</span></time>
                                                <time className="esco-ticker-item"><span className="opacity-50">🪙 Silver:</span> <span className="font-mono-numbers fw-semibold">৳ 8,340.00 / KG</span> <span className="text-success small fw-bold"><i className="bi bi-caret-up-fill me-1"></i>+1.5%</span></time>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* COMMODITIES OVERVIEW TILES */}
                        <section className="container py-5 my-5">
                            <h6 className="text-esco-green fw-bold text-uppercase tracking-wider mb-2">Market Overview</h6>
                            <div className="row align-items-end mb-4">
                                <header className="col-md-8">
                                    <h2 className="font-display fw-bold text-esco-primary mb-3">Trade the Most Demanded Commodities.</h2>
                                    <p className="text-esco-muted mb-0">Access a wide range of agricultural products and industrial metals through a secure and transparent marketplace.</p>
                                </header>
                                <div className="col-md-4 text-start text-md-end mt-3 mt-md-0">
                                    <Link to="/trade" className="text-esco-primary fw-bold text-decoration-none">Explore All Markets <i className="bi bi-arrow-right ms-1"></i></Link>
                                </div>
                            </div>

                            <nav className="commodity-market-grid mt-4">
                                {[
                                    { icon: "🌾", name: "Rice", price: "৳485.20 / KG", trend: "down", val: "-1.2%" },
                                    { icon: "🥔", name: "Potato", price: "৳312.50 / KG", trend: "up", val: "+2.4%" },
                                    { icon: "🧅", name: "Onion", price: "৳220.00 / KG", trend: "none", val: "0.0%" },
                                    { icon: "🪙", name: "Gold", price: "৳8,340.00 / KG", trend: "up", val: "+1.5%" },
                                    { icon: "🪙", name: "Silver", price: "৳8,340.00 / KG", trend: "up", val: "+1.5%" }
                                ].map((item, idx) => (
                                    <a key={idx} className="commodity-card text-decoration-none" href="trade.html">
                                        <div className="commodity-header">
                                            <div className="commodity-icon-box">{item.icon}</div>
                                            <span className={`${item.trend === 'up' ? 'text-success' : item.trend === 'down' ? 'text-danger' : 'text-secondary'} small fw-bold d-flex align-items-center`}>
                  {item.trend !== 'none' && <i className={`bi bi-caret-${item.trend}-fill me-1`}></i>} {item.val}
                </span>
                                        </div>
                                        <div>
                                            <h4 className="font-display fw-bold text-esco-primary fs-5 m-0">{item.name}</h4>
                                            <p className="text-esco-muted small text-uppercase tracking-wider m-0 my-2" style={{ fontSize: "0.65rem" }}>Current Price</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="font-mono-numbers fw-bold text-esco-primary">{item.price}</span>
                                                <i className="bi bi-chevron-right text-esco-green"></i>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </nav>
                        </section>

                        {/* BENEFITS SECTION */}
                        <section className="container py-5 my-5" id="benefits">
                            <div className="mb-5">
          <span className="esco-trust-pill mb-3 d-inline-block" style={{ backgroundColor: "#ecfdf5", color: "#108d5c", fontSize: "0.75rem", padding: "0.35rem 0.75rem", borderRadius: "50px", fontWeight: "600" }}>
            <i className="bi bi-shield-check me-1"></i> WHY ESCO EXCHANGE
          </span>
                                <h2 className="font-display fw-bold text-esco-primary mb-3" style={{ fontSize: "2.25rem" }}>Built for Modern Commodity Trading.</h2>
                            </div>

                            <div className="row g-4">
                                {[
                                    { icon: "bi-shield-fill-check", title: "Secure Escrow Protection", desc: "Multi-layer verification and secure fund holding ensure every trade is settled with absolute confidence." },
                                    { icon: "bi-graph-up-arrow", title: "Real-Time Market Prices", desc: "Access millisecond-accurate pricing data from local and global markets to make informed decisions." },
                                    { icon: "bi-house-check-fill", title: "Verified Warehouses", desc: "Integrated network of state-of-the-art facilities with real-time inventory tracking." },
                                    { icon: "bi-truck", title: "Integrated Logistics", desc: "Seamlessly move commodities from farm to factory with our automated fleet management." },
                                    { icon: "bi-patch-check-fill", title: "Verified Traders", desc: "Connect with a pre-screened ecosystem of institutional buyers and sellers." },
                                    { icon: "bi-globe", title: "Future Global Trading", desc: "Expanding our footprint beyond borders to facilitate cross-continental commodity flows.", isDark: true }
                                ].map((card, idx) => (
                                    <div key={idx} className="col-12 col-md-6 col-lg-4">
                                        <div className={`esco-benefit-card ${card.isDark ? 'esco-benefit-dark-card' : ''} shadow-sm`}>
                                            <div className="d-flex flex-column h-100 justify-content-between">
                                                <div>
                                                    <div className="esco-benefit-icon" style={!card.isDark ? { backgroundColor: "#ecfdf5", color: "#10b981" } : {}}>
                                                        <i className={`bi ${card.icon}`}></i>
                                                    </div>
                                                    <h4 className={`font-display fw-bold ${card.isDark ? 'text-white' : 'text-esco-primary'} mb-3 h5`} style={{ fontSize: "1.15rem" }}>{card.title}</h4>
                                                    <p className={`${card.isDark ? 'text-esco-muted' : 'text-esco-muted'} small mb-0`} style={{ lineHeight: "1.6", fontSize: "0.88rem" }}>{card.desc}</p>
                                                </div>
                                                {card.isDark && (
                                                    <div className="mt-3">
                                                        <a href="#" className="learn-more-link" onClick={(e) => { e.preventDefault(); alert('Global trading desks are being prepared in compliance with international export regulations. Stay tuned!'); }}>LEARN MORE <i className="bi bi-arrow-right"></i></a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>
                    <Footer/>
                </div>
            </>
        );
    }
}

export default Home;
