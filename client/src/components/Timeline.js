import React from "react";

export default function Timeline() {
  return (
    <div>
      <div className="flex bg-gray-100 py-24 justify-center">
        <div className="p-12 text-center max-w-2xl">
          <div className="md:text-3xl text-3xl font-bold">
            Hvordan fungerer det?
          </div>
          <div className="text-xl font-normal mt-4">
            Vi er et hjem for både bedrifter som ønsker å markedsføre seg og innholdsprodusenter på blant annet TikTok, Instagram og YouTube.
            
          </div>
          <div className="mt-6 flex justify-center h-12 relative"></div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100">
        <div className="min-h-screen flex justify-center">
          <div className="w-2/3 mx-auto">
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-10">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">Svjatoslav Torn</div>
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
                    Привет Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ad corporis culpa deserunt, dignissimos dolor esse
                    fugit ipsam minus odit officiis placeat qui, quidem quis
                    soluta vero? Adipisci alias eius et iure nam nihil
                    reiciendis saepe, voluptatem. Alias cumque dicta dignissimos
                    ea et laborum, minima similique.
                  </div>
                </div>
              </div>
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                    <div>1</div>
                    <div>Steg</div>
                  </div>
                </div>
              </div>
              <div className="w-2/5 px-2 py-10 "></div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-10"></div>
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                    <div>2</div>
                    <div>Steg</div>
                  </div>
                </div>
              </div>
              <div className="w-2/5 px-2 py-10 ">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">Svetlana Torn</div>
                  </div>
                  <div className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis enim esse fuga modi quisquam veritatis? Привет
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    corporis culpa deserunt, dignissimos dolor esse fugit ipsam
                    minus odit officiis placeat qui, quidem quis soluta vero?
                    Adipisci alias eius et iure nam nihil reiciendis saepe,
                    voluptatem. Alias cumque dicta dignissimos ea et laborum,
                    minima similique.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-2/5 px-2 py-10">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                  <div className="text-gray-600 mb-2 flex justify-between">
                    <div className="font-bold">Svjatoslav Torn</div>
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
                    Привет Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ad corporis culpa deserunt, dignissimos dolor esse
                    fugit ipsam minus odit officiis placeat qui, quidem quis
                    soluta vero? Adipisci alias eius et iure nam nihil
                    reiciendis saepe, voluptatem. Alias cumque dicta dignissimos
                    ea et laborum, minima similique.
                  </div>
                </div>
              </div>
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                    <div>3</div>
                    <div>Steg</div>
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
