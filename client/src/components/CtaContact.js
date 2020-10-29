import React from "react";

export default function CtaContact() {
  return (
    <div>
      <div className="flex bg-gray-100 py-24 justify-center">
        <div className="p-12 text-center max-w-2xl">
          <div className="md:text-3xl text-3xl font-bold">
            Lurer du fortsatt på noe?
          </div>
          <div className="text-xl font-normal mt-4">
            Ta gjerne kontakt med oss for å slå av en samtale om dine
            flyttebehov og hvordan vi kan hjelpe.
          </div>
          <div className="mt-6 flex justify-center h-12 relative">
            <div
              className="flex shadow-md font-medium absolute py-2 px-4 text-green-100
        cursor-pointer bg-green-600 rounded text-lg tr-mt  svelte-jqwywd"
            >
              Kontakt oss
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
