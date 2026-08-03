import React, { Component } from 'react';
import SideBar from "../components/SideBar";
import {Link} from "react-router-dom";

class Deposit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            method: 'bkash',
            amount: 20000,
            trxId: ''
        };
    }

    chooseMethod = (method) => {
        this.setState({ method });
    };

    onAmountChanged = (e) => {
        this.setState({ amount: e.target.value });
    };

    setQuickAmount = (val) => {
        if (val === 'MAX') {
            this.setState({ amount: 125000 });
        } else {
            this.setState({ amount: val });
        }
    };

    copyAgentNumber = () => {
        const number = document.getElementById('details-value').innerText;
        navigator.clipboard.writeText(number);
        alert('Agent number copied: ' + number);
    };

    verifyAndSubmit = () => {
        // আপনার সাবমিট লজিক এখানে লিখুন
        console.log("Submitting:", this.state);
    };

    render() {
        const { method, amount } = this.state;

        return (
            <>
                <SideBar title={"Money deposit"} sidebar={false} />

                <main className=" px-3 px-md-4 pb-3 pb-md-4" style={{ marginLeft: '0', paddingTop: 'calc(var(--header-height) + 2rem)' }}>
                    <div className="deposit-container">
                        <div className="d-flex align-items-start gap-3 mb-4">
                            <Link to="/wallet" className="btn btn-light rounded-circle shadow-sm border p-0 d-inline-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px', flexShrink: 0 }} aria-label="Back to Wallets">
                                <i className="bi bi-arrow-left fs-4 text-dark" style={{ lineHeight: '44px' }}></i>
                            </Link>
                            <div>
                                <h2 className="font-display fw-bold text-slate-900 m-0" style={{ fontSize: '1.85rem', letterSpacing: '-0.02em' }}>Deposit Funds</h2>
                                <p className="text-secondary mt-1 mb-0" style={{ fontSize: '0.95rem', maxWidth: '600px' }}>Add liquidity to your Titan Exchange wallet. Select your preferred method below to initiate a secure transfer.</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column gap-4 mt-2">
                            <div>
                                <h3 className="fw-bold text-slate-800 font-display mb-1" style={{ fontSize: '1.15rem' }}>1. Select Deposit Method</h3>
                                <p className="text-secondary small mb-3">Select your preferred method to deposit funds to your ESCO wallet</p>
                                <div className="row g-3 row-cols-1 row-cols-md-3">
                                    <div className="col">
                                        {/* এখানে this.chooseMethod ব্যবহার করা হয়েছে */}
                                        <div className={`deposit-method-card ${method === 'bkash' ? 'active' : ''}`} id="card-bkash" onClick={() => this.chooseMethod('bkash')}>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="d-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#fdf2f8', flexShrink: 0 }}>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="24" height="24" rx="6" fill="#d12053" fillOpacity="0.1"/>
                                                        <path d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM9 15L11.5 12L9 9H12.5L15 12L12.5 15H9Z" fill="#d12053"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="fw-bold text-slate-900" style={{ fontSize: '0.95rem' }}>bKash</div>
                                                    <div className="text-secondary small" style={{ fontSize: '0.78rem' }}>Instant deposit</div>
                                                </div>
                                            </div>
                                            <div className="method-check-badge"><i className="bi bi-check-lg"></i></div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className={`deposit-method-card ${method === 'nagad' ? 'active' : ''}`} id="card-nagad" onClick={() => this.chooseMethod('nagad')}>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="d-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#fff7ed', flexShrink: 0 }}>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="24" height="24" rx="6" fill="#ea580c" fillOpacity="0.1"/>
                                                        <circle cx="12" cy="12" r="7" stroke="#ea580c" strokeWidth="2" fill="none" />
                                                        <circle cx="12" cy="12" r="3.5" fill="#ea580c" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="fw-bold text-slate-900" style={{ fontSize: '0.95rem' }}>Nagad</div>
                                                    <div className="text-secondary small" style={{ fontSize: '0.78rem' }}>Instant deposit</div>
                                                </div>
                                            </div>
                                            <div className="method-check-badge"><i className="bi bi-check-lg"></i></div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className={`deposit-method-card ${method === 'bank' ? 'active' : ''}`} id="card-bank" onClick={() => this.chooseMethod('bank')}>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="d-flex align-items-center justify-content-center text-primary" style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#eff6ff', flexShrink: 0 }}>
                                                    <i className="bi bi-bank fs-5 text-primary"></i>
                                                </div>
                                                <div>
                                                    <div className="fw-bold text-slate-900" style={{ fontSize: '0.95rem' }}>Bank Account</div>
                                                    <div className="text-secondary small" style={{ fontSize: '0.78rem' }}>Direct bank transfer</div>
                                                </div>
                                            </div>
                                            <div className="method-check-badge"><i className="bi bi-check-lg"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="fw-bold text-slate-800 font-display mb-1" style={{ fontSize: '1.15rem' }}>2. Cash Out</h3>
                                <div className="card border shadow-sm p-4 bg-white rounded-4" style={{ borderColor: '#e2e8f0' }}>
                                    <p className="text-secondary small mb-3">Please Cash Out the exact deposit amount to the following ESCO Agent number.</p>
                                    <div className="p-3 rounded-3 d-flex align-items-center justify-content-between flex-wrap gap-2" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                        <div className="pe-3">
                                            <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em' }}>Agent Number</div>
                                            <div className="font-mono-numbers fw-bold text-slate-900 fs-5 mt-0.5" id="details-value">01798-234561</div>
                                        </div>
                                        {/* এখানে this.copyAgentNumber ব্যবহার করা হয়েছে */}
                                        <button className="btn d-flex align-items-center gap-2 px-3 py-2 text-white font-display fw-bold" style={{ backgroundColor: '#022c1e', borderRadius: '8px', fontSize: '0.85rem' }} onClick={this.copyAgentNumber}>
                                            <i className="bi bi-copy"></i> Copy
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="fw-bold text-slate-800 font-display mb-1" style={{ fontSize: '1.15rem' }}>3. Enter Amount</h3>
                                <div className="card border shadow-sm p-4 bg-white rounded-4" style={{ borderColor: '#e2e8f0' }}>
                                    <div className="mb-3">
                                        <label className="form-label text-secondary small fw-semibold mb-2">Amount (BDT)</label>
                                        <div className="input-group input-group-lg border rounded-3 overflow-hidden" style={{ borderColor: '#cbd5e1' }}>
                                            <span className="input-group-text bg-white border-0 pe-1 text-slate-800" style={{ fontSize: '1.5rem', fontWeight: 600 }}>৳</span>
                                            {/* এখানে this.onAmountChanged ব্যবহার করা হয়েছে */}
                                            <input type="number" className="form-control border-0 ps-2 fw-extrabold text-slate-900 font-mono-numbers" value={amount} style={{ fontSize: '1.5rem' }} onChange={this.onAmountChanged} />
                                        </div>
                                    </div>

                                    <div className="mt-3 text-secondary" style={{fontSize: "0.85rem"}}>
                                        Available Balance: <strong className="text-dark font-mono-numbers"
                                                                   id="available-balance-span">৳ 125,000.00</strong>
                                    </div>
                                </div>
                            </div>

                            {/* STEP 4: Submit TrxID */}
                            <div>
                                <h3 className="fw-bold text-slate-800 font-display mb-1" style={{ fontSize: '1.15rem' }}>4. Submit TrxID</h3>

                                <div className="card border shadow-sm p-4 bg-white rounded-4" style={{ borderColor: '#e2e8f0' }}>
                                    <p className="text-secondary small mb-3">Enter the details from your successful Cash Out transaction.</p>

                                    <div className="mb-1">
                                        <label className="form-label text-slate-800 fw-bold small mb-2">Transaction ID (TrxID) *</label>
                                        <div className="input-group border rounded-3 overflow-hidden" style={{ borderColor: '#cbd5e1', maxWidth: '500px' }}>
                                            <span className="input-group-text bg-white border-0 fw-bold fs-5 text-muted">#</span>
                                            <input
                                                type="text"
                                                className="form-control border-0 ps-1 font-mono-numbers text-uppercase"
                                                placeholder="e.g. 8KXXYZZ"
                                                required
                                                value={this.state.trxId} // state থেকে ভ্যালু আসছে
                                                onChange={(e) => this.setState({ trxId: e.target.value })} // state আপডেট করছে
                                            />
                                        </div>
                                        <div className="form-text text-secondary mt-2" style={{ fontSize: '0.8rem' }}>
                                            Found in your {this.state.method === 'bkash' ? 'bKash' : this.state.method === 'nagad' ? 'Nagad' : 'bank'} confirmation SMS.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2 text-center">
                                {/* এখানে this.verifyAndSubmit ব্যবহার করা হয়েছে */}
                                <button className="btn-proceed-deposit d-flex align-items-center justify-content-center gap-2 mb-2" onClick={this.verifyAndSubmit}>
                                    <span>Proceed to Payment</span>
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default Deposit;