import React from "react";
import Footer from "../components/Footer";
import NavbarHome from "../components/NavbarHome";
import { Link } from "react-router-dom";

import {
  faCheck,
  faDollarSign,
  faThumbsUp,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CtaContact from "../components/CtaContact";

export default function InfluencersLanding() {
  return (
    <div>
      <NavbarHome />

      
      <div>
        <div class="text-center">
          <h2 class="text-5xl py-10 font-bold mt-10">
            <span class="text-indigo-800">Gjør det du elsker.</span> Tjen mer.
          </h2>
          <h4 class="text-xl py-5 font-light">
            Har du 2000 følgere eller mer på Instagram eller YouTube? Vi kobler
            innholdsprodusenter/influencere med
            <span class="text-indigo-500"> merkevarer</span>
          </h4>
        </div>
        <div class="flex justify-around mt-10">
          <div class="shadow-lg overflow-hidden hover:shadow-2xl rounded-3xl h-94 w-72 ">
            <img src={require("../assets/images/money_2.jpg")}></img>
            <p class="text-xl font-bold text-center mb-3">1.</p>
            <p class="text-center pb-5 px-3">
              Finn produkter du har eller ønsker å kjøpe
            </p>
          </div>
          <div class="shadow-lg overflow-hidden hover:shadow-2xl rounded-3xl h-94 w-72 ">
            <img src={require("../assets/images/promote.jpg")}></img>
            <p class="text-xl font-bold text-center mb-3 mt-3">2.</p>
            <p class="text-center pb-5 px-3">
              Lag naturlig innhold med produktet. Seerne dine vil sette pris på
              det!
            </p>
          </div>
          <div class="shadow-lg overflow-hidden hover:shadow-2xl rounded-3xl h-94 w-72 ">
            <img src={require("../assets/images/money_1.jpg")}></img>
            <p class="text-xl font-bold text-center mb-3">3.</p>
            <p class="text-center pb-5 px-3">Få betalt med en gang</p>
          </div>
        </div>

  
        <div class="text-center mt-14 py-5 mb-14">
          <Link to={"/register-choose"}>
            <button class="rounded-full bg-indigo-500 hover:bg-indigo-400 py-5 px-5 text-white text-2xl font-bold">
              Finn ut mer
            </button>
          </Link>
        </div>
      </div>
      <div class="text-center border-t-2 border-b-2 border-black bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
        <p class="py-6 pt-12 font-extrabold text-4xl text-white">
           <FontAwesomeIcon icon={faCheck} /> Lag innhold
        </p>
        <p class="py-6 font-extrabold text-4xl text-white">
<FontAwesomeIcon icon={faCheck} /> Ha det gøy
        </p>
        <p class="py-6 pb-12 font-extrabold text-4xl text-white">
           <FontAwesomeIcon icon={faCheck} /> Tjen penger
        </p>

      </div>
      <div class="flex py-16 mt-28 justify-around w-full">
        <div class="h-64 rounded-xl w-1/5 ">
          <div class="break-words">
            <p class="px-3 text-4xl font-normal">
              Hvorfor du kommer til å elske Microinfluence
            </p>
          </div>
        </div>
        <div class="h-64 w-1/5 rounded-xl border-4 border-gray-100">
          <div class="text-center py-6">
            {" "}
            <FontAwesomeIcon
              style={{ color: "#DDA0DD" }}
              size="4x"
              icon={faTag}
            />
          </div>
          <div class="break-words py-4 px-4">
            <p class="text-md ">
              Du setter din egen pris per post. Take it or leave it.
            </p>
          </div>
        </div>
        <div class="h-64 w-1/5 rounded-xl border-4 border-gray-100">
          <div class="text-center py-6">
            {" "}
            <FontAwesomeIcon
              style={{ color: "#4169E1" }}
              size="4x"
              icon={faThumbsUp}
            />
          </div>
          <div class="break-words py-4 px-4">
            <p class="text-md">
              Du velger hvilke merker du vil jobbe med. Promoter produktene du
              allerede elsker.
            </p>
          </div>
        </div>
        <div class="h-64 w-1/5 rounded-xl border-4 border-gray-100">
          <div class="text-center py-6">
            {" "}
            <FontAwesomeIcon
              style={{ color: "#98FB98" }}
              size="4x"
              icon={faDollarSign}
            />
          </div>
          <div class="break-words py-4 px-4">
            <p class="text-md">Få betalt med en gang. Alt skjer automatisk.</p>
          </div>
        </div>
      </div>

      <CtaContact />

      <Footer />
    </div>
  );
}
