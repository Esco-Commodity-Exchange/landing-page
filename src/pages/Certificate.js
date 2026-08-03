import {Link} from "react-router-dom";

import React, { useState, useEffect } from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"

const CertificatesPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [modalData, setModalData] = useState({ show: false, src: '', title: '' });

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('esco_logged_in') === 'true');
    }, []);

    const openCertModal = (src, title) => {
        setModalData({ show: true, src, title });
    };

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('esco_logged_in');
        window.location.reload();
    };

    return (
        <div className="esco-wrapper position-relative">


            {/* HEADER NAVIGATION */}
            {<Header title={"Company Certificates"}/>}
            {/* MAIN CONTENT AREA */}
            <main className="container py-5">
                <div className="d-flex align-items-center gap-3 mb-5">
                    <button onClick={() => window.history.back()} className="btn border-0 p-0 shadow-none" style={{ width: "44px", height: "44px", borderRadius: "50%" }}>
                        <i className="bi bi-arrow-left fs-3"></i>
                    </button>
                    <div>
                        <h2 className="font-display fw-bold text-esco-primary m-0" style={{ fontSize: "2.15rem" }}>Certificates</h2>
                        <p className="text-muted small m-0 mt-1">Our licenses and certificates that ensure a secure and transparent trading environment.</p>
                    </div>
                </div>

                <div className="row g-4 mb-5">
                    {[
                        { img: "/BIN Certification (1) (1).PDF.png", title: "BIN Certification", desc: "Licensed by the Financial Regulatory Authority to provide financial services." },
                        { img: "/Incorporation Certificate (1) (1).pdf.png", title: "Money Services Business (MSB) License", desc: "Authorized to operate as a Money Services Business in compliance with regulatory standards." },
                        { img: "/tin_certificate_354561795486 (1) (1).pdf.png", title: "TIN Certificate", desc: "Taxpayer Identification Number certificate for official business operations." }
                    ].map((item, idx) => (
                        <div className="col-12 col-md-4" key={idx}>
                            <div className="cert-card p-3 h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <img src={item.img} alt={item.title} className="cert-preview-img mb-3" onClick={() => openCertModal(item.img, item.title)} />
                                    <h5 className="fw-bold mb-2 text-esco-primary" style={{ fontSize: "1.05rem" }}>{item.title}</h5>
                                    <p className="text-esco-muted small mb-3">{item.desc}</p>
                                </div>
                                <button className="view-btn w-100 justify-content-center" onClick={() => openCertModal(item.img, item.title)}>
                                    View Certificate <i className="bi bi-box-arrow-up-right"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="trusted-banner p-4 d-flex align-items-center gap-3">
                    <div className="text-success fs-3"><i className="bi bi-shield-fill-check"></i></div>
                    <div>
                        <h6 className="fw-bold mb-1 text-esco-primary">Trusted & Compliant</h6>
                        <p className="mb-0 text-esco-muted small">We are committed to maintaining the highest standards of security, transparency, and compliance.</p>
                    </div>
                </div>
            </main>

            {/* CERTIFICATE MODAL */}
            {modalData.show && (
                <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} onClick={() => setModalData({ ...modalData, show: false })}>
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content shadow-lg border-0 rounded-4">
                            <div className="modal-header border-0 pb-0">
                                <h5 className="modal-title fw-bold text-esco-primary">{modalData.title}</h5>
                                <button className="btn-close" onClick={() => setModalData({ ...modalData, show: false })}></button>
                            </div>
                            <div className="modal-body text-center p-4">
                                <img src={modalData.src} className="img-fluid rounded-3 border" alt="Certificate" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* FOOTER */}
            <Footer/>
        </div>
    );
};

export default CertificatesPage;