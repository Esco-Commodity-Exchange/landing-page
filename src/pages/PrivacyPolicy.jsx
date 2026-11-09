import React from "react";
import PageHero from "../components/PageHero";

const policyParagraphs = [
  'Esco Trade & Co Ltd. respects the privacy of visitors to this website. This policy explains the general approach to information that may be provided when you contact us or use our website.',
  'We may receive information such as your name, phone number, email address and the contents of a message when you contact us. Basic technical information, such as browser type, device information and website usage data, may also be processed by hosting, security or analytics services if those services are enabled.',
  'We use enquiry information to respond to messages, communicate about business matters, maintain website security and meet applicable legal obligations. We do not sell personal contact information.',
  'Information may be processed by trusted website hosting, email, security or technical service providers where needed to operate the website. We may disclose information where required by law or a lawful request from an authority.',
  'We take reasonable technical and organisational steps to protect information. No website or internet transmission can be guaranteed completely secure. We retain enquiry information only for as long as reasonably needed for its purpose or legal obligations.',
  'You may contact us to request access to or correction of information you have provided, subject to applicable law. Contact: support@esco.com.bd.',
  'This website policy does not replace separate privacy notices that may apply to Shompod or any other product. Separate product notices should explain the actual account, transaction, identity-verification, payment and retention practices before those services are launched.',
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        text="Important information about using the Esco Trade & Co Ltd. website."
      />
      <section className="wrap prose legal">
        {policyParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <p className="notice">
          Last updated: 9 November 2026. This website policy should be reviewed
          by a qualified legal adviser before publication and updated to match
          the company’s actual operating practices.
        </p>
      </section>
    </>
  );
}
