import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

class Privacy extends Component {
    render() {
        return (
            <>
                <Header title="Privacy Policy"/>

                <main className="legal-hero">
                    <div className="site-container legal-shell">
                        <div>
                            <Link className="btn-secondary" to="/" aria-label="Back to home">&larr; Back to
                                Home</Link>
                        </div>

                        <div>
                            <span className="eyebrow">Legal</span>
                            <h1 className="page-title">Privacy Policy</h1>
                            <p className="section-lead">
                                This Privacy Policy explains how ESCO Commodity Exchange collects, uses, shares, and
                                protects user information. By using our services, you agree to the practices described
                                in this policy.
                            </p>
                            <div className="legal-meta">
                                <span className="meta-pill">Last updated: June 25, 2026</span>
                                <span className="meta-pill">Applies to the web app and mobile app</span>
                            </div>
                        </div>

                        <div className="legal-banner">
                            ESCO Commodity Exchange is committed to protecting user information and using it only for
                            the purposes needed to operate, secure, and improve the platform.
                        </div>

                        <section className="policy-stack" aria-label="Privacy policy sections">
                            <article className="policy-item">
                                <span className="policy-number">01</span>
                                <h3>Information We Collect</h3>
                                <p><strong>Personal Information:</strong> We may collect your email address and an
                                    encrypted password when you create an account or sign in to the platform.</p>
                                <p><strong>Technical Data:</strong> We may collect IP address and related device or
                                    browser details to help secure the platform and improve performance.</p>
                                <p><strong>Transaction Data:</strong> We may collect wallet addresses, transaction
                                    history, and platform activity to support your use of ESCO Commodity Exchange.</p>
                            </article>

                            <article className="policy-item">
                                <span className="policy-number">02</span>
                                <h3>KYC Verification</h3>
                                <p>For identity verification and compliance purposes, we may collect KYC information
                                    such as your passport, NID card, full name, and birthday.</p>
                                <p>This information helps us confirm identity, support account verification, and
                                    maintain a secure and compliant platform experience.</p>
                                <p>KYC documents are handled securely and are used only for lawful verification, risk
                                    control, and account integrity purposes.</p>
                            </article>

                            <article className="policy-item">
                                <span className="policy-number">03</span>
                                <h3>How We Use Your Information</h3>
                                <p>We use your information to process transactions, support platform activity, and
                                    manage account-related services.</p>
                                <p>We also use it to verify identity, support KYC requirements, and comply with legal
                                    obligations and regulatory requirements.</p>
                            </article>

                            <article className="policy-item">
                                <span className="policy-number">04</span>
                                <h3>Sharing of Information</h3>
                                <p>We do not sell or rent user information.</p>
                                <p>We may disclose information if required by law or where necessary to protect the
                                    platform, its users, or our legal rights.</p>
                                <p>Aggregated, non-personal data may be shared for analytics and service improvement
                                    purposes.</p>
                            </article>

                            <article className="policy-item">
                                <span className="policy-number">05</span>
                                <h3>Data Security</h3>
                                <p>We implement industry-standard encryption and security measures to protect user
                                    information.</p>
                                <p>Regular security audits are conducted to reduce the risk of unauthorized access,
                                    misuse, or data loss.</p>
                                <p>Users must keep their account credentials secure, and no online platform can be
                                    considered entirely secure.</p>
                            </article>

                            <article className="policy-item">
                                <span className="policy-number">06</span>
                                <h3>User Rights and Choices</h3>
                                <p>Users can access, modify, or delete their personal information where permitted by law
                                    and platform policy.</p>
                                <p>Users may opt out of marketing communications at any time.</p>
                                <p>Requests regarding data handling can be submitted through our support team.</p>
                            </article>

                            <article className="policy-item">
                                <span className="policy-number">07</span>
                                <h3>Third-Party Links and Services</h3>
                                <p>Our platform may contain links to third-party websites or services.</p>
                                <p>We are not responsible for the privacy practices of external services, and users
                                    should review those policies before using them.</p>
                                <p>Integrations with third-party services may require user consent.</p>
                            </article>

                            <article className="policy-item">
                                <span className="policy-number">08</span>
                                <h3>Cookies and Tracking Technologies</h3>
                                <p>We use cookies and similar technologies to enhance user experience, improve security,
                                    and support platform functionality.</p>
                                <p>Users can manage cookie preferences through their browser settings.</p>
                                <p>Cookies may also help personalize content and improve overall service
                                    performance.</p>
                            </article>

                            <article className="policy-item">
                                <span className="policy-number">09</span>
                                <h3>Data Retention Policy</h3>
                                <p>We retain user data as long as necessary for service provision, legal compliance,
                                    security monitoring, or dispute resolution.</p>
                                <p>Legal or security requirements may require extended retention in some cases.</p>
                                <p>Users can request data deletion, subject to certain limitations and legal
                                    requirements.</p>
                                <p>Archived data may be used for analytics and security monitoring.</p>
                            </article>

                            <article className="policy-item">
                                <span className="policy-number">10</span>
                                <h3>Updates to This Privacy Policy</h3>
                                <p>We may update this policy periodically to reflect changes in our services, legal
                                    obligations, or security practices.</p>
                                <p>Users will be notified of significant changes when appropriate.</p>
                                <p>Continued use of the platform means you agree to the updated policy, and the latest
                                    version will always be available on our website.</p>
                            </article>

                            <article className="policy-item">
                                <span className="policy-number">11</span>
                                <h3>Contact Information</h3>
                                <p>For privacy-related inquiries, you can contact our support team through the official
                                    ESCO Commodity Exchange website.</p>
                                <p>Support team members are available to answer questions about data protection and
                                    formal privacy requests.</p>
                                <p>Email: support@esco.com.bd</p>
                            </article>

                            <article className="policy-item">
                                <span className="policy-number">12</span>
                                <h3>Children's Privacy</h3>
                                <p>Our services are not intended for individuals under the age of 13.</p>
                                <p>We do not knowingly collect personal information from children under 13.</p>
                                <p>If we become aware that a child under 13 has provided personal information, we will
                                    take steps to delete it promptly.</p>
                                <p>Parents or guardians who believe a child has provided personal information may
                                    contact us to request removal.</p>
                            </article>

                            <article className="policy-item">
                                <span className="policy-number">13</span>
                                <h3>Contact Us</h3>
                                <p>If you have any questions or concerns about this Privacy Policy or your data, please
                                    contact us through our official support channels.</p>
                                <p>Email: support@esco.com.bd</p>
                                <p>By using the ESCO Commodity Exchange App, you acknowledge that you have read,
                                    understood, and agreed to this Privacy Policy.</p>
                            </article>
                        </section>
                    </div>
                </main>

                <Footer/>
            </>
        );
    }
}

export default Privacy;