import React from "react";
import { ChartNoAxesCombined, Store, Wallet, Truck, Sprout } from "lucide-react";
import PageHero from "../components/PageHero";
import { services } from "../data";

const serviceIcons = [ChartNoAxesCombined, Store, Wallet, Truck, Sprout];

export default function Business() {
  return (
    <>
      <PageHero
        title="Business Areas"
        text="Our business interests span digital commodity services, marketplaces, financial technology and delivery solutions."
      />
      <section className="wrap prose cards">
        {services.map((service, index) => {
          const ServiceIcon = serviceIcons[index];
          return (
            <article key={service.title}>
              <ServiceIcon size={32} />
              <h2>{service.title}</h2>
              <p>
                {service.description}. We are developing and evaluating
                technology-enabled business models in this area.
              </p>
            </article>
          );
        })}
      </section>
    </>
  );
}
