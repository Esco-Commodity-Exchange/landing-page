import React, {Component} from 'react';
import SideBar from "../components/SideBar";
import {Link} from "react-router-dom";

const assets = [
    { id: 'Gold', name: 'Gold', symbol: 'XAU', price: '6,754.20', unit: 'per gram', change: '+1.25%', isUp: true, balance: '0.000 g', value: '0.00' },
    { id: 'Silver', name: 'Silver', symbol: 'XAG', price: '82.35', unit: 'per gram', change: '+0.68%', isUp: true, balance: '0.000 g', value: '0.00' },
    { id: 'CrudeOil', name: 'Crude Oil', symbol: 'CL', price: '6,125.80', unit: 'per barrel', change: '-1.34%', isUp: false, balance: '0.000 bbl', value: '0.00' },
    { id: 'NaturalGas', name: 'Natural Gas', symbol: 'NG', price: '209.45', unit: 'per MMBtu', change: '+2.11%', isUp: true, balance: '0.000 MMBtu', value: '0.00' },
    { id: 'Copper', name: 'Copper', symbol: 'HG', price: '754.90', unit: 'per kg', change: '-0.72%', isUp: false, balance: '0.000 kg', value: '0.00' },
];

class Wallet extends Component {

    handleAction = (path) => {
        window.location.href = path;
    }


    render() {
        return (
            <>
                <SideBar title={"Assets Wallet"}/>
                <main className="dashboard-main px-3 px-md-4 pb-3 pb-md-4" style={{ paddingTop: "calc(var(--header-height) + 1.5rem)" }}>
                    <section id="wallet-content-space">
                        <h2 className="font-display  fw-bold text-esco-primary mb-3 d-none d-md-none" style={{ fontSize: "1.62rem", color: "#022c1e" }}>Welcome back, Alex</h2>

                        {/* Balance Card */}
                        <div className="user-balance-section mb-4 p-4 rounded-4 bg-white" style={{ border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.015)" }}>
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-8">
                                    <span className="text-muted small fw-semibold text-uppercase d-block mb-1" style={{ letterSpacing: "0.02em", fontSize: "0.72rem" }}>Total Balance</span>
                                    <div className="d-flex align-items-center flex-wrap gap-2 mb-2 mb-sm-3">
                                        <span className="font-display fw-bold text-esco-primary" style={{ fontSize: "2.2rem", color: "#022c1e", letterSpacing: "-0.015em" }}>৳ 0.00</span>
                                        <span className="badge bg-success bg-opacity-10 text-success d-flex align-items-center gap-1 py-1.5 px-2.5 rounded-pill fw-semibold" style={{ fontSize: "0.76rem", backgroundColor: "#ecfdf5", color: "#10b981" }}>
                  <i className="bi bi-graph-up-arrow"></i> +2.4% 24h
                </span>
                                    </div>

                                    <div className="row g-2 border-top pt-2">
                                        {['Available Cash', 'Total Invested', "Today's P/L"].map((label, idx) => (
                                            <div className="col-6 col-sm-4" key={idx}>
                                                <span className="text-secondary small d-block mb-1" style={{ fontWeight: 500, fontSize: "0.75rem", color: "#64748b" }}>{label}</span>
                                                <span className="fw-bold text-dark d-block mt-0" style={{ fontSize: "1.12rem", letterSpacing: "-0.015em" }}>৳ 0.00</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Desktop Buttons */}
                                <div className="col-lg-4 mt-4 mt-lg-0 text-lg-end d-none d-lg-block">
                                    <div className="d-flex gap-2 justify-content-lg-end">
                                        <Link to={"/deposit"} className="btn px-3 py-2 rounded-3 fw-semibold border-0"  style={{ background: "#f1f3f9" }}><i className="bi bi-download"></i> Deposit</Link>
                                        <Link to={"/withdrew"} className="btn px-3 py-2 rounded-3 fw-semibold border-0"  style={{ background: "#f1f3f9" }}><i className="bi bi-upload"></i> Withdraw</Link>
                                        <Link to={"/send"} className="btn px-3 py-2 rounded-3 fw-semibold border-0"
                                              style={{ background: "#f1f3f9" }}><i className="bi bi-send"></i> Send Money</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Assets Section */}
                        <h3 className="font-display fw-bold text-dark mb-3" style={{ fontSize: "1.35rem" }}>Assets</h3>

                        {/* Table View (Desktop) */}
                        <div style={{ border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.015)" }} className="card border shadow-sm rounded-4 bg-white d-none d-md-block overflow-hidden">
                            <table className="table table-hover align-middle mb-0">
                                <thead>
                                <tr>
                                    <th className="ps-4 py-3 text-secondary" style={{ fontSize: "0.72rem" }}>Commodity</th>
                                    <th className="py-3 text-secondary" style={{ fontSize: "0.72rem" }}>Current price</th>
                                    <th className="py-3 text-secondary" style={{ fontSize: "0.72rem" }}>24H CHANGE</th>
                                    <th className="py-3 text-secondary text-end" style={{ fontSize: "0.72rem" }}>Available Balance</th>
                                    <th className="py-3 text-secondary text-end"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {assets.map((item) => (
                                    <tr key={item.id} onClick={() => this.handleAction(`token-details?token=${item.id}`)} style={{ cursor: "pointer" }}>
                                        <td className="ps-4 py-3">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    style={{ height: "40px", marginRight: "10px" }}
                                                    src="/icon.png"
                                                    alt={item.name}
                                                />
                                                <div>
                                                    <strong className="d-block">{item.name}</strong>
                                                    <span className="text-muted small">{item.symbol}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3">
                                            <span className="fw-bold">৳ {item.price}</span>
                                            <span className="d-block text-muted small">{item.unit}</span>
                                        </td>
                                        <td className={`py-3 ${item.isUp ? 'text-success' : 'text-danger'}`}>
                                            {item.change}
                                        </td>
                                        <td className="py-3 text-end">
                                            <span className="fw-bold">{item.balance}</span>
                                            <span className="d-block text-muted small">৳ {item.value}</span>
                                        </td>
                                        <td className="pe-4 py-3  text-muted text-end">
                                            <i className="bi bi-chevron-right fs-6"></i>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Asset List */}
                        <div className="d-block d-md-none list-group list-group-flush border rounded-4 overflow-hidden">
                            {assets.map((item) => (
                                <div
                                    key={item.id}
                                    className="list-group-item p-3 d-flex justify-content-between align-items-center"
                                    onClick={() => this.handleAction(`token-details.html?token=${item.id}`)}
                                >
                                    <div className="d-flex align-items-center">
                                        {/* লোগো সেকশন */}
                                        <img
                                            src="/icon.png"
                                            alt={item.name}
                                            style={{ height: "30px", marginRight: "10px" }}
                                        />
                                        <div>
                                            <strong className="d-block">{item.name}</strong>
                                            <span className="text-muted small">
                    ৳ {item.price}
                                                <span className={item.isUp ? 'text-success' : 'text-danger'} style={{ marginLeft: "5px" }}>
                        {item.change}
                    </span>
                </span>
                                        </div>
                                    </div>

                                    <div className="text-end">
                                        <strong className="d-block">{item.balance}</strong>
                                        <span className="text-muted small">৳ {item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default Wallet;