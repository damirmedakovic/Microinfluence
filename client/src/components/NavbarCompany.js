import React from "react";

import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NavbarCompany() {
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
        <div class="flex-1 flex bg-white border-b-2 border-gray-200 px-4 items-center justify-end w-full">
          <div class="flex px-4 -space-x-1 overflow-hidden">
            <span class="flex h-3 w-3">
              <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <img
              class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>

          <Link to={"/login"}>
            <button class="rounded-full m-2 bg-indigo-500 hover:bg-indigo-400 px-3 py-2 text-white text-sm font-medium">
              Logg ut
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
