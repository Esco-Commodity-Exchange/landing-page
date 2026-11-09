import React from "react";
import PageHero from "../components/PageHero";

const policyParagraphs = [
  'Information on this website is general information about the company and its business areas. It is not financial, investment, legal or tax advice and should not be treated as a recommendation to buy or sell any asset.',
  'Gold, silver and other commodity prices may rise or fall. A customer may receive less than the amount paid when selling an asset, depending on the applicable buy and sell prices, fees and market conditions.',
  'Digital services may involve operational, technology, payment, custody, counterparty, liquidity, delivery and cybersecurity risks. Internet access, payment services or third-party providers may be interrupted or unavailable.',
  'Before using any product, read its specific terms, pricing, fees, delivery rules and risk information. Do not transact with money you cannot afford to lose. Contact support@esco.com.bd for general company enquiries.',
];

export default function RiskDisclosure() {
  return (
    <>
      <PageHero
        title="Risk Disclosure"
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
