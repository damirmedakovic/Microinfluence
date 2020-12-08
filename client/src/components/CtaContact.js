import React from "react";
import { Link } from "react-router-dom";



export default function CtaContact() {
  return (
    <div>
      <div className="flex py-16 justify-center">
        <div className="p-12 text-center max-w-2xl">
          <div className="md:text-3xl text-3xl font-bold">
             Klar for å teste det ut?
          </div>
          <div className="text-xl font-normal mt-4">
            Registrer deg på under 5 minutt i dag, helt gratis.
          </div>
          <Link to={"/register-choose"}>

          <div className="mt-6 flex justify-center h-12 relative">
            <div
              className="flex shadow-md font-medium absolute py-4 px-4 text-white
        cursor-pointer bg-indigo-500 rounded-full text-lg "
            >
              Registrer deg
            </div>
           
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
