import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import PageHero from "../components/PageHero";
import { company } from "../data";

const contactMethods = [
  { title: "Registered Office", value: company.address, icon: MapPin },
  { title: "Phone", value: company.phone, icon: Phone, href: `tel:${company.phone}` },
  { title: "Email", value: company.email, icon: Mail, href: `mailto:${company.email}` },
];

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Esco Trade & Co Ltd."
        text="For business enquiries, partnerships and general information, contact our office."
      />
      <section className="wrap prose cards">
        {contactMethods.map((method) => {
          const MethodIcon = method.icon;
          return (
            <article key={method.title}>
              <MethodIcon size={32} />
              <h2>{method.title}</h2>
              <p>
                {method.href ? (
                  <a href={method.href}>{method.value}</a>
                ) : method.value}
              </p>
            </article>
          );
        })}
      </section>
    </>
  );
}
