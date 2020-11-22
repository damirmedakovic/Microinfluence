import React from "react";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import FormHero from "../components/FormHero";
import Footer from "../components/Footer";
import CtaContact from "../components/CtaContact";
import CustomNavbar from "../components/CustomNavbar";

export default function Home() {
  return (
    <div>
      <CustomNavbar />
      <FormHero />
      <Timeline />
      <CtaContact />
      <Footer />
    </div>
  );
}
