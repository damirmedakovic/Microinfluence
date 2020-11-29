import React from "react";

export default function Timeline() {
  return (
    <div>
      <div className="flex py-24 mt-20 justify-center">
        <div className="p-12 text-center max-w-2xl">
          <div className="md:text-3xl text-3xl font-bold">
            Hvordan fungerer det?
          </div>
          <div className="text-xl font-normal mt-4">
            Microinfluence bygger på en innovativ modell som gir deg muligheten til å føre kreative kampanjer med ekte innhold fra influencere som resonnerer med kunder.    
            
          </div>

        </div>
      </div>
      <div className="min-h-screen ">
        <div className="min-h-screen flex justify-center">
          <div className="w-2/3 mx-auto">
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-10">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">Lag kampanje</div>
                    <div className="flex flex-row">
                      <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200">
                        <i className="far fa-edit"></i>
                      </button>
                      <button className="text-red-500 hover:text-red-300 transition duration-200">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-gray-600">
                    Bruk vår innebyggede mal for å enkelt lage en kampanje som beskriver hva du ønsker fra influencerne på platformen. Du spesifiserer ønsket form, stil og budsjett.
                  </div>
                </div>
              </div>
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-indigo-300 items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-indigo-300 leading-none text-center z-10 bg-white font-thin">
                    <div>1</div>
                  </div>
                </div>
              </div>
              <div className="w-2/5 px-2 py-10 "></div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-10"></div>
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-indigo-300 items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-indigo-300 leading-none text-center z-10 bg-white font-thin">
                    <div>2</div>

                  </div>
                </div>
              </div>
              <div className="w-2/5 px-2 py-10 ">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">Få tilbud</div>
                  </div>
                  <div className="text-gray-600">
                    Influencere på platformen ser kampanjen og lager naturlig og høyt konverterende innhold og laster det opp hvor du kan se det. Du har oversikt over de individuelle influencerne sine følgere og andre nøkkeltall.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-10">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">Engasjer med dine kunder</div>
                    <div className="flex flex-row">
                      <button className="text-blue-500 mr-2 hover:text-blue-300 transition duration-200">
                        <i className="far fa-edit"></i>
                      </button>
                      <button className="text-red-500 hover:text-red-300 transition duration-200">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-gray-600">
                    Enkelt kjøp de postene som er mest appellerende. Influencere poster de valgte innleggene på sine platformer innen 48 timer.
                  </div>
                </div>
              </div>
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-indigo-300 items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-indigo-300 leading-none text-center z-10 bg-white font-thin">
                    <div>3</div>
                  </div>
                </div>
              </div>
              <div className="w-2/5 px-2 py-10 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
