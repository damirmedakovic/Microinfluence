import React from "react";
import CtaContact from "../components/CtaContact";
import Footer from "../components/Footer";
import NavbarHome from "../components/NavbarHome";

export default function QA() {
  return (
    <div>
      <NavbarHome />
      <div class="px-4 grid grid-cols-3 gap-4 py-20 shadow-2xl border-b-2 border-gray-300 text-center h-screen w-full rounded-bl-full rounded-tr-full rounded-br-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div class="bg-white py-4 rounded-br-2xl rounded-tl-2xl shadow-2xl border-2 border-black">
          <span class="text-black underline">
            Hvem er influencerne på Microinfluence?
          </span>
          <p class="py-4 px-4">
            Vi definerer influencere som de som har 2000 følgere eller mer på
            platformer som for eksempel Instagram, TikTok eller YouTube. De
            liker å gjøre kreativt arbeid og ønsker å leve av innholdet de
            produserer, noe vi ønsker å hjelpe med.
          </p>
        </div>
        <div class="bg-white py-4 rounded-br-2xl rounded-tl-2xl shadow-2xl border-2 border-black">
          <span class="text-black underline">
            Hvem er bedriftene på Microinfluence?
          </span>
          <p class="py-4 px-4">
            Bedriftene er små og store bedrifter med merkevarer, samt
            markedsføringsbyråer som representerer bedrifter. Disse ønsker å
            bruke influencer-marketing for å styrke sin merkevare på lang sikt
            eller føre promosjoner for å drive salg på kort sikt.
          </p>
        </div>
        <div class="bg-white py-4 rounded-br-2xl rounded-tl-2xl shadow-2xl border-2 border-black">
          <span class="text-black underline">Hvem kan se profilen min?</span>
          <p class="py-4 px-4">
            Det er kun bedrifter som er registrert på platformen som kan se
            influencer-profiler. Bedrifter som lager kampanjer på Microinfluence
            kan bli sett av influencere på platformen.{" "}
          </p>
        </div>
        <div class="bg-white py-4 rounded-br-2xl rounded-tl-2xl shadow-2xl border-2 border-black">
          <span class="text-black underline">Koster det noe?</span>
          <p class="py-4 px-4">
            Microinfluence er helt gratis for influencere. Bedrifter kan betale
            engangsavgift per kampanje eller abonnere på en årlig plan. Hvilken
            løsning som lønner seg avhenger av størrelsen på bedriften og hvor
            mange kampanjer som planlegges utført. Vi ønsker å tilpasse oss
            bedrifter av alle størrelser.{" "}
          </p>
        </div>{" "}
        <div class="bg-white py-4 rounded-br-2xl rounded-tl-2xl shadow-2xl border-2 border-black">
          <span class="text-black underline">
            Jeg som bedrift startet en kampanje, hva nå?
          </span>
          <p class="py-4 px-4">
            Influencerne i målgruppen din vil kunne se kampanjen, og
            om de ønsker, lage forslag til posts i henhold til dine
            spesifikasjoner. De laster disse opp på platformen hvor du kan velge å kjøpe dem eller ikke.
            De du kjøper blir lagt ut av influencerne på de sosiale mediene du spesifiserte. Voila! 
          </p>
        </div>{" "}
        <div class="bg-white py-4 rounded-br-2xl rounded-tl-2xl shadow-2xl border-2 border-black">
          <span class="text-black underline">
            Kan dere lage X slik at jeg kan gjøre Y?
          </span>
          <p class="py-4 px-4">
            Vi forbedrer platformen kontinuerlig og vil gjerne høre dine
            forslag! Gi en lyd på hei@microinfluence.no.
          </p>
        </div>
      </div>

      <CtaContact />
      <Footer />
    </div>
  );
}
