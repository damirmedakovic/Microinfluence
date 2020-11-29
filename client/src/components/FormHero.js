import React from "react";
import { Link } from "react-router-dom";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormHero() {
  return (
    <div>
      <div class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div class="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-xl tracking-tight font-semibold text-gray-900 sm:text-2xl md:text-4xl">
                  <span class="block xl:inline tracking-wide">
                    Influencers + Brands ={" "}
                  </span>
                  <span class="block text-indigo-800 xl:inline">
                    <FontAwesomeIcon icon={faHeart} />
                  </span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Med Microinfluence har både influencere og bedrifter en felles
                  platform for å lage, spore og utføre digitale
                  markedsføringskampanjer.
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">
                    <a
                      href="/register-company"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Registrer som bedrift
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/register-influencer"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Registrer som influencer
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
