import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="bg-esco-forest-dark text-white pt-5 pb-4 mt-5" id="contact">
                    <div className="container py-4 border-bottom border-secondary border-opacity-20">
                        <div className="row g-4">

                            <div className="col-lg-4">
                                <aside className="esco-brand-logo-container mb-3">
                    <span className="esco-brand-badge">
                        <img className="esco-brand-logo-image" src="/Logo-Final.png" alt="Esco Commodity Exchange logo" />
                    </span>
                                    <div>
                                        <h4 className="font-display fw-bold text-white m-0">ESCO</h4>
                                        <span className="esco-badge-text-sub text-white-50 text-uppercase tracking-wider">Commodity Exchange</span>
                                    </div>
                                </aside>
                                <p className="text-white-50 small mb-4" style={{ maxWidth: "280px" }}>
                                    Secure. Transparent. Direct. The future of commodity trading is here in Bangladesh.
                                </p>
                                <ul className="list-inline m-0 p-0 d-flex gap-3">
                                    <li><a href="#" className="esco-footer-link fs-5" target={"_blank"}><i className="bi bi-twitter-x"></i></a></li>
                                    <li><a href="#" className="esco-footer-link fs-5" target={"_blank"}><i className="bi bi-linkedin"></i></a></li>
                                    <li><a href="#" className="esco-footer-link fs-5" target={"_blank"}><i className="bi bi-youtube"></i></a></li>
                                    <li><a href="#" className="esco-footer-link fs-5" target={"_blank"}><i className="bi bi-facebook"></i></a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-3 col-lg-2">
                                <h6 className="text-white fw-bold mb-3">Company</h6>
                                <ul className="list-unstyled d-flex flex-column gap-2 m-0 p-0">
                                    <li><Link to="/about" className="esco-footer-link">About Us</Link></li>
                                    <li><Link to="/support" className="esco-footer-link">Support Hub</Link></li>
                                    <li><Link to="/support" className="esco-footer-link">Contact Us</Link></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-3 col-lg-2">
                                <h6 className="text-white fw-bold mb-3">Markets</h6>
                                <ul className="list-unstyled d-flex flex-column gap-2 m-0 p-0">
                                    <li><Link href="#markets" className="esco-footer-link">Agricultural Goods</Link></li>
                                    <li><Link href="#markets" className="esco-footer-link">Metals</Link></li>
                                    <li><a href="/#markets" className="esco-footer-link">Market Overview</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-3 col-lg-2">
                                <h6 className="text-white fw-bold mb-3">Resources</h6>
                                <ul className="list-unstyled d-flex flex-column gap-2 m-0 p-0">
                                    <li><Link to="/how-it-works" className="esco-footer-link">How It Works</Link></li>
                                    <li>
                                        <a href="javascript:void(0)" className="esco-footer-link"
                                           onClick={() => alert('Whitepaper is being localized for regional clearing authorities. Please check back soon.')}>
                                            Whitepaper
                                        </a>
                                    </li>
                                    <li><Link to="/faqs" className="esco-footer-link">FAQs</Link></li>
                                </ul>
                            </div>

                            <div className="col-12 col-md-3 col-lg-2">
                                <h6 className="text-white fw-bold mb-3">Legal & Contact</h6>
                                <ul className="list-unstyled d-flex flex-column gap-2 m-0 p-0 text-white-50 small">
                                    <li><Link to="/terms" className="esco-footer-link">Terms of Service</Link></li>
                                    <li><Link to="/privacy" className="esco-footer-link">Privacy Policy</Link></li>
                                    <li className="mt-2 text-white">📧 escotradecoltd@gmail.com</li>
                                    <li className="text-white">📍 Gafargaon Mymensingh , Bangladesh</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="container pt-3 text-center text-md-start">
        <span className="text-white-50 small">
            © 2026 Esco Commodity Exchange. All rights reserved.
        </span>
                    </div>
                </footer>

            </>
        );
    }
}

export default Footer;