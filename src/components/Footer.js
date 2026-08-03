import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="site-footer">
                    <div className="site-container">
                        <div className="footer-row">
                            <Link className="brand footer-brand" to="/"
                               aria-label="ESCO Commodity Exchange home">
              <span className="brand-mark">
                <img src="/Logo-Final.png" alt="" aria-hidden="true"/>
              </span>
                                <span className="brand-copy">
                <span className="brand-name">ESCO Commodity Exchange</span>
              </span>
                            </Link>
                            <div className="footer-links" aria-label="Footer links">
                                <Link className="footer-nav-link" to="/terms"
                                   rel="noopener noreferrer">Terms &amp; Conditions</Link>
                                <Link className="footer-nav-link" to="/privacy"
                                   rel="noopener noreferrer">Privacy Policy</Link>
                            </div>
                            <div className="footer-social" aria-label="Telegram links">
                                <a target={"_blank"} className="footer-social-link" href="https://t.me/esco_commodity" aria-label="Telegram Channel">
                                    <svg className="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M21.9 3.8 2.9 11.2c-1 .4-1 1.8 0 2.1l4.8 1.7 1.9 5.2c.3.8 1.4 1 1.9.3l2.8-3.8 4.8 3.5c.7.5 1.8.2 2-.8l2.8-13.2c.2-1-.6-1.8-1.6-1.4zM9.7 13.3l8.7-7.5-7.4 8.8 4.6 4.5-5.5-2-2-5.5z"/>
                                    </svg>
                                    <span className="footer-social-text">Channel</span>
                                </a>
                                <a target={"_blank"} className="footer-social-link" href="https://t.me/esco_commodity_group" aria-label="Telegram Group">
                                    <svg className="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M21.9 3.8 2.9 11.2c-1 .4-1 1.8 0 2.1l4.8 1.7 1.9 5.2c.3.8 1.4 1 1.9.3l2.8-3.8 4.8 3.5c.7.5 1.8.2 2-.8l2.8-13.2c.2-1-.6-1.8-1.6-1.4zM9.7 13.3l8.7-7.5-7.4 8.8 4.6 4.5-5.5-2-2-5.5z"/>
                                    </svg>
                                    <span className="footer-social-text">Group</span>
                                </a>
                            </div>
                        </div>
                        <div className="footer-bottom">&copy; 2026 ESCO Commodity Exchange. All rights reserved.</div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;