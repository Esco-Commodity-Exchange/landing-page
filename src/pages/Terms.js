import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

class Terms extends Component {
    render() {
        return (
            <>
                <Header title="Terms & Conditions"/>

                <main className="legal-hero">
                    <div className="site-container legal-shell">
                        <div>
                            <Link className="btn-secondary" to="/" aria-label="Back to home">&larr; Back to
                                Home</Link>
                        </div>
                        <div>
                            <span className="eyebrow">Legal</span>
                            <h1 className="page-title">Terms & Conditions</h1>
                            <p className="section-lead">
                                These Terms explain how ESCO Commodity Exchange can be used, what responsibilities apply
                                to users, and the limits of our platform.
                            </p>
                            <div className="legal-meta">
                                <span className="meta-pill">Last updated: August 3, 2026</span>
                                <span className="meta-pill">Applies to the mobile and web experience</span>
                            </div>
                        </div>

                        <div className="legal-banner">
                            By accessing or using ESCO Commodity Exchange, you confirm that you have read, understood,
                            and agreed to these Terms & Conditions. Please review them carefully before using the
                            platform.
                        </div>

                        <section className="legal-grid" aria-label="Terms sections">
                            <article className="legal-card">
                                <span className="legal-badge">01</span>
                                <h3>Acceptance of Terms</h3>
                                <p>Your use of the website, app, or related services means you accept these Terms and
                                    any updates we publish from time to time.</p>
                            </article>
                            <article className="legal-card">
                                <span className="legal-badge">02</span>
                                <h3>User Responsibilities</h3>
                                <p>You are responsible for providing accurate information, protecting account
                                    credentials, and using the platform lawfully and responsibly.</p>
                            </article>
                            <article className="legal-card">
                                <span className="legal-badge">03</span>
                                <h3>Platform Usage</h3>
                                <p>ESCO Commodity Exchange is provided for informational and access purposes related to
                                    commodity-backed sectors and related services.</p>
                            </article>
                            <article className="legal-card">
                                <span className="legal-badge">04</span>
                                <h3>Investment Disclaimer</h3>
                                <p>Any material on the platform is not financial advice. Users should review risks
                                    carefully and make independent decisions before participating in any
                                    opportunity.</p>
                            </article>
                            <article className="legal-card">
                                <span className="legal-badge">05</span>
                                <h3>Intellectual Property</h3>
                                <p>The logo, branding, design, content, and other materials on the platform are owned by
                                    or licensed to ESCO Commodity Exchange.</p>
                            </article>
                            <article className="legal-card">
                                <span className="legal-badge">06</span>
                                <h3>Limitation of Liability</h3>
                                <p>ESCO is not liable for indirect, incidental, or consequential damages arising from
                                    platform use, service interruption, or third-party dependency.</p>
                            </article>
                            <article className="legal-card">
                                <span className="legal-badge">07</span>
                                <h3>Account Termination</h3>
                                <p>We may suspend or terminate access if we believe a user has violated these Terms,
                                    misused the platform, or created risk for others.</p>
                            </article>
                            <article className="legal-card">
                                <span className="legal-badge">08</span>
                                <h3>Governing Law</h3>
                                <p>These Terms are governed by applicable laws in the jurisdiction where ESCO Commodity
                                    Exchange operates and where the user lawfully accesses the service.</p>
                            </article>
                            <article className="legal-card">
                                <span className="legal-badge">09</span>
                                <h3>Contact Information</h3>
                                <p>If you have questions about these Terms, contact the ESCO team through the official
                                    support channels listed on the platform.</p>
                            </article>
                        </section>
                    </div>
                </main>

                <Footer/>
            </>
        );
    }
}

export default Terms;