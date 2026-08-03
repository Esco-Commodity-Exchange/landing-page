import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Register extends Component {
    render() {
        return (
            <>
                <title> Registration Form </title>

                <div className="esco-wrapper position-relative">
                    <main className="auth-split-wrapper container-fluid p-0">

                        {/* LEFT PANEL: REGISTER USER FORM */}
                        <article className="auth-form-panel">

                            <header>
                                <Link className="esco-brand-logo-container text-decoration-none" to="/">
              <span className="esco-brand-badge">
                <img className="esco-brand-logo-image" src="/Logo-Final.png" alt="Esco Commodity Exchange logo" />
              </span>
                                    <div>
                                        <h1 className="esco-badge-text-title m-0 text-uppercase fw-extrabold tracking-wider">ESCO</h1>
                                        <span className="esco-badge-text-sub text-uppercase tracking-widest text-muted">COMMODITY EXCHANGE</span>
                                    </div>
                                </Link>
                            </header>

                            <div className="my-auto mx-auto py-5" style={{ maxWidth: "420px", width: "100%" }}>
                                <h1 className="font-display fw-bold text-esco-primary mb-2">Create Your Account</h1>
                                <p className="text-esco-muted mb-4 small">
                                    Fast digital registration for agricultural hedging and direct supply lines.
                                </p>

                                <form id="signup-form" className="d-flex flex-column gap-3">

                                    <div>
                                        <label className="form-label small fw-semibold text-esco-muted mb-2">Phone Number</label>
                                        <div className="esco-input-group">
                  <span className="esco-input-icon-left">
                    <i className="bi bi-envelope"></i>
                  </span>
                                            <input
                                                type="tel"
                                                id="phone-input"
                                                className="esco-form-control"
                                                placeholder="Enter your Phone Number"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="form-label small fw-semibold text-esco-muted mb-2">Password</label>
                                        <div className="esco-input-group">
                  <span className="esco-input-icon-left">
                    <i className="bi bi-lock"></i>
                  </span>
                                            <input
                                                type="password"
                                                id="password-input"
                                                className="esco-form-control"
                                                placeholder="Enter your password"
                                                required
                                            />
                                            <button
                                                type="button"
                                                id="toggle-password-btn"
                                                className="esco-password-toggle-right"
                                            >
                                                <i id="password-toggle-icon" className="bi bi-eye"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="form-label small fw-semibold text-esco-muted mb-2">Confirm Password</label>
                                        <div className="esco-input-group">
                  <span className="esco-input-icon-left">
                    <i className="bi bi-lock"></i>
                  </span>
                                            <input
                                                type="password"
                                                id="confirm-password-input"
                                                className="esco-form-control"
                                                placeholder="Confirm your password"
                                                required
                                            />
                                            <button
                                                type="button"
                                                id="toggle-confirm-password-btn"
                                                className="esco-password-toggle-right"
                                            >
                                                <i id="confirm-password-toggle-icon" className="bi bi-eye"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="form-label small fw-semibold text-esco-muted mb-2">Referral code</label>
                                        <div className="esco-input-group">
                  <span className="esco-input-icon-left">
                    <i className="bi bi-person"></i>
                  </span>
                                            <input
                                                type="text"
                                                id="confirm-password-input"
                                                className="esco-form-control"
                                                placeholder="Referral code"
                                            />
                                        </div>
                                    </div>

                                    <fieldset className="border-0 p-0 m-0 mt-2">
                                        <legend className="visually-hidden">Agreements</legend>
                                        <label className="d-flex align-items-start gap-2 text-esco-muted small cursor-pointer">
                                            <input type="checkbox" className="esco-checkbox mt-1" required id="agree-checkbox" />
                                            <span className="lh-sm">
                    I agree to the <Link to="/terms" target="_blank" className="text-esco-green fw-bold text-decoration-none">Terms of Service</Link>
                                                and acknowledge the <Link to="/terms" target="_blank" className="text-esco-green fw-bold text-decoration-none">Privacy Policy</Link>.
                  </span>
                                        </label>
                                    </fieldset>

                                    <button type="submit" style={{ backgroundColor: "#00473b", color: "#ffffff", border: "none" }}
                                            className="btn btn-esco-pill btn-esco-solid py-3 mt-3 text-center d-flex align-items-center justify-content-center gap-2">
                                        Create Account <i className="bi bi-arrow-right fs-6"></i>
                                    </button>

                                </form>

                                <p className="text-center text-esco-muted mt-4 small m-0 border-top pt-4">
                                    Already have an account?{" "}
                                    <Link className="text-esco-primary fw-bold text-decoration-none small" to="/login">Sign In</Link>
                                </p>
                            </div>

                            <footer className="text-esco-muted small mt-4">
                                Esco secure verified storage active.
                            </footer>

                        </article>

                        {/* RIGHT PANEL: HERO BRAND SHOWCASE */}
                        <aside className="auth-showcase-panel">

                            <Link className="text-white-50 small fw-semibold text-decoration-none text-uppercase tracking-widest d-inline-block"
                                  to="/">
                                <i className="bi bi-chevron-left me-2"></i> Back to Main Exchange
                            </Link>

                            <div className="auth-showcase-card my-4">
                                <h2 className="font-display fw-bold text-esco-primary mb-3">Esco Commodity Exchange</h2>
                                <p className="text-esco-muted lh-base mb-4">
                                    Our platform provides real-time pricing, secure escrow services, and verified supply chain tracking for every transaction.
                                </p>
                                <div className="d-flex flex-wrap gap-3">
              <span className="d-inline-flex align-items-center gap-2 fw-semibold text-esco-primary small">
                <i className="bi bi-patch-check-fill text-esco-green fs-5"></i> ISO Certified
              </span>
                                    <span className="d-inline-flex align-items-center gap-2 fw-semibold text-esco-primary small">
                <i className="bi bi-shield-fill-check text-esco-green fs-5"></i> Secure Escrow
              </span>
                                </div>

                                <div className="auth-showcase-floating-earnings">
                                    <div className="earnings-bar-icon">
                                        <i className="bi bi-bar-chart-fill fs-5"></i>
                                    </div>
                                    <div>
                                        <span className="text-esco-muted d-block small fw-medium" style={{ fontSize: "0.75rem" }}>Earnings</span>
                                        <span className="font-mono-numbers fw-bold text-esco-primary fs-5">$350.40</span>
                                    </div>
                                </div>
                            </div>

                            <div className="auth-bottom-banner mt-4 text-white">
                                <h2 className="font-display fw-bold mb-3 text-white">Start Trading Today</h2>
                                <p className="text-white text-opacity-80 m-0">
                                    Join the premium institutional network for physical and derivative commodity trading. Built for farmers, suppliers, and enterprise investors.
                                </p>
                            </div>

                        </aside>
                    </main>
                </div>

            </>
        );
    }
}

export default Register;