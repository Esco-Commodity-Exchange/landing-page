import React, { Component } from 'react';
import SideBar from "../components/SideBar";

class Referrals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            databaseReferrals: [
                { uid: "U882****902", date: "Oct 24, 2023", volume: 142500.00, commission: 356.25, status: "ACTIVE" },
                { uid: "U714****115", date: "Nov 02, 2023", volume: 88200.50, commission: 220.50, status: "ACTIVE" },
                { uid: "U991****441", date: "Nov 15, 2023", volume: 12000.00, commission: 30.00, status: "ACTIVE" },
                { uid: "U235****001", date: "Dec 01, 2023", volume: 540110.00, commission: 1350.27, status: "ACTIVE" }
            ],
            searchQuery: ""
        };
    }

    handleSearch = (e) => {
        this.setState({ searchQuery: e.target.value });
    };

    resetSearchFilter = () => {
        this.setState({ searchQuery: "" });
    };

    copyFieldValue = (id, message) => {
        const input = document.getElementById(id);
        if (input) {
            navigator.clipboard.writeText(input.value);
            alert(message);
        }
    };

    render() {
        const { databaseReferrals, searchQuery } = this.state;
        const filteredData = databaseReferrals.filter(ref =>
            ref.uid.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
            <>
                <SideBar title={"Referrals"} />

                <main className="dashboard-main px-3 px-md-4 pb-3 pb-md-4" style={{ paddingTop: "calc(var(--header-height) + 1.5rem) !important" }}>

                    {/* PAGE HEADER */}
                    <section className="mb-4">
                        <h2 className="font-display fw-bold text-esco-primary mb-1 text-slate-900" style={{ fontSize: "1.85rem" }} id="welcome-message-text">Referral Program</h2>
                        <p className="text-muted small mb-0" style={{ fontSize: "0.95rem", maxWidth: "720px", lineHeight: "1.5" }}>
                            Invite friends, traders, farmers, and businesses to join Esco Commodity Exchange and earn rewards from their trading activity.
                        </p>
                    </section>

                    {/* Stats Card Deck */}
                    <section className="row g-3 mb-4">
                        <div className="col-12 col-md-4">
                            <div className="stats-card">
                                <span className="trend-badge"><i className="bi bi-graph-up-arrow"></i> +12.5%</span>
                                <div className="icon-wrapper icon-referrals"><i className="bi bi-people-fill"></i></div>
                                <div className="stats-card-title">Total Referrals</div>
                                <div className="stats-card-value">1,284</div>
                                <div className="stats-card-sub">active accounts</div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="stats-card">
                                <div className="trend-badge bg-transparent text-secondary p-0 border-0" style={{ top: "36px" }}>
                                    <svg className="sparkline-placeholder" viewBox="0 0 100 30" width="80" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0,15 Q15,5 30,20 T60,10 T90,15" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round"></path>
                                    </svg>
                                </div>
                                <div className="icon-wrapper icon-commissions"><i className="bi bi-gift-fill"></i></div>
                                <div className="stats-card-title">Accrued Commissions</div>
                                <div className="stats-card-value">12,450.80 <span style={{ fontSize: "1.1rem", fontWeight: 600, color: "#475569" }}>BDT</span></div>
                                <div className="stats-card-sub">&nbsp;</div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="stats-card">
                                <span className="tier-badge">Tier 2</span>
                                <div className="icon-wrapper icon-yield"><i className="bi bi-percent"></i></div>
                                <div className="stats-card-title">Current Yield Rate</div>
                                <div className="stats-card-value" style={{ color: "#059669" }}>25.0%</div>
                                <div className="stats-card-sub">of net fees</div>
                            </div>
                        </div>
                    </section>

                    {/* Invite Partners */}
                    <section className="card invite-card shadow-sm border p-4 mb-4">
                        <h2 className="font-display d-block fs-5 fw-bold mb-4 text-slate-900" style={{ fontSize: "1.2rem" }}>Invite Partners</h2>
                        <div className="row g-4">
                            <div className="col-12">
                                <label className="invite-field-label">Referral ID</label>
                                <div className="input-group">
                                    <input type="text" className="form-control invite-field-input" defaultValue="esco-8829-QX" readOnly id="referral-id-input" />
                                    <button className="btn invite-btn-append" type="button" onClick={() => this.copyFieldValue('referral-id-input', 'Referral ID copied!')}>
                                        <i className="bi bi-copy"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-12">
                                <label className="invite-field-label">Referral Link</label>
                                <div className="input-group">
                                    <input type="text" className="form-control invite-field-input" defaultValue="escoexchange/ref?id=88294653453" readOnly id="referral-link-input" />
                                    <button className="btn invite-btn-append" type="button" onClick={() => this.copyFieldValue('referral-link-input', 'Referral link copied!')}>
                                        <i className="bi bi-share"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Network Activity */}
                    <section className="card d-none shadow-sm border p-4 mb-4" style={{ backgroundColor: "#ffffff", borderRadius: "16px" }}>
                        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 mb-4 border-bottom pb-4">
                            <div>
                                <h2 className="font-display d-block fs-5 fw-bold mb-1 text-slate-900">Network Activity</h2>
                                <span className="text-muted small">Real-time performance of your referrals</span>
                            </div>
                            <div className="d-flex align-items-center gap-2 w-100 w-md-auto justify-content-md-end">
                                <div className="search-container-referrals">
                                    <i className="bi bi-search"></i>
                                    <input type="text" className="form-control search-input-referrals" placeholder="Filter by UID..." onChange={this.handleSearch} value={searchQuery} />
                                </div>
                                <button className="btn btn-filters-referrals" type="button" onClick={this.resetSearchFilter}><i className="bi bi-sliders"></i></button>
                            </div>
                        </div>

                        <div className="table-responsive d-none d-md-block">
                            <table className="table align-middle network-table">
                                <thead>
                                <tr>
                                    <th style={{ width: "25%" }}>Users UID</th>
                                    <th style={{ width: "20%" }}>Date</th>
                                    <th style={{ width: "20%" }}>Trading Volume (BDT)</th>
                                    <th style={{ width: "20%" }}>Your Commission</th>
                                    <th style={{ width: "15%" }}>Activity Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.uid}</td>
                                        <td>{item.date}</td>
                                        <td>{item.volume.toLocaleString()}</td>
                                        <td>{item.commission.toLocaleString()}</td>
                                        <td><span className="badge bg-success">{item.status}</span></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default Referrals;