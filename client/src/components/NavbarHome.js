import React from "react";

import { Link } from "react-router-dom";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavbarHome() {
  return (
    <div>
      <header class="flex">
        <div class="flex-shrink-0 px-4 py-3 bg-white border-b-2 border-gray-200 text-black">
          <Link to={"/"}>
          <button class="items-center flex uppercase font-bold hover:text-gray-800 tracking-widest">
            Microinfluence
          </button>
          </Link>
        </div>
        <div class="flex-1 flex bg-white border-b-2 border-gray-200 px-4 items-center justify-between">
          <nav class="flex">
            <a
              href="#"
              class="inline-block hover:bg-gray-100 rounded-lg px-3 py-2 ml-2 leading-none text-sm text-black font-medium"
            >
              Bedrifter
            </a>
            <a
              href="#"
              class="inline-block hover:bg-gray-100 rounded-lg px-3 py-2 ml-2 leading-none text-sm text-black font-medium"
            >
              Influencere
            </a>
            <a
              href="#"
              class="inline-block hover:bg-gray-100 rounded-lg px-3 py-2 ml-2 leading-none text-sm text-black font-medium"
            >
              Ofte stilte spørsmål
            </a>
            <a
              href="#"
              class="inline-block hover:bg-gray-100 rounded-lg px-3 py-2 ml-2 leading-none text-sm text-black font-medium"
            >
              Om oss
            </a>
          </nav>
          <div>
          <Link to={"/login"}>
            <button class="rounded-full m-2 bg-indigo-500 hover:bg-indigo-400 px-3 py-2 text-white text-sm font-medium">
              Logg inn
            </button>
            </Link>
            <Link to={"/register-choose"}>
              <button class="rounded-full m-2 bg-indigo-500 hover:bg-indigo-400 px-3 py-2 text-white text-sm font-medium">
                Registrer deg
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
