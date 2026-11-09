import React from "react";
import PageHero from "../components/PageHero";

const policyParagraphs = [
  'This website is a corporate information website and does not itself sell goods, accept deposits or process payments. Therefore, a website visit or general enquiry does not create a payment or refund entitlement.',
  'Any purchase, sale, delivery, payment, cancellation or refund relating to a product or service of Esco Trade & Co Ltd. will be governed by the applicable product-specific terms, order confirmation and relevant law.',
  'For a question about a transaction, contact support@esco.com.bd and include the relevant order or transaction reference. Do not send passwords, PINs or one-time verification codes by email.',
];

export default function RefundPolicy() {
  return (
    <>
      <PageHero
        title="Refund Policy"
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
