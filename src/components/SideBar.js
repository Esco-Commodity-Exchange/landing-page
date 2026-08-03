
import {Link} from "react-router-dom";

import React, {Component} from 'react';


class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSidebarOpen: false,
            path:"",
        };
    }
    componentDidMount(){
        var path = window.location.pathname
        this.setState({path:path})
        //console.log(path)
    }

    // মোবাইল সাইডবার টগল করার ফাংশন
    toggleSidebar = () => {
        this.setState(prevState => ({
            isSidebarOpen: !prevState.isSidebarOpen
        }));
    }
    render() {
        return (
            <>
                <title>{this.props.title}</title>
                <header className="dashboard-header">
                    <div className="dashboard-header-inner">

                        {/* BRAND LOGO LEFT */}
                        <div className="d-flex align-items-center gap-3">
                            <Link className="esco-brand-logo-container text-decoration-none" to="/">
            <span className="esco-brand-badge">
              <img className="esco-brand-logo-image" src="/Logo-Final.png" alt="Esco Commodity Exchange logo" />
            </span>
                                <div>
                                    <h1 className="esco-badge-text-title m-0 text-uppercase fw-extrabold tracking-wider" style={{ fontSize: "1.15rem", lineHeight: "0.95" }}>
                                        ESCO
                                    </h1>
                                    <span className="esco-badge-text-sub text-uppercase tracking-widest text-muted" style={{ fontSize: "0.58rem", marginTop: "1px" }}>
                COMMODITY EXCHANGE
              </span>
                                </div>
                            </Link>
                        </div>

                        {/* CENTER NAV LINK (DESKTOP) */}
                        <nav className="header-center-nav d-none d-lg-flex">
                            <a href="/#markets" className="header-nav-link text-decoration-none">Markets</a>
                            <Link to="/trade" className="header-nav-link text-decoration-none">Trades</Link>
                            <Link to="/profile" className="header-nav-link active text-decoration-none">Profile</Link>
                            <Link to="/support" className="header-nav-link text-decoration-none">Support</Link>
                            <Link to="/certificate" className="header-nav-link text-decoration-none">Certificates</Link>
                        </nav>

                        {/* RIGHT ACTIONS CLUSTER (DESKTOP) */}
                        <div className="d-flex align-items-center gap-3 ms-auto justify-content-end">

                            <div className="text-end d-none d-md-block me-1">
            <span className="text-uppercase text-muted fw-bold d-block" style={{ fontSize: "0.65rem", letterSpacing: "0.05em", lineHeight: "1.2" }}>
              Account Balance
            </span>
                                <span className="fw-bold text-esco-primary" style={{ fontSize: "0.95rem", color: "#022c1e", letterSpacing: "-0.01em" }} id="usd-balance-indicator">
              0.00 BDT
            </span>
                            </div>

                            <button className="btn btn-light p-2 rounded-circle border-0 d-none d-sm-inline-flex align-items-center justify-content-center"
                                    type="button" onClick={() => alert('No new notifications at this time.')}
                                    style={{ width: "38px", height: "38px", backgroundColor: "transparent" }}>
                                <i className="bi bi-bell text-secondary fs-5"></i>
                            </button>

                            <Link to={"/dashboard"} className="btn btn-light p-2 rounded-circle border-0 d-none d-sm-inline-flex align-items-center justify-content-center"
                                  style={{ width: "38px", height: "38px", backgroundColor: "transparent" }}>
                                <i className="bi bi-grid text-secondary fs-5"></i>
                            </Link>

                            <Link to={"/profile"} className="btn btn-light p-2 rounded-circle border-0 d-none d-sm-inline-flex align-items-center justify-content-center"
                                  style={{ width: "38px", height: "38px", backgroundColor: "transparent" }}>
                                <i className="bi bi-person-circle text-secondary fs-5"></i>
                            </Link>

                            <Link to={"/deposit"} className="btn btn-esco-pill btn-esco-solid text-white fw-bold d-none d-md-flex align-items-center justify-content-center border-0 rounded-3 px-3 transition-all"
                                  style={{ backgroundColor: "#022c1e", fontSize: "0.88rem", height: "38px", minWidth: "90px" }}>
                                Deposit
                            </Link>

                            {/* Mobile Toggle Menu Icon */}
                            <button onClick={this.toggleSidebar} className="btn btn-light d-lg-none p-2 border-0" type="button" id="sidebar-toggle-btn" aria-label="Toggle Sidebar Menu">
                                <svg width="32" height="24" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2H22" stroke="#334155" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M2 8H22" stroke="#334155" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M2 14H22" stroke="#334155" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                            </button>
                        </div>

                    </div>
                </header>


                {this.props.sidebar==false?"":
                    <aside className={`dashboard-sidebar ${this.state.isSidebarOpen ? 'show' : ''}`} id="dashboard-sidebar" >
                        <div className="sidebar-nav">
                            <Link to="/dashboard" className={this.state.path=="/dashboard"?"sidebar-nav-link active":"sidebar-nav-link"}>
                                <i className="bi bi-grid-fill"></i>
                                <span>Dashboard</span>
                            </Link>
                            <Link to="wallet" className={this.state.path=="/wallet"?"sidebar-nav-link active":"sidebar-nav-link"}>
                                <i className="bi bi-wallet2"></i>
                                <span>Wallets</span>
                            </Link>
                            <Link to="/order" className={this.state.path=="/order"?"sidebar-nav-link active":"sidebar-nav-link"}>
                                <i className="bi bi-card-list"></i>
                                <span>Orders</span>
                            </Link>
                            <Link to="/transactions" className={this.state.path=="/transactions"?"sidebar-nav-link active":"sidebar-nav-link"}>
                                <i className="bi bi-clock-history"></i>
                                <span>Transaction History</span>
                            </Link>
                            <Link to="/referrals" className={this.state.path=="/referrals"?"sidebar-nav-link active":"sidebar-nav-link"}>
                                <i className="bi bi-people"></i>
                                <span>Referrals</span>
                            </Link>
                            <Link to="/security" className={this.state.path=="/security"?"sidebar-nav-link active":"sidebar-nav-link"}>
                                <i className="bi bi-shield-lock"></i>
                                <span>Security</span>
                            </Link>
                            <Link to="/profile" className={this.state.path=="/profile"?"sidebar-nav-link active":"sidebar-nav-link"}>
                                <i className="bi bi-person-gear"></i>
                                <span>Profile</span>
                            </Link>

                        </div>
                        <div className="sidebar-footer">
                            <a href="#"
                               className="d-flex align-items-center gap-2 text-danger text-decoration-none fw-bold small transition"
                               id="action-logout-link">
                                <i className="bi bi-box-arrow-left fs-5"></i>
                                <span>Logout</span>
                            </a>
                        </div>
                    </aside>
                }

            </>
        );
    }
}

export default SideBar;