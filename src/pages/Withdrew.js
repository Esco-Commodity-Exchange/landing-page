import React, {Component} from 'react';
import SideBar from "../components/SideBar";
import {Link} from "react-router-dom";

class Withdrew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            method: 'bkash', // bkash, nagad, bank
            amount: 20000,
            availableBalance: 125000.00,
            accountNumber: '01712345678',
            fee: 0
        };
    }

    // মেথড পরিবর্তনের ফাংশন
    chooseMethod = (method) => {
        this.setState({ method });
    };

    // অ্যামাউন্ট পরিবর্তনের ফাংশন
    onAmountChanged = (e) => {
        this.setState({ amount: parseFloat(e.target.value) || 0 });
    };

    // কুইক অ্যামাউন্ট সিলেক্টর
    setQuickAmount = (val) => {
        if (val === 'MAX') {
            this.setState({ amount: this.state.availableBalance });
        } else {
            this.setState({ amount: val });
        }
    };

    render() {
        const { method, amount, availableBalance, fee } = this.state;
        const totalReceive = amount - fee;

        return (
            <>
                <SideBar title={"Money Withdrew"} sidebar={false} />
                <main className="dashboard-main px-3 px-md-4 pb-3 pb-md-4" style={{ marginLeft: '0', paddingTop: 'calc(var(--header-height) + 2rem)' }}>
                    <div className="withdraw-container">
                        <div className="d-flex align-items-start gap-3 mb-4">
                            <Link to="/wallet" className="btn btn-light rounded-circle shadow-sm border p-0 d-inline-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px', flexShrink: '0' }}>
                                <i className="bi bi-arrow-left fs-4 text-dark" style={{ lineHeight: '44px' }}></i>
                            </Link>
                            <div>
                                <h2 className="font-display fw-bold text-slate-900 m-0" style={{ fontSize: '1.85rem', letterSpacing: '-0.02em' }}>Withdraw Funds</h2>
                                <p className="text-secondary mt-1 mb-0" style={{ fontSize: '0.95rem', maxWidth: '600px' }}>Transfer funds from your exchange wallet to your linked accounts.</p>
                            </div>
                        </div>

                        <div className="d-flex flex-column gap-4 mt-2">
                            {/* Step 1 */}
                            <div>
                                <h3 className="fw-bold text-slate-800 font-display mb-1" style={{ fontSize: '1.15rem' }}>1. Select Withdrawal Method</h3>
                                <p className="text-secondary small mb-3">Select your preferred settlement method to withdraw funds from your ESCO wallet</p>
                                <div className="row g-3 row-cols-1 row-cols-md-3">
                                    {['bkash', 'nagad', 'bank'].map((m) => (
                                        <div className="col" key={m}>
                                            <div className={`withdraw-method-card ${method === m ? 'active' : ''}`} id={`card-${m}`} onClick={() => this.chooseMethod(m)}>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="d-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#fdf2f8', flexShrink: '0' }}>
                                                        <i className={`bi ${m === 'bank' ? 'bi-bank' : 'bi-phone'}`}></i>
                                                    </div>
                                                    <div>
                                                        <div className="fw-bold text-slate-900" style={{ fontSize: '0.95rem' }}>{m === 'bank' ? 'Bank Account' : m.charAt(0).toUpperCase() + m.slice(1)}</div>
                                                        <div className="text-secondary small" style={{ fontSize: '0.78rem' }}>Instant withdrawal</div>
                                                    </div>
                                                </div>
                                                <div className="method-check-badge"><i className="bi bi-check-lg"></i></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div>
                                <h3 className="fw-bold text-slate-800 font-display mb-1" style={{ fontSize: '1.15rem' }}>2. Withdraw Amount</h3>
                                <div className="card border shadow-sm p-4 bg-white rounded-4" style={{ borderColor: '#e2e8f0' }}>
                                    <div className="mb-3">
                                        <label className="form-label text-secondary small fw-semibold mb-2">Amount (BDT)</label>
                                        <div className="input-group input-group-lg border rounded-3 overflow-hidden" style={{ borderColor: '#cbd5e1' }}>
                                            <span className="input-group-text bg-white border-0 pe-1 text-slate-800" style={{ fontSize: '1.5rem', fontWeight: '600' }}>৳</span>
                                            <input type="number" className="form-control border-0 ps-2 fw-extrabold text-slate-900 font-mono-numbers" value={amount} onChange={this.onAmountChanged} style={{ fontSize: '1.5rem' }} />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap gap-2 mt-2">
                                        {[5000, 10000, 25000, 50000].map(val => (
                                            <button key={val} className="amount-pill-btn font-mono-numbers" onClick={() => this.setQuickAmount(val)}>৳ {val/1000}K</button>
                                        ))}
                                        <button className="amount-pill-btn font-display fw-bold" style={{ color: '#10b981', borderColor: '#10b981' }} onClick={() => this.setQuickAmount('MAX')}>MAX</button>
                                    </div>
                                    <div className="mt-3 text-secondary" style={{fontSize: "0.85rem"}}>
                                        Available Balance: <strong className="text-dark font-mono-numbers"
                                                                   id="available-balance-span">৳ 125,000.00</strong>
                                    </div>
                                </div>
                            </div>

                            {/* STEP 3 */}
                            <div>
                                <h3 className="fw-bold text-slate-800 font-display mb-1" id="step3-title">3. Enter Withdraw Details</h3>

                                <div className="card border shadow-sm p-4 bg-white rounded-4" style={{ borderColor: '#e2e8f0' }}>
                                    <div id="dynamic-fields-container">
                                        {/* Dynamic Fields */}
                                        <div className="mb-1" id="mfs-fields">
                                            <label className="form-label text-slate-800 fw-bold small mb-2" id="method-phone-label">
                                                {this.state.method === 'bank' ? 'Bank Account Number' : `${this.state.method.charAt(0).toUpperCase() + this.state.method.slice(1)} Number`}
                                            </label>
                                            <div className="input-group border rounded-3 overflow-hidden" style={{ borderColor: '#cbd5e1', maxWidth: '500px' }}>
          <span className="input-group-text bg-white border-0 fw-bold fs-5 text-muted">
            <i className={`bi ${this.state.method === 'bank' ? 'bi-bank' : 'bi-phone'}`}></i>
          </span>
                                                <input
                                                    type="text"
                                                    className="form-control border-0 ps-1 font-mono-numbers"
                                                    id="withdraw-account-input"
                                                    placeholder={this.state.method === 'bank' ? 'e.g. 104XXXXXXXX' : 'e.g. 017XXXXXXXX'}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4: Summary */}
                            <div>
                                <h3 className="fw-bold text-slate-800 font-display mb-1">4. Account Details</h3>
                                <div className="card border shadow-sm bg-white rounded-4 overflow-hidden" style={{ borderColor: '#e2e8f0' }}>
                                    <div className="p-4">
                                        <div className="d-flex align-items-center justify-content-between py-2 border-bottom">
                                            <span className="text-secondary small">Method</span>
                                            <span className="fw-bold text-slate-900 text-capitalize">{method}</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between py-2 border-bottom">
                                            <span className="text-secondary small">Withdraw Amount</span>
                                            <span className="fw-bold text-slate-900 font-mono-numbers"
                                                  id="summary-amount">৳ 20,000.00</span>
                                        </div>
                                        <div
                                            className="d-flex align-items-center justify-content-between py-2 border-bottom">
                                            <span className="text-secondary small">Processing Fee <i
                                                className="bi bi-question-circle text-muted"
                                                title="Flat administrative processing fee for transfer network clearance"></i></span>
                                            <span className="fw-semibold text-slate-900 font-mono-numbers"
                                                  id="summary-fee">৳ 0.00</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between py-2 mt-2 bg-light p-2 rounded-3">
                                            <span className="fw-bold text-slate-900 fs-6">You Will Receive</span>
                                            <span className="fw-extrabold text-success font-mono-numbers fs-5">৳ {totalReceive.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2 text-center">
                                <button className="btn btn-dark w-100 py-3" onClick={() => alert('Processing...')}>Proceed to Payment</button>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default Withdrew;