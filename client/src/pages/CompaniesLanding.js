import React from "react";
import Footer from "../components/Footer";
import NavbarHome from "../components/NavbarHome";
import { Link } from "react-router-dom";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CtaContact from "../components/CtaContact";
import Timeline from "../components/Timeline";

export default function CompaniesLanding() {
  return (
    <div>
      <NavbarHome />
      <div class="flex-col text-center h-screen w-full rounded-bl-full rounded-br-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div class="text-white pt-48 text-3xl">Øk rekkeviden, farten og kvaliteten av din neste influencer-marketing kampanje.</div>
          <div>gafasd</div>
          <div>fasdfasfd</div>
      </div>
    <Timeline />

      <CtaContact />

      <Footer />
    </div>
  );
}
