import React from 'react';
import { toast } from 'react-toastify';
import Header from "../components/Header"
import Footer from "../components/Footer"

const Support = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");
    };

    const startLiveChat = () => {
        alert('Connecting you with a support agent...');
    };

    return (
        <>
            <Header title={"Support"}/>
            <main className="container py-5" style={{ minHeight: 'calc(100vh - 400px)' }}>
                <div className="d-flex align-items-center gap-3 mb-5">
                    <button
                        onClick={() => window.history.back()}
                        className="btn border-0 p-0 shadow-none"
                        title="Back"
                    >
                        <i className="bi bi-arrow-left fs-3"></i>
                    </button>
                    <div>
                        <h2 className="font-display fw-bold text-esco-primary m-0" style={{ fontSize: '2.15rem' }}>Support</h2>
                        <p className="text-muted small m-0 mt-1">We're here to help you with your trading and account needs.</p>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="row align-items-center g-4 mb-5">
                    <div className="col-12 col-md-6 text-center">
                        <img style={{height:"200px",width:"200px"}} src="/support_agent_avatar_1782635576662.jpg" alt="Support Agent" className="support-avatar" />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="d-flex flex-column gap-3">
                            <SecurityCard
                                icon="bi-shield-check"
                                title="We Value Your Security"
                                desc="Your security is our priority. We will never ask for your password or sensitive information."
                            />
                            <SecurityCard
                                icon="bi-clock-history"
                                title="24/7 Support"
                                desc="Our dedicated support team is available 24/7 to assist you."
                            />
                        </div>
                    </div>
                </div>

                {/* Contact Methods */}
                <div className="row g-4">
                    <div className="col-12 col-lg-5">
                        <div className="support-card p-4 h-100">
                            <h5 className="fw-bold mb-4 text-esco-primary">Instant Support</h5>
                            <ContactRow label="Phone Number" value="+8801612280451" icon="bi-telephone-fill" onCopy={() => copyToClipboard('+8801612280451')} />
                            <ContactRow label="Telegram Username" value="https://t.me/ansarul54" icon="bi-telegram" onCopy={() => copyToClipboard('https://t.me/ansarul54')} />
                        </div>
                    </div>

                    <div className="col-12 col-lg-7">
                        <div className="support-card p-4 h-100">
                            <h5 className="fw-bold mb-4 text-esco-primary">Other Ways to Reach Us</h5>
                            <div className="row row-cols-1 row-cols-sm-3 g-3 text-center">
                                <SupportOption icon="bi-envelope-fill" title="Email Support" sub="escotradecoltd@gmail.com" link="mailto:escotradecoltd@gmail.com" />
                                <SupportOption icon="bi-chat-dots-fill" title="Live Chat" sub="Chat with our support team" onClick={startLiveChat} />
                                <SupportOption icon="bi-question-circle" title="Help Center" sub="Find answers to common questions" link="/faqs" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

// Sub-components for clean code
const SecurityCard = ({ icon, title, desc }) => (
    <div className="d-flex gap-3 p-3 rounded-4" style={{ backgroundColor: '#f0fdf4', border: '1px solid #d1fae5' }}>
        <div className="text-success fs-4"><i className={`bi ${icon}`}></i></div>
        <div>
            <h6 className="fw-bold mb-1 text-esco-primary">{title}</h6>
            <p className="mb-0 text-esco-muted" style={{ fontSize: '0.85rem' }}>{desc}</p>
        </div>
    </div>
);

const ContactRow = ({ label, value, icon, onCopy }) => (
    <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center gap-3">
            <div className="badge-circle bg-light-success"><i className={`bi ${icon}`}></i></div>
            <div>
                <span className="text-muted d-block small">{label}</span>
                <strong className="font-mono text-esco-primary">{value}</strong>
            </div>
        </div>
        <button className="btn btn-sm btn-outline-success" onClick={onCopy}>Copy</button>
    </div>
);

const SupportOption = ({ icon, title, sub, link, onClick }) => (
    <div className="col d-flex flex-column align-items-center" style={{ cursor: 'pointer' }} onClick={onClick}>
        <div className="badge-circle bg-light-primary mb-3"><i className={`bi ${icon}`}></i></div>
        <h6 className="fw-bold mb-1">{title}</h6>
        {link ? <a href={link} className="text-success small text-decoration-none">{sub}</a> : <span className="text-muted small">{sub}</span>}
    </div>
);

export default Support;