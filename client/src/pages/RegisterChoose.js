import React from "react";
import Footer from "../components/Footer";
import NavbarHome from "../components/NavbarHome";

export default function RegisterChoose() {
  return (
    <div>
      <NavbarHome />
      <div className="w-full flex flex-wrap">
        <div className="h-screen border-4 hover:border-indigo-800 w-1/2">
          <p className="flex flex-col mt-24 text-center font-bold text-xl">
            Jeg er en bedrift eller merkevare
          </p>
          <p className="flex flex-col mt-8 text-center text-sm">
            Og jeg vil markedsføre produktene mine
          </p>
          <div class="flex flex-wrap justify-center mt-8 rounded-md">
            <a
              href="/register-company"
              class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Kom i gang
            </a>
          </div>
        </div>
        <div className="h-screen border-4 hover:border-indigo-800 w-1/2">
          <p className="flex flex-col mt-24 text-center font-bold text-xl">
            Jeg er en innholdsprodusent eller influencer
          </p>
          <p className="flex flex-col mt-8 text-center text-sm">
            Og jeg vil få kontakt med merkevarer
          </p>
          <div class="flex flex-wrap justify-center mt-8 rounded-md">
            <a
              href="/register-influencer"
              class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Kom i gang
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
