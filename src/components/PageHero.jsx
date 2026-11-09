import React from "react";
export default function PageHero({
  title,
  text,
  eyebrow = "ESCO TRADE & CO LTD.",
}) {
  return (
    <section className="pagehero">
      <div className="wrap">
        <small>{eyebrow}</small>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
