import React from "react";
import PageHero from "../components/PageHero";

const appScreens = [
  { image: "dashboard.jpg", title: "Dashboard" },
  { image: "assets.jpg", title: "Assets" },
  { image: "buy.jpg", title: "Buy" },
  { image: "sell.jpg", title: "Sell" },
  { image: "history.jpg", title: "History" },
];

export default function Shompod() {
  return (
    <>
      <PageHero
        eyebrow="ESCO DIGITAL BRAND"
        title="Shompod — Gold & Silver Trading"
        text="A digital platform for buying, selling and managing gold and silver with asset balances, transaction history and delivery request features."
      />
      <section className="wrap prose two">
        <div>
          <small>GOLD & SILVER</small>
          <h2>Manage precious metal holdings digitally</h2>
          <p>
            Shompod is a digital Gold & Silver trading platform associated
            with Esco Trade & Co Ltd. The product experience is designed
            around fixed-price buy and sell flows, asset balances, transaction
            history and delivery requests.
          </p>
          <ul>
            <li>Gold and Silver buy/sell screens</li>
            <li>BDT and metal asset overview</li>
            <li>Transaction and payment history</li>
            <li>Physical delivery request experience</li>
          </ul>
        </div>
        <img className="largeapp" src="/images/dashboard.jpg" alt="Shompod dashboard" />
      </section>
      <section className="pale">
        <div className="wrap prose">
          <h2>App Preview</h2>
          <div className="screens">
            {appScreens.map((screen) => (
              <div key={screen.title}>
                <img src={`/images/${screen.image}`} alt={screen.title} />
                <b>{screen.title}</b>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
