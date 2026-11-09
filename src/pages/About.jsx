import React from "react";
import PageHero from "../components/PageHero";
import { company } from "../data";

export default function About() {
  return (
    <>
      <PageHero
        title="About Esco Trade & Co Ltd."
        text="A Bangladesh-based private limited company focused on digital trade, commodity services and technology-led business solutions."
      />
      <section className="wrap prose two">
        <div>
          <small>WHO WE ARE</small>
          <h2>Building useful businesses through technology</h2>
          <p>
            {company.name} is a privately incorporated company in Bangladesh.
            We work on digital platforms and business services that connect
            products, customers and commerce.
          </p>
          <p>
            Our areas of interest include commodity trading, marketplaces,
            financial technology and logistics. We aim to develop services
            with transparent processes and a customer-focused experience.
          </p>
        </div>
        <aside className="softcard">
          <img src="/images/esco-logo.png" alt="Esco Trade logo" />
          <h2>{company.name}</h2>
          <p>{company.type}</p>
          <p>RJSC Incorporation No. {company.incorporation}</p>
        </aside>
      </section>
    </>
  );
}
