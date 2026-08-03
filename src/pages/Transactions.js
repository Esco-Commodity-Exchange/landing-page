import React, { Component } from 'react';
import SideBar from "../components/SideBar";

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [
                { id: "TX-9920B", dtime: "2023.10.26 09:15:00", type: "DEPOSIT", desc: "Bank Wire - City Bank", amount: 500000.00, status: "Completed" },
                { id: "TX-9925A", dtime: "2023.10.28 11:30:00", type: "DEPOSIT", desc: "Mobile Wallet - bKash", amount: 50000.00, status: "Completed" },
                { id: "TX-9918D", dtime: "2023.10.24 11:10:00", type: "WITHDRAW", desc: "Bank Transfer - Standard Chartered", amount: -100000.00, status: "Completed" },
                { id: "TX-9926B", dtime: "2023.10.29 14:20:00", type: "WITHDRAW", desc: "Mobile Wallet - Nagad", amount: -25000.00, status: "Processing" },
                { id: "TX-9919C", dtime: "2023.10.25 16:45:00", type: "TRANSFER", desc: "Internal Transfer to Sub-Account", amount: -10000.00, status: "Completed" },
                { id: "TX-9928D", dtime: "2023.10.31 10:15:00", type: "TRANSFER", desc: "Received from Main Wallet", amount: 15000.00, status: "Completed" }
            ],
            search: "",
            filterType: "All",
            filterStatus: "All",
            filterTime: "30"
        };
    }

    handleSearch = (e) => this.setState({ search: e.target.value.toLowerCase() });

    // ডাইনামিক ফিল্টার আপডেট
    setFilter = (key, val) => this.setState({ [key]: val });

    render() {
        const { entries, search, filterType, filterStatus } = this.state;

        // ফিল্টারিং লজিক
        const filteredData = entries.filter(item => {
            const matchesSearch = item.id.toLowerCase().includes(search) ||
                item.desc.toLowerCase().includes(search) ||
                item.type.toLowerCase().includes(search);
            const matchesType = filterType === "All" || item.type === filterType;
            const matchesStatus = filterStatus === "All" || item.status === filterStatus;
            return matchesSearch && matchesType && matchesStatus;
        });

        return (
            <>
                <SideBar title={"Transactions History"} />

                <main className="dashboard-main px-3 px-md-4 pb-3 pb-md-4" style={{ paddingTop: "calc(var(--header-height) + 1.5rem)" }}>
                    <section className="mb-4">
                        <h2 className="font-display fw-bold text-esco-primary mb-1 text-slate-900" style={{ fontSize: "1.85rem" }}>Transaction History</h2>
                        <p className="text-muted small mb-0" style={{ fontSize: "0.95rem", maxWidth: "720px" }}>
                            A comprehensive ledger of all financial activities. Data is synced in real-time.
                        </p>
                    </section>

                    {/* Controls */}
                    <section className="row g-3 mb-4 align-items-center justify-content-between">
                        <div className="col-12 col-md-4">
                            <input type="text" className="form-control" placeholder="Search Ref ID..." onChange={this.handleSearch} />
                        </div>
                        <div className="col-12 col-md-8 d-flex flex-wrap gap-2 justify-content-md-end">
                            <select className="form-select w-auto" onChange={(e) => this.setFilter('filterType', e.target.value)}>
                                <option value="All">All Types</option>
                                <option value="DEPOSIT">Deposit</option>
                                <option value="WITHDRAW">Withdraw</option>
                                <option value="TRANSFER">Transfer</option>
                            </select>
                            <select className="form-select w-auto" onChange={(e) => this.setFilter('filterStatus', e.target.value)}>
                                <option value="All">All Status</option>
                                <option value="Completed">Completed</option>
                                <option value="Processing">Processing</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </section>

                    {/* Table Container */}
                    <section className="card transactions-card border shadow-sm p-0 mb-4">
                        <div className="table-responsive d-none d-md-block">
                            <table className="table table-hover align-middle transactions-table">
                                <thead>
                                <tr>
                                    <th>Transaction ID</th>
                                    <th>Date & Time</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th className="text-end">Amount</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredData.length > 0 ? filteredData.map(item => (
                                    <tr key={item.id}>
                                        <td><span className="font-mono-ref">{item.id}</span></td>
                                        <td className="text-secondary small">{item.dtime}</td>
                                        <td><strong className="small text-uppercase">{item.type}</strong></td>
                                        <td className="text-secondary">{item.desc}</td>
                                        <td className={`text-end fw-bold ${item.amount >= 0 ? 'text-success' : 'text-danger'}`}>
                                            {item.amount.toLocaleString()} BDT
                                        </td>
                                        <td>
                                                <span className={`badge ${item.status === 'Completed' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'}`}>
                                                    {item.status}
                                                </span>
                                        </td>
                                    </tr>
                                )) : <tr><td colSpan="6" className="text-center py-5">No records found.</td></tr>}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile View */}
                        <div className="d-md-none p-3">
                            {filteredData.map(item => (
                                <div key={item.id} className="border-bottom py-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <small className="text-muted">{item.id}</small>
                                        <small className="fw-bold">{item.status}</small>
                                    </div>
                                    <div className="fw-bold">{item.desc}</div>
                                    <div className="d-flex justify-content-between">
                                        <small>{item.type}</small>
                                        <span className={item.amount >= 0 ? 'text-success' : 'text-danger'}>
                                            {item.amount.toLocaleString()} BDT
                                        </span>
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

export default Transactions;