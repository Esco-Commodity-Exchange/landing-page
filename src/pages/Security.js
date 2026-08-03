import React, { Component } from 'react';
import SideBar from "../components/SideBar";

class Security extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "+880 1711-223344",
            email: "institution@esco.exchange",
            tfaEnabled: true
        };
    }

    copySeedValue = () => {
        const seed = document.getElementById('tfa-secret-seed').value;
        navigator.clipboard.writeText(seed);
        alert('Seed copied!');
    };

    saveTFASettings = () => {
        alert('Configuration Saved!');
    };

    render() {
        return (
            <>
                <SideBar title={"Security"} />

                <main className="dashboard-main px-3 px-md-4 pb-3 pb-md-4" style={{ paddingTop: "calc(var(--header-height) + 1.5rem)" }}>
                    <section className="mb-4">
                        <h2 className="font-display fw-bold text-esco-primary mb-1 text-slate-900" style={{ fontSize: "1.85rem" }} id="welcome-message-text">Security Center</h2>
                        <p className="text-muted small mb-0" style={{ fontSize: "0.95rem", maxWidth: "720px", lineHeight: "1.5" }}>
                            Protect your account with advanced security features, identity verification, and real-time monitoring to ensure safe commodity trading.
                        </p>
                    </section>

                    {/* SECURITY GRID */}
                    <section className="mb-4">
                        <div className="row g-4 mb-4">
                            {/* Card 1: 2FA */}
                            <div className="col-12 col-md-4">
                                <div className="security-card">
                                    <div>
                                        <div className="security-card-header">
                                            <div className="security-card-icon-title">
                                                <i className="bi bi-phone"></i>
                                                <span className="security-card-title">Two-Factor Auth</span>
                                            </div>
                                            <span className="status-badge-inline status-badge-enabled" id="tfa-status-badge">Enabled</span>
                                        </div>
                                        <div className="security-card-body">Adds an extra layer of security requiring a code from your authenticator app.</div>
                                    </div>
                                    <div>
                                        <button className="security-card-btn-primary" id="btn-manage-2fa" data-bs-toggle="modal" data-bs-target="#modal2FA">Manage 2FA</button>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Phone */}
                            <div className="col-12 col-md-4">
                                <div className="security-card">
                                    <div>
                                        <div className="security-card-header">
                                            <div className="security-card-icon-title">
                                                <i className="bi bi-phone"></i>
                                                <span className="security-card-title">Phone Verification</span>
                                            </div>
                                            <span className="status-badge-inline status-badge-enabled" id="phone-status-badge">Verified</span>
                                        </div>
                                        <div className="security-card-body">Used for account recovery and critical security alerts. <span className="d-block fw-semibold text-dark mt-2" id="verified-phone-indicator">{this.state.phone}</span></div>
                                    </div>
                                    <div>
                                        <button className="security-card-btn-secondary" id="btn-update-phone" data-bs-toggle="modal" data-bs-target="#modalPhone">Update Number</button>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Email */}
                            <div className="col-12 col-md-4">
                                <div className="security-card">
                                    <div>
                                        <div className="security-card-header">
                                            <div className="security-card-icon-title">
                                                <i className="bi bi-envelope"></i>
                                                <span className="security-card-title">Email Verification</span>
                                            </div>
                                            <span className="status-badge-inline status-badge-enabled" id="email-status-badge">Verified</span>
                                        </div>
                                        <div className="security-card-body">Primary communication channel for trade confirmations. <span className="d-block fw-semibold text-dark mt-2 text-truncate" id="verified-email-indicator">{this.state.email}</span></div>
                                    </div>
                                    <div>
                                        <button className="security-card-btn-secondary" id="btn-change-email" data-bs-toggle="modal" data-bs-target="#modalEmail">Change Email</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row: Password */}
                        <div className="row g-4">
                            <div className="col-12 col-md-4">
                                <div className="security-card">
                                    <div>
                                        <div className="security-card-header">
                                            <div className="security-card-icon-title">
                                                <i className="bi bi-key"></i>
                                                <span className="security-card-title">Password</span>
                                            </div>
                                            <div className="last-updated-text">Last updated:<br /><strong>30d ago</strong></div>
                                        </div>
                                        <div className="security-card-body">Ensure your password is strong and unique to this exchange.</div>
                                    </div>
                                    <div>
                                        <button className="security-card-btn-secondary" id="btn-change-password" data-bs-toggle="modal" data-bs-target="#modalPassword">Change Password</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* MODALS */}
                {/* MODAL 2FA */}
                <div className="modal fade" id="modal2FA" tabIndex="-1" aria-labelledby="modal2FALabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0">
                            <div className="modal-header border-bottom py-3">
                                <h5 className="modal-title font-display fw-bold text-black" id="modal2FALabel">Two-Factor Authentication Setup</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body p-4">
                                <p className="text-muted small">Two-factor auth adds an strong shield of protection to your commodity clearing account transactions.</p>
                                <div className="d-flex align-items-center justify-content-between border rounded-3 p-3 mb-3 bg-light">
                                    <div>
                                        <span className="fw-bold text-dark d-block mb-1">Google / Microsoft Authenticator</span>
                                        <span className="text-muted text-xs d-block" style={{ fontSize: "0.78rem" }}>Generate tokens on your phone</span>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="tfa-toggle-input" style={{ width: "2.8em" }} defaultChecked />
                                    </div>
                                </div>
                                <div id="tfa-setup-instructions">
                                    <span className="text-uppercase text-muted fw-bold d-block mb-2" style={{ fontSize: "0.68rem", letterSpacing: "0.05em" }}>Security Token Seed Key</span>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control font-mono" defaultValue="JBSWY3DPEHPK3PXP" id="tfa-secret-seed" readOnly style={{ fontSize: "0.88rem", backgroundColor: "#f8fafc" }} />
                                        <button className="btn btn-outline-secondary" type="button" onClick={this.copySeedValue}><i className="bi bi-copy"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer p-3 bg-light">
                                <button type="button" className="btn btn-light px-3 py-2 small fw-bold" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn text-white border-0 px-4 py-2 small fw-bold" style={{ backgroundColor: "#022c1e" }} onClick={this.saveTFASettings}>Save Configuration</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MODAL PHONE */}
                <div className="modal fade" id="modalPhone" tabIndex="-1" aria-labelledby="modalPhoneLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0">
                            <div className="modal-header border-bottom py-3">
                                <h5 className="modal-title font-display fw-bold text-black" id="modalPhoneLabel">Update Verified Phone</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form id="phone-verification-form">
                                <div className="modal-body p-4">
                                    <p className="text-muted small">Update your telephone contact. Crucial for SMS dynamic tokens and trade clearance validations.</p>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-dark" htmlFor="phone-input-element">Phone Number</label>
                                        <input type="text" className="form-control font-mono-numbers" id="phone-input-element" defaultValue={this.state.phone} required />
                                    </div>
                                </div>
                                <div className="modal-footer p-3 bg-light">
                                    <button type="button" className="btn btn-light px-3 py-2 small fw-bold" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn text-white border-0 px-4 py-2 small fw-bold" style={{ backgroundColor: "#022c1e" }}>Update Contacts</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* MODAL EMAIL */}
                <div className="modal fade" id="modalEmail" tabIndex="-1" aria-labelledby="modalEmailLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0">
                            <div className="modal-header border-bottom py-3">
                                <h5 className="modal-title font-display fw-bold text-black" id="modalEmailLabel">Update Primary Email</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form id="email-verification-form">
                                <div className="modal-body p-4">
                                    <p className="text-muted small">This represents the main gateway to send transaction records. Must verify the activation link.</p>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-dark" htmlFor="email-input-element">Email Address</label>
                                        <input type="email" className="form-control" id="email-input-element" defaultValue={this.state.email} required />
                                    </div>
                                </div>
                                <div className="modal-footer p-3 bg-light">
                                    <button type="button" className="btn btn-light px-3 py-2 small fw-bold" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn text-white border-0 px-4 py-2 small fw-bold" style={{ backgroundColor: "#022c1e" }}>Update Email</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* MODAL PASSWORD */}
                <div className="modal fade" id="modalPassword" tabIndex="-1" aria-labelledby="modalPasswordLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0">
                            <div className="modal-header border-bottom py-3">
                                <h5 className="modal-title font-display fw-bold text-black" id="modalPasswordLabel">Update Account Password</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form id="password-change-form">
                                <div className="modal-body p-4">
                                    <p className="text-muted small">Update security password frequently to prevent unauthorized external access.</p>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-dark" htmlFor="current-pass">Current Password</label>
                                        <input type="password" className="form-control" id="current-pass" placeholder="••••••••" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-dark" htmlFor="new-pass">New Password</label>
                                        <input type="password" className="form-control" id="new-pass" placeholder="••••••••" minLength="8" required />
                                    </div>
                                    <div className="mb-0">
                                        <label className="form-label small fw-bold text-dark" htmlFor="confirm-pass">Confirm Password</label>
                                        <input type="password" className="form-control" id="confirm-pass" placeholder="••••••••" required />
                                    </div>
                                </div>
                                <div className="modal-footer p-3 bg-light">
                                    <button type="button" className="btn btn-light px-3 py-2 small fw-bold" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn text-white border-0 px-4 py-2 small fw-bold" style={{ backgroundColor: "#022c1e" }}>Update Account Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Security;