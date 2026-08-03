import React, {Component} from 'react';
import SideBar from "../components/SideBar"
import {Link} from "react-router-dom"

const marketData = [
    { id: 1, name: 'Gold', type: 'Precious Metal', price: '৳ 14,450/g', change: '+2.5%', isUp: true, icon: '🪙', color: '#fef3c7' },
    { id: 2, name: 'Silver', type: 'Precious Metal', price: '৳ 56/kg', change: '-1.2%', isUp: false, icon: '🥈', color: '#e2e8f0' },
    { id: 3, name: 'Onion', type: 'Agriculture', price: '৳ 32/kg', change: '+3.8%', isUp: true, icon: '🧅', color: '#fee2e2' },
    { id: 4, name: 'Potato', type: 'Agriculture', price: '৳ 28/kg', change: '+1.6%', isUp: true, icon: '🥔', color: '#fef3c7' }
];

const activityData = [
    { id: 1, title: 'Deposit BDT', sub: '1000 BDT • 2 hours ago', status: 'Completed', isPending: false },
    { id: 2, title: 'Withdraw BDT', sub: '1000 BDT • 5 hours ago', status: 'Pending', isPending: true },
    { id: 3, title: 'Order Created', sub: 'Gold 20g • 2 hours ago', status: 'Completed', isPending: false }
];

class Dashboard extends Component {
    render() {
        return (
            <>
                <SideBar title={"Dashboard"}/>

                <main className="dashboard-main px-3 px-md-4 pb-4" style={{ paddingTop: "calc(var(--header-height) + 1.5rem)" }}>
                    <section id="dashboard-tab-space">
                        <div id="view-dashboard-tab" className="tab-content-panel">

                            <h2 className="font-display d-none fw-bold text-esco-primary mb-3" id="welcome-message-text">Welcome back, Alex</h2>

                            {/* CARD 1: BALANCE METRICS */}
                            <div className="user-balance-section mb-4">
                                {/* Desktop Layout */}
                                <div className="d-none d-lg-flex justify-content-between align-items-center">
                                    <div>
                                        <span className="text-muted small fw-semibold text-uppercase d-block mb-1" style={{ letterSpacing: "0.02em" }}>Total Balance</span>
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="font-mono-numbers fw-bold text-esco-primary" style={{ fontSize: "1.85rem" }}>৳ 0.00</span>
                                            <span className="mini-badge bg-success bg-opacity-10 text-success d-flex align-items-center gap-1">
                    <i className="bi bi-graph-up-arrow"></i> +2.4% 24h
                  </span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <Link to={"/deposit"} className="btn btn-light px-4 py-3 rounded-3 fw-bold d-flex align-items-center gap-2">
                                            <i className="bi bi-arrow-down-circle"></i> Deposit
                                        </Link>

                                        <Link to={"/withdrew"} className="btn btn-light px-4 py-3 rounded-3 fw-bold d-flex align-items-center gap-2">
                                            <i className="bi bi-arrow-up-circle"></i> Withdraw
                                        </Link>

                                        <Link to={"/send"} className="btn btn-light px-4 py-3 rounded-3 fw-bold d-flex align-items-center gap-2">
                                            <i className="bi bi-cursor"></i> Send Money
                                        </Link>
                                    </div>
                                </div>

                                {/* Mobile Layout */}
                                <div className="d-lg-none">
                                    <span className="text-muted small fw-semibold text-uppercase d-block mb-1">Total Balance</span>
                                    <div className="d-flex align-items-center gap-2 mb-3">
                                        <span className="font-mono-numbers fw-bold text-esco-primary" style={{ fontSize: "1.65rem" }}>৳ 0.00</span>
                                        <span className="mini-badge bg-success bg-opacity-10 text-success d-flex align-items-center gap-1">
                  <i className="bi bi-graph-up-arrow"></i> +2.4% 24h
                </span>
                                    </div>
                                    <div className="border-top pt-3 pb-3">
                                        <span className="text-muted small fw-semibold text-uppercase d-block mb-1">Today's P/L</span>
                                        <span className="text-success fw-bold d-flex align-items-center gap-1" style={{ fontSize: "1.1rem" }}>
                  <i className="bi bi-arrow-up-circle-fill"></i> ৳ 0.00 (0.00%)
                </span>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <Link to={"/deposit"} className="btn-circle-action" style={{textDecoration:"none"}} >
                                            <i className="bi bi-arrow-down-circle fs-5" style={{ color: "var(--esco-forest-primary)" }}></i>
                                            <span>Deposit</span>
                                        </Link>
                                        <Link to={"/withdraw"} className="btn-circle-action" style={{textDecoration:"none"}}>
                                            <i className="bi bi-arrow-up-circle fs-5" style={{ color: "var(--esco-forest-primary)" }}></i>
                                            <span>Withdraw</span>
                                        </Link>
                                        <Link to={"/send"} className="btn-circle-action " style={{textDecoration:"none"}} >
                                            <i className="bi bi-cursor fs-5" style={{ color: "var(--esco-forest-primary)" }}></i>
                                            <span>Send</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 2: PROMO BANNER */}
                            <div className="promo-banner-card mb-2">
                                <div className="promo-banner-content">
                                    <h3 className="font-display fw-bold mb-2 text-white" style={{ fontSize: "1.65rem" }}>Trade Smart.<br/>Grow Secure.</h3>
                                    <p className="text-white text-opacity-80 mb-4 small" style={{ lineHeight: "1.45" }}>Buy and sell real-world commodities with trust and transparency.</p>
                                    <Link to={"/trade"} className="btn btn-light rounded-pill px-4 py-2 small fw-bold text-esco-primary border-0" >
                                        Explore Market <i className="bi bi-chevron-right ms-1"></i>
                                    </Link>
                                </div>
                                {/* Promo Graphics Overlay code here... */}
                            </div>

                            {/* ROW 3: MARKET LISTINGS & RECENT ACTIVITY */}
                            <div className="row g-4">
                                <div className="col-lg-8">
                                    <div className="market-section-card">
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <h3 className="font-display fw-bold text-dark m-0" style={{ fontSize: "1.25rem" }}>Market</h3>
                                            <Link to="/trade" className="text-esco-green fw-bold text-decoration-none small">Go Trade</Link>
                                        </div>
                                        {/* Market List items... */}
                                        <div className="commodity-market-list">
                                            {marketData.map((item) => (
                                                <div key={item.id} className="commodity-row">
                                                    <div className="commodity-col-info commodity-info">
                                                        <div className="commodity-avatar" style={{ backgroundColor: item.color }}>{item.icon}</div>
                                                        <div>
                                                            <strong className="d-block text-dark small fw-bold">{item.name}</strong>
                                                            <span className="text-muted small" style={{ fontSize: "0.78rem" }}>{item.type}</span>
                                                        </div>
                                                    </div>
                                                    <div className="commodity-col-price text-center">
                                                        <span className="font-mono-numbers text-dark fw-bold d-block small mb-0">{item.price}</span>
                                                    </div>
                                                    <div className="commodity-col-change text-end">
        <span className={`small fw-semibold ${item.isUp ? 'text-success' : 'text-danger'}`}>
          <i className={`bi ${item.isUp ? 'bi-graph-up' : 'bi-graph-down'}`}></i> {item.change}
        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="activity-section-card">
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <h3 className="font-display fw-bold text-dark m-0" style={{ fontSize: "1.25rem" }}>Recent Activity</h3>
                                            <a href="transactions.html" className="text-esco-green fw-bold text-decoration-none small">History</a>
                                        </div>
                                        {/* Activity Timeline items... */}

                                        <div className="activity-timeline">
                                            {activityData.map((act) => (
                                                <div key={act.id} className="activity-item">
                                                    <div className={`activity-dot ${act.isPending ? 'pending' : ''}`}></div>
                                                    <div className="d-flex justify-content-between align-items-start">
                                                        <div>
                                                            <strong className="d-block text-dark small fw-bold">{act.title}</strong>
                                                            <span className="text-muted small d-block" style={{ fontSize: "0.75rem" }}>{act.sub}</span>
                                                        </div>
                                                        <span className={`badge border mini-badge text-lowercase ${act.isPending ? 'bg-secondary-subtle text-muted border-secondary' : 'bg-success-subtle text-success border-success'}`}>
          {act.status}
        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>

            </>
        );
    }
}

export default Dashboard;