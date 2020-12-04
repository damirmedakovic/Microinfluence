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

      <div class="flex-col shadow-2xl border-b-2 border-gray-300 text-center h-screen w-full rounded-bl-full rounded-br-full bg-gradient-to-b from-indigo-900 to-blue-300">
          <div class="text-white pt-48 text-3xl">Øk rekkeviden, farten og kvaliteten av din neste influencer-marketing kampanje.</div>
          <div class="text-white text-lg pt-3">Alle posts du kjøper av influencere får du på forhånd. Velg fritt hvilke du beholder. </div>
      </div>
    <Timeline />

      <CtaContact />

      <Footer />
    </div>
  );
}
