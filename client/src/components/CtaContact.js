import React from "react";

export default function CtaContact() {
  return (
    <div>
      <div className="flex bg-gray-100 py-24 justify-center">
        <div className="p-12 text-center max-w-2xl">
          <div className="md:text-3xl text-3xl font-bold">
             Klar for å teste ut?
          </div>
          <div className="text-xl font-normal mt-4">
            Registrer deg på under 5 minutt i dag, helt gratis.
          </div>
          <div className="mt-6 flex justify-center h-12 relative">
            <div
              className="flex shadow-md font-medium absolute py-2 px-4 text-green-100
        cursor-pointer bg-indigo-500 rounded text-lg tr-mt  svelte-jqwywd"
            >
              Registrer deg
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
