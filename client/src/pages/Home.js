import React from "react";
import Timeline from "../components/Timeline";
import FormHero from "../components/FormHero";
import Footer from "../components/Footer";
import CtaContact from "../components/CtaContact";
import NavbarHome from "../components/NavbarHome";

export default function Home() {
  return (
    <div>
      <NavbarHome />
      <FormHero />
      <Timeline />
      <CtaContact />
      <Footer />
    </div>
  );
}
