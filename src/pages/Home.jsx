import React from "react";
import {
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  Handshake,
  Layers3,
  Sprout,
  Store,
  Truck,
  Users,
  Wallet,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { company, services } from "../data";

const serviceIcons = [ChartNoAxesCombined, Store, Wallet, Truck, Sprout];

const companySummary = [
  ["Company Name", company.name],
  ["Company Type", company.type],
  ["Incorporation No.", company.incorporation],
  ["Incorporation Date", company.incorporationDate],
  ["TIN", company.tin],
  ["Trade Licence No.", company.tradeLicense],
  ["Registered Office", company.address],
];

const highlights = [
  [CalendarDays, "2025", "Incorporated"],
  [Users, "Digital", "Products & Services"],
  [Layers3, "Multiple", "Business Verticals"],
  [Handshake, "Bangladesh", "Focused Company"],
];

const policies = [
  ["Terms & Conditions", "/terms"],
  ["Privacy Policy", "/privacy-policy"],
  ["Refund Policy", "/refund-policy"],
  ["Risk Disclosure", "/risk-disclosure"],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap herotxt">
          <small>ESCO TRADE & CO LTD.</small>
          <h1>
            Digital Trade, Financial &
            <br />
            Commodity Services in Bangladesh
          </h1>
          <p>
            A technology-driven company building trusted, secure and inclusive
            platforms for trading, commodity markets and business services.
          </p>
          <div className="actions">
            <Link className="btn green" to="/about">
              About Us <ArrowRight size={17} />
            </Link>
            <Link className="btn outline" to="/brands">
              Explore Our Brands <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap services">
        {services.map((service, index) => {
          const ServiceIcon = serviceIcons[index];
          return (
            <div className="service" key={service.title}>
              <span className={`sicon c${index}`}>
                <ServiceIcon size={27} />
              </span>
              <span>
                <b>{service.title}</b>
                <small>{service.description}</small>
              </span>
            </div>
          );
        })}
      </section>

      <section className="wrap featuregrid">
        <div className="shompod">
          <div>
            <small>OUR DIGITAL BRAND</small>
            <h2>Shompod</h2>
            <h3>Gold & Silver Trading</h3>
            <p>Buy, sell and manage gold and silver through a simple digital experience.</p>
            <Link className="btn gold" to="/brands/shompod">
              Explore Shompod <ArrowRight size={16} />
            </Link>
          </div>
          <img src="/images/dashboard.jpg" alt="Shompod dashboard" />
        </div>

        <div className="company">
          <h2><Building2 /> Company Information</h2>
          <dl>
            {companySummary.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <Link className="more" to="/compliance">
            Company & compliance details →
          </Link>
        </div>
      </section>

      <section className="stats">
        <div className="wrap statgrid">
          {highlights.map(([HighlightIcon, value, label]) => (
            <div key={label}>
              <HighlightIcon size={32} />
              <span>
                <b>{value}</b>
                <small>{label}</small>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap business">
        <small>OUR BUSINESS</small>
        <h2>Building Across Digital Industries</h2>
        <div className="cards">
          {services.slice(0, 4).map((service, index) => {
            const ServiceIcon = serviceIcons[index];
            return (
              <article key={service.title}>
                <ServiceIcon size={30} />
                <h3>{service.title}</h3>
                <p>
                  {service.description}. Developing accessible solutions for
                  customers and businesses.
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="wrap legal-shortcuts">
        <small>POLICIES & INFORMATION</small>
        <h2>Website Policies</h2>
        <div>
          {policies.map(([label, path]) => (
            <Link key={path} to={path}>
              {label} <span>→</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
