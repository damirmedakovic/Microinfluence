import React from "react";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import FormHero from "../components/FormHero";
import Footer from "../components/Footer";
import CtaContact from "../components/CtaContact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FormHero />
      <Timeline />
      <CtaContact />
      <Footer />
    </div>
  );
}
