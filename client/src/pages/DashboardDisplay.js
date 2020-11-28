import React from 'react';
import Footer from "../components/Footer";
import NavbarHome from "../components/NavbarHome";

export default function DashboardDisplay() {
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
        <div class="w-1/5 text-white bg-gray-700 text-sm font-medium h-screen overflow-scroll">
          <div class="px-8 py-2 mt-5">
            {" "}
            <span class="font-semibold text-md">Kampanjer</span>
          </div>
          <a class="" href="#">
            <div class="px-4 py-2 hover:bg-gray-100 rounded-md">Alle</div>
          </a>
          <a class="" href="#">
            <div class="px-4 py-2 hover:bg-gray-100 rounded-md">Aktive</div>
          </a>
          <a class="" href="#">
            <div class="px-4 py-2 hover:bg-gray-100 rounded-md">Utgåtte</div>
          </a>
          <a class="" href="#">
            <div class="px-4 py-2 hover:bg-gray-100 rounded-md">Pausede</div>
          </a>
          <a class="" href="#">
            <div class="px-4 py-2 hover:bg-gray-100 rounded-md">Planlagte</div>
          </a>
          <a class="" href="#">
            <div class="px-4 py-2 hover:bg-gray-100 rounded-md">Skisser</div>
          </a>
          <a class="" href="#">
            <div class="px-4 py-2 hover:bg-gray-100 rounded-md">Ferdige</div>
          </a>
          <div class="px-8 py-2 mt-5">
            {" "}
            <span class="font-semibold text-md">Innholdssamling</span>
          </div>
          <a class="" href="#">
            <div class="px-4 py-2 hover:bg-gray-100 rounded-md">
              Tilgjengelige
            </div>
          </a>
          <a class="" href="#">
            <div class="px-4 py-2 hover:bg-gray-100 rounded-md">Kjøpte</div>
          </a>

          <div class="px-8 py-2 mt-5">
            {" "}
            <span class="font-semibold text-md">Influencere</span>
          </div>
          <a class="" href="#">
            <div class="px-4 py-2 hover:bg-gray-100 rounded-md">Alle</div>
          </a>
          <a class="" href="#">
            <div class="px-4 py-2 hover:bg-gray-100 rounded-md">Dine fans</div>
          </a>
          <a class="" href="#">
            <div class="px-4 py-2 hover:bg-gray-100 rounded-md">Grupper</div>
          </a>
        </div>
        
        <div class="h-screen w-full flex flex-wrap">
            <div class="bg-green-800 h-24 w-24"></div>
            <div class="bg-green-800 h-24 w-24"></div>

            <div class="bg-green-800 h-24 w-24"></div>
            <div class="bg-green-800 h-24 w-24"></div>
            <div class="bg-green-800 h-24 w-24"></div>

            <div class="bg-green-800 h-24 w-24"></div>
            <div class="bg-green-800 h-24 w-24"></div>
            <div class="bg-green-800 h-24 w-24"></div>

            <div class="bg-green-800 h-24 w-24"></div>



        </div>
      </div>

      <Footer />
    </div>

            
    )
}
