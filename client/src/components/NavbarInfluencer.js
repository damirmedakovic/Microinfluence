


import React from 'react'

import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavbarInfluencer() {
    return (
        <div>
                  <header class="flex">
        <div class="flex-shrink-0 px-4 py-3 bg-gray-800 hover:bg-gray-600">
          <button class="items-center flex">
            <img
              class="h-8 w-8 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=64&q=80"
              alt=""
            ></img>
            <span class="ml-4 text-sm font-med text-white">Monica White</span>
            <svg
              class="ml-10 h-6 w-6 stroke-current text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 10l-4 4-4-4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex-1 flex bg-gray-700 px-4 items-center justify-between">
          <nav class="flex">
            <a
              href="#"
              class="inline-block hover:bg-gray-600 rounded-lg bg-gray-800 px-3 py-2 ml-2 leading-none text-sm text-white font-medium"
            >
              Oversikt
            </a>
            <a
              href="#"
              class="inline-block hover:bg-gray-600 rounded-lg px-3 py-2 ml-2 leading-none text-sm text-white font-medium"
            >
              Oppgaver
            </a>
            <a
              href="#"
              class="inline-block hover:bg-gray-600 rounded-lg px-3 py-2 ml-2 leading-none text-sm text-white font-medium"
            >
              Innboks
            </a>
            <a
              href="#"
              class="inline-block hover:bg-gray-600 rounded-lg px-3 py-2 ml-2 leading-none text-sm text-white font-medium"
            >
              Søk
            </a>
          </nav>
          <div>
            <button class="rounded-lg m-2 px-3 py-1 hover:bg-gray-600 text-white text-sm font-medium">
              <FontAwesomeIcon icon={faUserCog} />
            </button>

            <button class="rounded-lg m-2 bg-green-500 hover:bg-green-400 px-3 py-1 text-white text-sm font-medium">
              Logg ut
            </button>
          </div>
        </div>
      </header>
            
        </div>
    )
}
