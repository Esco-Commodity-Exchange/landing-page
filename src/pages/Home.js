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
                <Header title="Esco Commodity Exchange"/>

                <main>
                    {/* Hero Section */}
                    <section className="hero">
                        <div className="site-container hero-grid">
                            <div className="hero-copy">
                                <span className="eyebrow">Real commodity opportunities</span>
                                <h1 className="hero-title">Invest in Real Commodities with ESCO Commodity Exchange</h1>
                                <p className="hero-lead">
                                    ESCO Commodity Exchange connects people with real commodity-based investment opportunities including Gold, Silver, Broiler Chicken, Sonali Chicken, USD, EUR, BDT, and future commodity sectors. Our mission is to make commodity investment more transparent, accessible, and technology-driven through our secure digital platform.
                                </p>
                                <div className="hero-actions">
                                    <a className="btn-download" href="#download-app">Download App</a>
                                    <a className="btn-secondary" href="#features">Learn More</a>
                                </div>
                                <div className="hero-meta" aria-label="Commodity categories">
                                    <span className="hero-tag">Gold</span>
                                    <span className="hero-tag">Silver</span>
                                    <span className="hero-tag">Broiler Chicken</span>
                                    <span className="hero-tag">Sonali Chicken</span>
                                    <span className="hero-tag">USD</span>
                                    <span className="hero-tag">EUR</span>
                                    <span className="hero-tag">BDT</span>
                                </div>
                            </div>

                            <div className="hero-visual" aria-hidden="true">
                                <img className="hero-media" src="/heroimagebuysell.png" alt="" loading="eager" decoding="async" />
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="site-section compact" id="features">
                        <div className="site-container">
                            <div className="section-head">
                                <p className="section-kicker">Why ESCO</p>
                                <h2 className="section-title">A simple corporate platform built around real commodity-backed access.</h2>
                                <p className="section-lead">
                                    The website now focuses on the core value proposition: a secure ecosystem for discovering commodity-backed opportunities and managing access through a clean mobile experience.
                                </p>
                            </div>

                            <div className="feature-grid">
                                <article className="feature-card">
                                    <span className="feature-number">01</span>
                                    <h3>Commodity-backed ecosystem</h3>
                                    <p>Showcase real sectors and asset categories in one focused digital environment designed for practical investment discovery.</p>
                                </article>
                                <article className="feature-card">
                                    <span className="feature-number">02</span>
                                    <h3>Secure digital platform</h3>
                                    <p>Support a trusted experience with a clean interface, clear hierarchy, and a modern security-first presentation.</p>
                                </article>
                                <article className="feature-card">
                                    <span className="feature-number">03</span>
                                    <h3>Transparent investment</h3>
                                    <p>Communicate opportunities clearly so users can understand the sectors, the structure, and the platform mission.</p>
                                </article>
                                <article className="feature-card">
                                    <span className="feature-number">04</span>
                                    <h3>Future-ready technology</h3>
                                    <p>Present a mobile-first system that can grow with new commodity sectors and evolving user needs.</p>
                                </article>
                                <article className="feature-card">
                                    <span className="feature-number">05</span>
                                    <h3>Trusted community</h3>
                                    <p>Reinforce confidence through a simple, corporate layout that feels stable, professional, and easy to understand.</p>
                                </article>
                                <article className="feature-card">
                                    <span className="feature-number">06</span>
                                    <h3>Easy mobile access</h3>
                                    <p>Keep the download experience prominent so visitors can move quickly from learning about ESCO to using the app.</p>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* Commodity Sectors Section */}
                    <section className="site-section">
                        <div className="site-container">
                            <div className="section-head">
                                <p className="section-kicker">Commodity sectors</p>
                                <h2 className="section-title">Built to introduce real opportunities across current and future sectors.</h2>
                                <p className="section-lead">
                                    ESCO Commodity Exchange is positioned as a digital gateway for commodity-backed sectors, including precious metals, poultry categories, currencies, and the sectors that may be added next.
                                </p>
                            </div>

                            <div className="sector-grid">
                                <article className="sector-card">
                                    <span className="sector-pill">Precious metals</span>
                                    <h3>Gold</h3>
                                    <p>Position long-term commodity exposure around one of the most recognized store-of-value sectors.</p>
                                </article>
                                <article className="sector-card">
                                    <span className="sector-pill">Precious metals</span>
                                    <h3>Silver</h3>
                                    <p>Include a widely traded metal category with industrial and investment relevance.</p>
                                </article>
                                <article className="sector-card">
                                    <span className="sector-pill">Livestock</span>
                                    <h3>Broiler Chicken</h3>
                                    <p>Represent poultry-linked opportunities in a structured digital format.</p>
                                </article>
                                <article className="sector-card">
                                    <span className="sector-pill">Livestock</span>
                                    <h3>Sonali Chicken</h3>
                                    <p>Highlight a familiar local category with future platform flexibility.</p>
                                </article>
                                <article className="sector-card">
                                    <span className="sector-pill">Currencies</span>
                                    <h3>USD</h3>
                                    <p>Support currency-focused reference sectors in the ecosystem.</p>
                                </article>
                                <article className="sector-card">
                                    <span className="sector-pill">Currencies</span>
                                    <h3>EUR</h3>
                                    <p>Extend the platform narrative to major global currency exposure.</p>
                                </article>
                                <article className="sector-card">
                                    <span className="sector-pill">Local currency</span>
                                    <h3>BDT</h3>
                                    <p>Keep the local market context visible and accessible.</p>
                                </article>
                                <article className="sector-card">
                                    <span className="sector-pill">Future sectors</span>
                                    <h3>More to come</h3>
                                    <p>The platform is designed to expand into additional commodity-backed categories over time.</p>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* Download App Section */}
                    <section className="site-section" id="download-app">
                        <div className="site-container">
                            <div className="cta-panel">
                                <div className="cta-grid">
                                    <div>
                                        <span className="eyebrow">Download the app</span>
                                        <h2 className="section-title" style={{ color: '#ffffff' }}>Take ESCO Commodity Exchange with you everywhere.</h2>
                                        <p className="section-lead" style={{ color: 'rgba(255,255,255,0.78)' }}>
                                            Use the mobile app to explore the ecosystem, review commodity-backed sectors, and stay connected to a secure digital experience on the go.
                                        </p>
                                        <div className="cta-actions">
                                            <a className="btn-download" href="#download-app">Download App</a>
                                            <a className="btn-secondary" href="#features">Learn More</a>
                                        </div>
                                    </div>

                                    <div className="cta-points" aria-label="App benefits">
                                        <div className="cta-point">Simple onboarding and a streamlined mobile flow.</div>
                                        <div className="cta-point">Focused access to the current and future commodity ecosystem.</div>
                                        <div className="cta-point">A clean, modern interface that stays responsive on every device.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer/>

            </>
        );
    }
}

export default Home;
