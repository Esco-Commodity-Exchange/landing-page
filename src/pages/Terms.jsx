import React from "react";
import PageHero from "../components/PageHero";

const policyParagraphs = [
  'These Terms & Conditions govern access to and use of the Esco Trade & Co Ltd. corporate website. By using this website, you agree to use it only for lawful purposes and not to disrupt, damage or attempt to gain unauthorised access to the website or its systems.',
  'The information on this website is provided for general corporate and informational purposes. We may update website content at any time. Product-specific services, transactions and applications may be governed by separate terms and conditions.',
  'All company names, logos, text, graphics and website materials are owned by or used with permission by Esco Trade & Co Ltd., unless otherwise stated. You may not reproduce or commercially use website content without prior written permission.',
  'This website may contain links or references to third-party services. Esco Trade & Co Ltd. is not responsible for the content, availability or policies of third-party websites.',
  'To the extent permitted by applicable law, the company will not be liable for losses arising solely from reliance on general website information or temporary website unavailability. Nothing in these terms excludes liability that cannot lawfully be excluded.',
  'These terms are governed by the laws of Bangladesh. Any dispute will be subject to the jurisdiction of the competent courts of Bangladesh.',
];

export default function Terms() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
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
