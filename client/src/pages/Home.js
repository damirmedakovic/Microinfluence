import React from "react";
import Timeline from "../components/Timeline";
import FormHero from "../components/FormHero";
import Footer from "../components/Footer";
import CtaContact from "../components/CtaContact";
import NavbarHome from "../components/NavbarHome";
import Announcement from "../components/Announcement";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <NavbarHome />
      <FormHero />

      <div class="flex justify-center mt-16">
      <div class="text-center rounded-3xl shadow-2xl border-2 border-gray-300 w-4/5">
        <div class="pt-20 text-4xl font-medium">
          <p>
            Genuine posts som promoterer{" "}
            <span class="text-indigo-800">din</span> merkevare.
          </p>
        </div>
        <p class="pb-20 pt-12">Få tilpasset innhold fra influencere som virkelig liker og bruker produktet ditt. Bruk postene du liker best.</p>
      </div>
      </div>
      <CtaContact />
      <Footer />
    </div>
  );
}
