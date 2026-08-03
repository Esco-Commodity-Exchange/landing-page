import React, {Component} from 'react';
import SideBar from "../components/SideBar";
import {Link} from "react-router-dom";

class Send extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 20000,
            recipient: {
                name: "Rahim Ahmed",
                id: "ESCO-458721"
            },
            pin: "1234",
            pinVisible: false
        };
    }

    // অ্যামাউন্ট ইনপুট হ্যান্ডলার
    handleAmountChange = (e) => {
        this.setState({ amount: Number(e.target.value) });
    };

    // কুইক অ্যামাউন্ট সেটআপ
    setQuickAmount = (val) => {
        if (val === 'MAX') {
            this.setState({ amount: 125000 }); // Available balance example
        } else {
            this.setState({ amount: val });
        }
    };

    // পিন ভিজিবিলিটি টগল
    togglePinVisibility = () => {
        this.setState((prevState) => ({ pinVisible: !prevState.pinVisible }));
    };

    // পিন ইনপুট হ্যান্ডলার
    handlePinChange = (e) => {
        this.setState({ pin: e.target.value });
    };

    // সেন্ড বাটন অ্যাকশন
    verifyAndSend = () => {
        const { amount, recipient } = this.state;
        alert(`Sending ৳${amount.toLocaleString()} to ${recipient.name}...`);
    };
    render() {
        const { amount, recipient, pin, pinVisible } = this.state;

        return (
            <>
                <SideBar title={"Send Money"} sidebar={false}/>
                <div className="esco-wrapper position-relative">
                    {/* CONTENT BODY */}
                    <main className="dashboard-main px-3 px-md-4 pb-3 pb-md-4" style={{ marginLeft: 0, paddingTop: "calc(var(--header-height) + 2rem)" }}>

                        <div className="send-container">

                            {/* Back button row */}
                            <div className="d-flex align-items-start gap-3 mb-4">
                                <Link to="/wallet" className="btn btn-light rounded-circle shadow-sm border p-0 d-inline-flex align-items-center justify-content-center" style={{ width: "44px", height: "44px", flexShrink: 0 }} aria-label="Back to Wallets">
                                    <i className="bi bi-arrow-left fs-4 text-dark" style={{ lineHeight: "44px" }}></i>
                                </Link>
                                <div>
                                    <h2 className="font-display fw-bold text-slate-900 m-0" style={{ fontSize: "1.85rem", letterSpacing: "-0.02em" }}>Send Money</h2>
                                    <p className="text-secondary mt-1 mb-0" style={{ fontSize: "0.95rem", maxWidth: "600px" }}>
                                        Send money instantly to another Esco user. Transfer BDT balance securely between verified Esco accounts.
                                    </p>
                                </div>
                            </div>

                            {/* Send Money Card Container/Steps Layout */}
                            <div className="row g-4" style={{ width: "100%", margin: 0 }}>
                                <div className="col-12">

                                    {/* STEP 1: Recipient Information */}
                                    <div className="mb-5">
                                        <h3 className="fw-bold text-slate-800 font-display mb-3" style={{ fontSize: "1.15rem" }}>1. Recipient Information</h3>
                                        <div className="card border rounded-4 p-4 p-md-5 bg-white shadow-sm" style={{ borderColor: "#cbd5e1", borderRadius: "16px" }}>

                                            <div className="mb-3">
                                                <label className="form-label text-slate-700 fw-semibold small mb-1">Transfer To</label>
                                                <div className="input-group border rounded-3 overflow-hidden" style={{ borderColor: "#cbd5e1" }}>
                                                <span className="input-group-text bg-white border-0 text-muted ps-3 pe-2">
                                                    <i className="bi bi-search"></i>
                                                </span>
                                                    <input type="text" className="form-control border-0 py-2 ps-1" placeholder="Search by User ID or Phone Number" defaultValue={recipient.id} />
                                                    <button className="btn bg-white border-0 text-muted px-3" type="button">
                                                        <i className="bi bi-x-lg"></i>
                                                    </button>
                                                </div>
                                                <div className="text-muted mt-2" style={{ fontSize: "0.78rem" }}>
                                                    Search by: User ID • Phone Number
                                                </div>
                                            </div>

                                            {/* Selected User Panel */}
                                            <div className="mt-3">
                                                <div className="recipient-result-card p-3 border rounded-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" alt={recipient.name} className="rounded-circle border" style={{ width: "54px", height: "54px", objectFit: "cover", flexShrink: 0 }} />
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex flex-wrap align-items-center gap-2">
                                                                <span className="fw-bold text-slate-900" style={{ fontSize: "1.05rem" }}>{recipient.name}</span>
                                                                <span className="badge bg-success-subtle text-success"><i className="bi bi-check-circle-fill"></i> Verified</span>
                                                                <span className="badge bg-light text-dark border">🇧🇩 Bangladesh</span>
                                                            </div>
                                                            <div className="text-secondary small mt-1" style={{ fontSize: "0.82rem" }}>User ID: {recipient.id}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* STEP 2: Enter Transfer Amount */}
                                    <div className="mb-5">
                                        <h3 className="fw-bold text-slate-800 font-display mb-3" style={{ fontSize: "1.15rem" }}>2. Enter Transfer Amount</h3>
                                        <div className="card border rounded-4 p-4 p-md-5 bg-white shadow-sm" style={{ borderColor: "#cbd5e1", borderRadius: "16px" }}>

                                            <div className="mb-3">
                                                <label className="form-label text-slate-700 fw-semibold small mb-1">Amount (BDT)</label>
                                                <div className="input-group border rounded-3 overflow-hidden shadow-sm" style={{ borderColor: "#cbd5e1" }}>
                                                    <span className="input-group-text bg-white border-0 fw-bold text-slate-800 ps-3 pe-2" style={{ fontSize: "1.35rem" }}>৳</span>
                                                    <input type="number" className="form-control border-0 py-3 ps-1 fw-bold text-slate-900" style={{ fontSize: "1.35rem" }} value={amount} onChange={this.handleAmountChange} min="1" step="any" />
                                                </div>
                                            </div>

                                            {/* Quick Amount Selections */}
                                            <div className="d-flex d-none flex-wrap gap-2 mb-3">
                                                <button type="button" className="btn btn-outline-secondary rounded-pill px-3 py-1" onClick={() => this.setQuickAmount(5000)}>৳ 5K</button>
                                                <button type="button" className="btn btn-outline-secondary rounded-pill px-3 py-1" onClick={() => this.setQuickAmount(10000)}>৳ 10K</button>
                                                <button type="button" className="btn btn-outline-secondary rounded-pill px-3 py-1" onClick={() => this.setQuickAmount(25000)}>৳ 25K</button>
                                                <button type="button" className="btn btn-outline-secondary rounded-pill px-3 py-1" onClick={() => this.setQuickAmount(50000)}>৳ 50K</button>
                                                <button type="button" className="btn btn-dark rounded-pill px-3 py-1" onClick={() => this.setQuickAmount('MAX')}>MAX</button>
                                            </div>

                                            <div className="text-muted fw-medium" style={{ fontSize: "0.85rem" }}>
                                                Available Balance: ৳ 125,000.00
                                            </div>
                                        </div>
                                    </div>

                                    {/* STEP 3: Security Verification */}
                                    <div className="mb-5">
                                        <h3 className="fw-bold text-slate-800 font-display mb-3" style={{ fontSize: "1.15rem" }}>3. Security Verification</h3>
                                        <div className="card border rounded-4 p-4 p-md-5 bg-white shadow-sm" style={{ borderColor: "#cbd5e1", borderRadius: "16px" }}>

                                            <div className="mb-3">
                                                <label className="form-label text-slate-700 fw-semibold small mb-1">Enter Transaction PIN</label>
                                                <div className="input-group border rounded-3 overflow-hidden" style={{ borderColor: "#cbd5e1" }}>
                                                    <input type={pinVisible ? "text" : "password"} className="form-control border-0 py-2 ps-3 fw-bold text-slate-900 font-mono" style={{ fontSize: "1.15rem", letterSpacing: "0.15em" }} value={pin} onChange={this.handlePinChange} maxLength="4" placeholder="••••" />
                                                    <button className="btn bg-white border-0 text-muted px-3" type="button" onClick={this.togglePinVisibility}>
                                                        <i className={`bi ${pinVisible ? "bi-eye-slash" : "bi-eye"}`}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* General summary section & CTA */}
                                    <div className="card border rounded-4 p-4 p-md-5 bg-white shadow-sm mb-4" style={{ borderColor: "#cbd5e1", borderRadius: "16px" }}>
                                        <div className="d-flex flex-column gap-3 mb-4">
                                            <div className="d-flex align-items-center justify-content-between pb-2 border-bottom">
                                                <span className="text-secondary">Recipient</span>
                                                <span className="fw-bold text-slate-900">{recipient.name}</span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between pb-2 border-bottom">
                                                <span className="text-secondary">Amount</span>
                                                <span className="fw-semibold text-slate-800">৳ {amount.toLocaleString()}.00</span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between pb-2 border-bottom">
                                                <span className="text-secondary">Transaction Fee</span>
                                                <span className="text-muted">৳ 0.00</span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between pt-1">
                                                <span className="fw-bold text-slate-900 fs-5">Total to Send</span>
                                                <span className="fw-extrabold fs-5" style={{ color: "#004d30" }}>৳ {amount.toLocaleString()}.00</span>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <button className="btn btn-dark d-flex align-items-center justify-content-center gap-2 py-3 w-100 rounded-3 fs-5" onClick={this.verifyAndSend} style={{ backgroundColor: "#022c1e" }}>
                                            <i className="bi bi-arrow-left-right"></i>
                                            <span>Send Money Now</span>
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </main>
                </div>
            </>
        );
    }
}

export default Send;