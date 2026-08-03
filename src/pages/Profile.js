import React, {Component} from 'react';
import SideBar from "../components/SideBar"

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "Ansarul Molla",
                email: "ansarul.m@example.com",
                phone: "+880 1712-345678",
                address: "Block C, Road 5, Banani, Dhaka 1213, Bangladesh",
                selectedDoc: 'nid', // ডিফল্ট সিলেক্টেড ট্যাব
                selfieCaptured: false
            }
        };
    }

    // Helper function to simulate alerts as per your original HTML
    handleAlert = (message) => {
        alert(message);
    };



    render() {
        var state  = this.state;
        return (
            <>
                <SideBar title={"Profile"}/>
                <div className="esco-wrapper position-relative">
                    <main className="dashboard-main px-3 px-md-4 pb-3 pb-md-4" style={{ paddingTop: 'calc(var(--header-height) + 1.5rem)' }}>

                        {/* Profile Header */}
                        <section className="mb-4">
                            <div className="profile-header-card border shadow-sm d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 p-4 text-center text-md-start">
                                <div className="d-flex flex-column flex-md-row align-items-center gap-3 gap-md-4">
                                    <div className="avatar-container mb-0 flex-shrink-0">
                                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop" className="avatar-image" alt="Profile Avatar" id="avatar-img-view" />
                                        <div className="avatar-edit-badge" title="Change Avatar" onClick={() => this.handleAlert('Choose profile avatar photo from connected storage device.')}>
                                            <i className="bi bi-pencil-fill"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 flex-wrap mb-1">
                                            <h3 className="font-display fw-bold text-slate-900 m-0" style={{ fontSize: "1.5rem" }} id="profile-name-title">{this.state.user.name}</h3>
                                            <span className="trader-status-badge badge-verified-trader m-0" id="profile-badge-verified">
                      <i className="bi bi-patch-check-fill"></i> Verified Trader
                    </span>
                                        </div>
                                        <div className="profile-info-subtext m-0 justify-content-center justify-content-md-start d-flex align-items-center flex-wrap gap-2">
                                            <span>ID: <strong>ESCO-458721</strong></span>
                                            <span className="text-muted">•</span>
                                            <span>Member Since: <strong>June 2026</strong></span>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-edit-profile-action m-0 flex-shrink-0" data-bs-toggle="modal" data-bs-target="#modalEditProfile">
                                    <i className="bi bi-pencil-square me-1"></i> Edit Profile
                                </button>
                            </div>
                        </section>

                        {/* Stats Overview */}
                        <section className="row g-3 mb-4">
                            <div className="col-6 col-md-3"><div className="stat-grid-card shadow-sm"><div className="stat-grid-title">Total Portfolio</div><div className="stat-grid-value" id="stats-portfolio-val">৳ 2,450,000</div></div></div>
                            <div className="col-6 col-md-3"><div className="stat-grid-card shadow-sm"><div className="stat-grid-title">Completed Orders</div><div className="stat-grid-value">1,245</div></div></div>
                            <div className="col-6 col-md-3"><div className="stat-grid-card shadow-sm"><div className="stat-grid-title">Total Referrals</div><div className="stat-grid-value">85</div></div></div>
                            <div className="col-6 col-md-3"><div className="stat-grid-card shadow-sm"><div className="stat-grid-title">Success Rate</div><div className="stat-grid-value text-success">98.5%</div></div></div>
                        </section>

                        {/* Main Content Grid */}
                        <section className="row g-4">
                            <div className="col-12 col-lg-7 d-flex flex-column gap-4">
                                <div className="card shadow-sm border p-4" style={{ borderRadius: "16px" }}>
                                    <div className="details-header-row">
                                        <h4 className="font-display fw-bold m-0" style={{ fontSize: "1.1rem" }}>Personal Information</h4>
                                        <button className="btn-inline-edit" data-bs-toggle="modal" data-bs-target="#modalEditProfile"><i className="bi bi-pencil-square"></i> Edit</button>
                                    </div>
                                    <div className="row g-3 mt-2">
                                        <div className="col-12"><div className="info-field-group"><div className="info-field-title">Full Name</div><div className="info-field-value">{this.state.user.name}</div></div></div>
                                        <div className="col-12"><div className="info-field-group"><div className="info-field-title">Email</div><div className="info-field-value">{this.state.user.email}</div></div></div>
                                        <div className="col-12"><div className="info-field-group"><div className="info-field-title">Phone</div><div className="info-field-value">{this.state.user.phone}</div></div></div>
                                        <div className="col-12"><div className="info-field-group"><div className="info-field-title">Address</div><div className="info-field-value">{this.state.user.address}</div></div></div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: KYC Widget */}
                            <div className="col-12 col-lg-5">
                                <div className="kyc-verification-card border shadow-sm p-4 bg-white rounded-3">
                                    <h4 className="font-display d-block fs-5 fw-bold mb-4 text-slate-900 text-start w-100 pb-3 border-bottom" style={{ fontSize: '1.1rem', lineHeight: '1.2' }}>
                                        KYC Verification
                                    </h4>

                                    {/* State 1: VERIFIED WORKSPACE STATE */}
                                    {/* 'd-none' ক্লাসটি সরিয়ে দিলে এটি দেখাবে */}
                                    <div className="d-none text-center py-2 d-flex flex-column align-items-center justify-content-center flex-grow-1" id="kyc-view-state-verified">
                                        <div className="kyc-icon-circle kyc-icon-verified mx-auto mb-3" style={{ fontSize: '2rem', color: '#10b981' }}>
                                            <i className="bi bi-shield-check"></i>
                                        </div>
                                        <h5 className="kyc-title text-slate-900 fw-bold">Identity Verified</h5>
                                        <p className="kyc-body-text px-1 text-muted" style={{ fontSize: '0.9rem' }}>
                                            Your identity has been successfully verified for trading limits, instant P2P clearance, and fast credit withdrawals.
                                        </p>
                                        <button className="btn btn-outline-secondary btn-sm px-3" id="btn-view-kyc-docs">
                                            <i className="bi bi-eye-fill me-1"></i> View Documents
                                        </button>
                                    </div>

                                    {/* State 2: UNVERIFIED STATE */}
                                    {/* 'd-none' ক্লাস যোগ করা হয়েছে */}
                                    <div className="text-center py-2 d-flex flex-column align-items-center justify-content-center flex-grow-1 " id="kyc-view-state-unverified">
                                        <div className="kyc-icon-circle kyc-icon-unverified mx-auto mb-3" style={{ fontSize: '2rem', color: '#ef4444' }}>
                                            <i className="bi bi-exclamation-circle"></i>
                                        </div>
                                        <h5 className="kyc-title text-slate-900 fw-bold">Identity Verification Required</h5>
                                        <p className="kyc-body-text px-1 text-muted" style={{ fontSize: '0.9rem' }}>
                                            Complete your identity verification to unlock full trading limits, P2P access, and withdrawals.
                                        </p>
                                        <button className="btn text-white px-4 py-2" style={{ backgroundColor: '#022c1e' }} data-bs-toggle="modal" data-bs-target="#modalKYC">
                                            <i className="bi bi-shield-lock-fill me-1"></i> Verify Identity Now
                                        </button>
                                    </div>

                                    {/* State 3: PENDING REVIEW STATE */}
                                    {/* 'd-none' ক্লাস যোগ করা হয়েছে */}
                                    <div className="text-center py-2 d-flex flex-column align-items-center justify-content-center flex-grow-1 d-none" id="kyc-view-state-pending">
                                        <div className="spinner-border text-warning mb-3" role="status" style={{ width: '3rem', height: '3rem', borderWidth: '0.25em' }}>
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <h5 className="kyc-title text-slate-900 fw-bold" style={{ fontSize: '1.12rem' }}>Verification Under Review</h5>
                                        <p className="kyc-body-text px-3 mb-3 text-muted" style={{ fontSize: '0.9rem' }}>
                                            Your government documents and selfie biometric scan are currently being reviewed by our compliance experts.
                                        </p>

                                        {/* Countdown box */}
                                        <div className="bg-light text-warning-emphasis border rounded-3 p-3 mb-4 w-100" style={{ maxWidth: '350px' }}>
                                            <div className="small fw-bold text-uppercase mb-1" style={{ fontSize: '0.65rem', letterSpacing: '0.05em', color: '#b45309' }}>
                                                Estimated Review Time
                                            </div>
                                            <div className="fs-4 fw-extrabold text-warning-emphasis mb-1" id="kyc-review-countdown">02:44:12</div>
                                            <div className="text-muted" style={{ fontSize: '0.7rem' }}>Average completion takes 1 to 3 hours</div>
                                        </div>

                                        <button className="btn btn-outline-success btn-sm px-3 rounded-pill" style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                                            <i className="bi bi-lightning-charge-fill"></i> Fast-Verify Sandbox Approval
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </main>

                </div>

                {/* MODAL 2: BASIC INFORMATION EDIT PROFILE */}
                <div className="modal fade" id="modalEditProfile" tabIndex="-1" aria-labelledby="modalEditProfileLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0">
                            <div className="modal-header border-bottom py-3">
                                <h5 className="modal-title font-display fw-bold text-black" id="modalEditProfileLabel">Basic Information</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form id="profile-interactive-form" onSubmit={(e) => { e.preventDefault(); alert('Profile Updated Successfully!'); }}>
                                <div className="modal-body p-4">

                                    {/* Full legal name */}
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-dark" htmlFor="input-full-name">Full Legal Name</label>
                                        <input type="text" className="form-control" id="input-full-name" defaultValue="Ansarul Molla" required />
                                    </div>

                                    {/* Nationality selector */}
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-dark" htmlFor="input-nationality">Nationality</label>
                                        <select className="form-select" id="input-nationality" required>
                                            <option value="BD">Bangladesh</option>
                                            <option value="IN">India</option>
                                            <option value="SG">Singapore</option>
                                            <option value="US">United States</option>
                                            <option value="GB">United Kingdom</option>
                                        </select>
                                    </div>

                                    {/* Email address */}
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-dark" htmlFor="input-email">Primary Contact Email</label>
                                        <div className="input-group">
                                            <input type="email" className="form-control" id="input-email" defaultValue="ansarul.m@example.com" required />
                                            <span className="input-group-text bg-white border-start-0 text-success fw-bold text-xs" style={{ fontSize: '0.78rem' }}>
                <i className="bi bi-check-circle-fill me-1"></i> Verified
              </span>
                                        </div>
                                    </div>

                                    {/* Phone number */}
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-dark" htmlFor="input-phone">Secure Phone Number</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control font-mono-numbers" id="input-phone" defaultValue="+880 1712-345678" required />
                                            <button className="btn btn-outline-secondary" type="button" onClick={() => alert('SMS OTP sent to authorize telephone change.')}>Change</button>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="mb-0">
                                        <label className="form-label small fw-bold text-dark" htmlFor="input-address">Address Location</label>
                                        <textarea className="form-control" id="input-address" rows="2" defaultValue="Block C, Road 5, Banani, Dhaka 1213, Bangladesh" required></textarea>
                                    </div>

                                </div>
                                <div className="modal-footer p-3 bg-light">
                                    <button type="button" className="btn btn-light px-3 py-2 small fw-bold" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn text-white border-0 px-4 py-2 small fw-bold" style={{ backgroundColor: '#022c1e' }}>Update Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/*Modal KYC*/}
                <div className="modal fade" id="modalKYC" tabIndex="-1" aria-labelledby="modalKYCLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '16px', overflow: 'hidden' }}>

                            {/* Header */}
                            <div className="modal-header border-bottom py-3 px-3 d-flex align-items-center justify-content-between bg-white">
                                <div className="d-flex align-items-center gap-2">
                                    <button type="button" className="btn btn-link text-dark p-0 border-0 me-1" data-bs-dismiss="modal" aria-label="Back">
                                        <i className="bi bi-arrow-left fs-5"></i>
                                    </button>
                                    <h5 className="modal-title font-display fw-bold text-black mb-0" id="modalKYCLabel" style={{ fontSize: '1.15rem', letterSpacing: '-0.01em' }}>KYC Verify</h5>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            {/* Body */}
                            <div className="modal-body p-4" style={{ backgroundColor: '#ffffff' }}>

                                {/* Yellow Alert Box */}
                                <div className="d-flex align-items-start gap-2 p-3 rounded-3 mb-4" style={{ backgroundColor: '#fffbeb', border: '1.5px solid #fef3c7', color: '#b45309' }}>
                                    <i className="bi bi-shield-fill-exclamation fs-5" style={{ color: '#d97706' }}></i>
                                    <div>
                                        <h6 className="fw-bold mb-1" style={{ fontSize: '0.88rem', color: '#78350f' }}>Please upload clear and valid documents.</h6>
                                        <p className="m-0" style={{ fontSize: '0.76rem', color: '#9a3412' }}>All documents are encrypted and secure.</p>
                                    </div>
                                </div>

                                {/* Identity Proof Header */}
                                <div className="mb-3 text-start">
                                    <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.95rem' }}>Identity Proof</h6>
                                    <span className="text-muted d-block" style={{ fontSize: '0.75rem' }}>Choose any one document</span>
                                </div>

                                {/* Tab Selectors */}
                                <div className="d-flex gap-2 mb-4">
                                    <div className="doc-picker-tab-btn active w-100 p-3 d-flex flex-column align-items-center text-center border" style={{ minHeight: '96px', cursor: 'pointer' }}>
                                        <i className="bi bi-card-heading mb-1 fs-4"></i>
                                        <span className="fw-bold d-block" style={{ fontSize: '0.8rem' }}>National ID</span>
                                        <span className="text-success fw-semibold mt-0.5 d-block" style={{ fontSize: '0.6rem' }}>Recommended</span>
                                    </div>
                                    <div className="doc-picker-tab-btn w-100 p-3 d-flex flex-column align-items-center text-center border" style={{ minHeight: '96px', cursor: 'pointer' }}>
                                        <i className="bi bi-journal-bookmark-fill mb-1 fs-4"></i>
                                        <span className="fw-bold d-block" style={{ fontSize: '0.8rem' }}>Passport</span>
                                    </div>
                                    <div className="doc-picker-tab-btn w-100 p-3 d-flex flex-column align-items-center text-center border" style={{ minHeight: '96px', cursor: 'pointer' }}>
                                        <i className="bi bi-person-badge-fill mb-1 fs-4"></i>
                                        <span className="fw-bold d-block" style={{ fontSize: '0.8rem' }}>Driving License</span>
                                    </div>
                                </div>

                                {/* Information Fields */}
                                <div className="mb-4 text-start p-3 rounded-3" style={{ backgroundColor: '#f8fafc', border: '1px solid #f1f5f9' }}>
                                    <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '0.9rem' }}>Information Fields</h6>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-dark mb-1">Full Name</label>
                                        <input type="text" className="form-control bg-white" placeholder="Enter your full legal name" style={{ borderRadius: '8px' }} />
                                    </div>
                                    <div className="mb-0">
                                        <label className="form-label small fw-bold text-dark mb-1">NID Number</label>
                                        <input type="text" className="form-control bg-white" placeholder="Enter NID Number" style={{ borderRadius: '8px' }} />
                                    </div>
                                </div>

                                {/* Upload Buttons */}
                                <div className="p-3 mb-4 rounded-3 text-start" style={{ backgroundColor: '#f8fafc', border: '1px solid #f1f5f9' }}>
                                    <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '0.9rem' }}>Upload National ID</h6>
                                    <div className="d-flex align-items-center justify-content-between p-3 mb-2 bg-white rounded-3 border" style={{ cursor: 'pointer' }}>
                                        <div><h6 className="fw-bold mb-0" style={{ fontSize: '0.85rem' }}>Front Side</h6></div>
                                        <i className="bi bi-cloud-arrow-up fs-5 text-secondary"></i>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between p-3 bg-white rounded-3 border" style={{ cursor: 'pointer' }}>
                                        <div><h6 className="fw-bold mb-0" style={{ fontSize: '0.85rem' }}>Back Side</h6></div>
                                        <i className="bi bi-cloud-arrow-up fs-5 text-secondary"></i>
                                    </div>
                                </div>

                                {/* Selfie Verification */}
                                <div className="mb-4 text-start">
                                    <h6 className="fw-bold text-dark mb-0.5" style={{ fontSize: '0.95rem' }}>Selfie Verification</h6>
                                    <span className="text-muted d-block mb-3" style={{ fontSize: '0.75rem' }}>Take a clear selfie</span>
                                    <div className="d-flex align-items-center justify-content-between p-3 rounded-3 border bg-white">
                                        <div className="d-flex align-items-center gap-3">
                                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" className="rounded-circle" style={{ width: '50px', height: '50px' }} />
                                            <div>
                                                <h6 className="fw-bold mb-0" style={{ fontSize: '0.85rem' }}>Face Scan Match</h6>
                                                <span className="text-muted" style={{ fontSize: '0.72rem' }}>Verification camera ready</span>
                                            </div>
                                        </div>
                                        <button type="button" className="btn text-white fw-bold px-3 py-2 border-0" style={{ backgroundColor: '#022c1e', fontSize: '0.8rem', borderRadius: '8px' }}>
                                            <i className="bi bi-camera-fill me-1"></i> Take Selfie
                                        </button>
                                    </div>
                                </div>

                                {/* Submit */}
                                <button type="button" className="btn text-white w-100 py-3 fw-bold border-0" style={{ backgroundColor: '#022c1e', fontSize: '0.95rem' }}>Save & Continue</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Profile;