import React from "react";
import { Link } from "react-router-dom";
import { Store, Truck } from "lucide-react";
import PageHero from "../components/PageHero";

export default function Brands() {
  return (
    <>
      <PageHero
        title="Our Brands & Platforms"
        text="Digital products and business initiatives developed under Esco Trade & Co Ltd."
      />
      <section className="wrap prose cards brandcards">
        <article>
          <img src="/images/dashboard.jpg" alt="Shompod app dashboard" />
          <small>GOLD & SILVER TRADING</small>
          <h2>Shompod</h2>
          <p>
            A digital platform for buying and selling gold and silver, viewing
            asset balances and requesting physical delivery.
          </p>
          <Link to="/brands/shompod">Explore Shompod →</Link>
        </article>
        <article>
          <Store size={42} />
          <small>AGRO & B2B</small>
          <h2>Esco Marketplace</h2>
          <p>A planned digital marketplace connecting businesses, suppliers and buyers.</p>
        </article>
        <article>
          <Truck size={42} />
          <small>LOGISTICS</small>
          <h2>Esco Logistics</h2>
          <p>A planned logistics and delivery service for businesses and customers.</p>
        </article>
      </section>
    </>
  );
}
