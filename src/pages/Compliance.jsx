import React from "react";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { company } from "../data";

const companyDetails = [
  ["Legal Company Name", company.name],
  ["Company Type", company.type],
  ["RJSC Incorporation No.", company.incorporation],
  ["Trade License No.", company.tradeLicense],
  ["Company e-TIN", company.tin],
  ["Registered Office", company.address],
];

export default function Compliance() {
  return (
    <>
      <PageHero
        title="Corporate Information & Compliance"
        text="Company identity and compliance information for customers, partners and service providers."
      />
      <section className="wrap prose">
        <div className="company wide">
          <h2><FileText /> Company Details</h2>
          <dl>
            {companyDetails.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="policy-links">
            <h3>Website Policies</h3>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/risk-disclosure">Risk Disclosure</Link>
          </div>
        </div>
      </section>
    </>
  );
}
