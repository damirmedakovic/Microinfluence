import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavbarHome from "../components/NavbarHome";

export default function Dashboard() {

  const content = false;

  return (
    <div>
      <NavbarHome />
      <div>
        <div class="bg-indigo-800">
          <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between flex-wrap">
              <div class="w-0 flex-1 flex items-center">
                <p class="ml-3 font-medium text-white truncate">
                  <span class="md:hidden">We announced a new product!</span>
                  <span class="hidden md:inline">Mitt skrivebord</span>
                </p>
              </div>
              <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="/new-campaign"
                  class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  + Ny kampanje
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="w-1/5 tracking-widest text-gray-700 bg-gray-100 border-r-2 text-sm font-medium h-screen overflow-scroll">
          <div class="text-center mb-4 mt-8">
            {" "}
            <span class="font-bold uppercase text-md">Kampanjer</span>
          </div>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">Alle</div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">Aktive</div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">Utgåtte</div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">Pausede</div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">Planlagte</div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">Skisser</div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">Ferdige</div>
          </a>
          <div class="text-center mb-4 mt-8">
            {" "}
            <span class="font-bold uppercase text-md">Innholdssamling</span>
          </div>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">
              Tilgjengelige
            </div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">Kjøpte</div>
          </a>

          <div class="text-center mb-4 mt-8">
            {" "}
            <span class="font-bold uppercase text-md">Influencere</span>
          </div>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">Alle</div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">Dine fans</div>
          </a>
          <a class="" href="#">
            <div class="ml-2 px-4 py-2 border-b-2 hover:border-2 hover:border-indigo-800 hover:bg-gray-50 rounded-md">Grupper</div>
          </a>
        </div>
        <div class="w-4/5 h-screen flex flex-col justify-center items-center">



          <span class="mb-8">Du har ingen aktive kampanjer for øyeblikket...</span>

        <img class="h-64 w-86" src={require("../assets/images/empty.png")}></img>

        </div>
      </div>

      <Footer />
    </div>
  );
}
