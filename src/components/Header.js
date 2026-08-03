import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            isLoggedIn: false
        };
    }

    componentDidMount() {
        // পেজ লোড হওয়ার সময় লগইন স্টেট চেক করা
        const loggedIn = localStorage.getItem('esco_logged_in') === 'true';
        this.setState({ isLoggedIn: loggedIn });
    }

    toggleMenu = () => {
        this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
    };

    handleLogout = () => {
        localStorage.removeItem('esco_logged_in');
        this.setState({ isLoggedIn: false });
        window.location.href = 'index.html';
    };

    render() {
        const { isMenuOpen, isLoggedIn } = this.state;

        return (
            <header className="esco-header-nav py-3" id="main-header" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
                <title>{this.props.title}</title>
                <div className="container-fluid px-0">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        {/* Logo */}
                        <Link className="esco-brand-logo-container text-decoration-none" to="/">
                            <span className="esco-brand-badge">
                                <img className="esco-brand-logo-image" src="/Logo-Final.png" alt="Esco Commodity Exchange logo" />
                            </span>
                            <div>
                                <h1 className="esco-badge-text-title m-0 text-uppercase fw-extrabold tracking-wider">ESCO</h1>
                                <span className="esco-badge-text-sub text-uppercase tracking-widest text-muted">COMMODITY EXCHANGE</span>
                            </div>
                        </Link>

                        {/* Hamburger */}
                        <button className="btn p-0 border-0 d-sm-none d-flex align-items-center" onClick={this.toggleMenu}>
                            <svg width="32" height="24" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2H22" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M2 8H22" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M2 14H22" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </button>

                        {/* Desktop Nav */}
                        <nav className="d-none d-sm-flex gap-2 gap-md-4 align-items-center mx-auto" style={{ fontSize: "0.88rem" }}>
                            <a href="/#markets" style={{cursor:"pointer"}} className="esco-nav-link text-decoration-none">Markets</a>
                            <Link to="/trade" className="esco-nav-link text-decoration-none">Trades</Link>
                            <Link to={"/profile"} className="esco-nav-link text-decoration-none">Profile</Link>
                            <Link to="/support" className="esco-nav-link text-decoration-none">Support</Link>
                            <Link to="/certificate" className="esco-nav-link text-decoration-none">Certificates</Link>
                        </nav>

                        {/* Desktop Actions */}
                        <div className="d-none d-sm-flex align-items-center gap-2">
                            {isLoggedIn ? (
                                <button onClick={this.handleLogout} className="btn btn-esco-pill btn-esco-outline px-3 py-2">Logout</button>
                            ) : (
                                <>
                                    <Link style={{
                                        borderRadius: "50px",
                                        padding: "8px 20px",
                                        border: "1px solid #004d40",
                                        backgroundColor: "transparent",
                                        color: "#004d40",
                                        textDecoration: "none"
                                    }}
                                          to="/login" className="btn btn-esco-pill btn-esco-outline px-3 py-2">Login</Link>
                                    <Link style={{
                                        borderRadius: "50px",
                                        padding: "8px 20px",
                                        border: "none",
                                        backgroundColor: "#004d40",
                                        color: "white",
                                        textDecoration: "none"
                                    }} to="/signup" className="btn btn-esco-pill btn-esco-solid px-3 py-2">Sign Up</Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="collapse d-sm-none mt-3 show">
                            <div className="p-3 bg-light rounded-3 d-flex flex-column gap-3 border shadow-sm">
                                <a href="/#markets" className="esco-nav-link fw-semibold" onClick={this.toggleMenu}>Markets</a>
                                <Link to="/trade" className="esco-nav-link fw-semibold" onClick={this.toggleMenu}>Trades</Link>
                                <Link to={"/profile" } className="esco-nav-link fw-semibold">Profile</Link>
                                <Link to="/support" className="esco-nav-link fw-semibold" onClick={this.toggleMenu}>Support</Link>
                                <Link to="/certificate" className="esco-nav-link fw-semibold" onClick={this.toggleMenu}>Certificates</Link>
                                {isLoggedIn ? (
                                    <button onClick={this.handleLogout} className="btn btn-danger w-100">Logout</button>
                                ) : (
                                    <div className="d-flex gap-2">
                                        <Link to="/login" className="btn btn-esco-pill btn-esco-outline w-50">Login</Link>
                                        <Link to="/signup" className="btn btn-esco-pill btn-esco-solid w-50">Sign Up</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </header>
        );
    }
}

export default Header;