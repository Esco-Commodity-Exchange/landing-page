import React from "react";
import PageHero from "../components/PageHero";

export default function Media() {
  return (
    <>
      <PageHero
        title="Media & Updates"
        text="Company announcements, product updates and public information from Esco Trade & Co Ltd."
      />
      <section className="wrap prose center">
        <h2>News and announcements</h2>
        <p>Company news and media updates will be published here.</p>
      </section>
    </>
  );
}
